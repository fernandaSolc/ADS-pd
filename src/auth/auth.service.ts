import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from '../funcionario/entities/funcionario.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private oauthClient: OAuth2Client;

  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
    private readonly jwtService: JwtService, // Usando o serviço do Nest para JWT
  ) {
    this.oauthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  /**
   * Faz o login com Google usando um token de ID e retorna JWT + informações do usuário
   */
  async googleLogin(idToken: string): Promise<{ token: string; user: Funcionario }> {
    try {
      const ticket = await this.oauthClient.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload) {
        this.logger.error('Falha na validação do token: payload vazio');
        throw new UnauthorizedException('Token inválido');
      }

      const { email, name, picture } = payload;

      // Validação do domínio de email permitido
      const dominioPermitido = /@projetodesenvolve(\.com(\.br)?)?$/;
      if (!dominioPermitido.test(email)) {
        this.logger.warn(`Tentativa de login com email não autorizado: ${email}`);
        throw new UnauthorizedException('Email não autorizado.');
      }

      let funcionario = await this.funcionarioRepository.findOne({ where: { email } });

      if (!funcionario) {
        funcionario = this.funcionarioRepository.create({
          nome: name,
          email,
          foto: picture,
          moedas: 0,
          senha: null,
        });
        funcionario = await this.funcionarioRepository.save(funcionario);
        this.logger.log(`Usuário criado: ${email}`);
      }

      const token = this.generateJwt(funcionario);
      return { token, user: funcionario };
    } catch (error) {
      this.logger.error(`Erro ao validar token do Google: ${error.message}`);
      throw new UnauthorizedException('Erro na autenticação.');
    }
  }

  /**
   * Gera um token JWT para o funcionário autenticado
   */
  private generateJwt(funcionario: Funcionario): string {
    const payload = { sub: funcionario.id_funcionario, email: funcionario.email };
    this.logger.log(`Gerando JWT para usuário: ${funcionario.email}`);

    return this.jwtService.sign(payload);
  }

  /**
   * Valida um token JWT
   */
  async validateJwt(payload: { sub: number; email: string }): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne({ where: { id_funcionario: payload.sub } });

    if (!funcionario) {
      this.logger.warn(`Usuário não encontrado com ID: ${payload.sub}`);
      throw new UnauthorizedException('Usuário não autorizado.');
    }

    return funcionario;
  }
}
