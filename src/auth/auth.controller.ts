import { Controller, Post, Get, Body, UseGuards, Request, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  /**
   * Autenticação via Google OAuth 2.0.
   * Recebe o `idToken` do cliente e retorna um JWT e informações do usuário.
   */
  @Post('login')
  async googleLogin(@Body('idToken') idToken: string) {
    try {
      if (!idToken) {
        this.logger.warn('Tentativa de login sem idToken fornecido');
        throw new HttpException('idToken é obrigatório.', HttpStatus.BAD_REQUEST);
      }

      const { token, user } = await this.authService.googleLogin(idToken);
      this.logger.log(`Usuário logado com sucesso: ${user.email}`);

      return {
        message: 'Login bem-sucedido',
        token,
        user,
      };
    } catch (error) {
      this.logger.error(`Erro ao processar login: ${error.message}`);
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  /**
   * Obtém informações do usuário autenticado.
   * Acesso protegido com autenticação JWT.
   */
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@Request() req) {
    try {
      const user = req.user;

      if (!user) {
        this.logger.warn('Tentativa de acessar /me sem um usuário autenticado.');
        throw new HttpException('Usuário não autenticado.', HttpStatus.UNAUTHORIZED);
      }

      this.logger.log(`Informações solicitadas pelo usuário autenticado: ${user.email}`);
      return user;
    } catch (error) {
      this.logger.error(`Erro ao obter informações do usuário: ${error.message}`);
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}

  /*
   * Rota protegida para retornar informações do calendário do usuário.
   * Requer autenticação JWT.
   */
/*
  @Get('calendar')
  @UseGuards(JwtAuthGuard)
  async getCalendarInfo(@Request() req) {
    try {
      const user = req.user;

      if (!user) {
        this.logger.warn('Tentativa de acessar /calendar sem um usuário autenticado.');
        throw new HttpException('Usuário não autenticado.', HttpStatus.UNAUTHORIZED);
      }

      this.logger.log(`Obtendo informações de calendário para o usuário: ${user.email}`);
      return await this.authService.getCalendarInfo(user);
    } catch (error) {
      this.logger.error(`Erro ao obter informações do calendário: ${error.message}`);
      throw new HttpException('Erro ao obter informações do calendário.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
*/