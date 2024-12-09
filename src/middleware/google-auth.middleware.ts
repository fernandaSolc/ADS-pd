import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleAuthMiddleware implements NestMiddleware {
  private client: OAuth2Client;

  constructor() {
    // Inicialize o cliente OAuth2 com a biblioteca oficial do Google
    this.client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Substitua pelo seu Client ID do Google
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não fornecido.');
    }

    const token = authHeader.split(' ')[1]; // Extrai o token do header no formato "Bearer <token>"

    if (!token) {
      throw new UnauthorizedException('Token inválido ou ausente.');
    }

    try {
      // Valida o token com a biblioteca oficial do Google
      const ticket = await this.client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID, // Substitua pelo seu Client ID do Google
      });

      const payload = ticket.getPayload();

      if (!payload) {
        throw new UnauthorizedException('Token inválido.');
      }

      // Extraia as informações relevantes do payload
      const { email, name, picture } = payload;

      // Anexe os dados do usuário à requisição
      req['user'] = {
        email,
        name,
        picture,
      };

      next(); // Continue para o próximo middleware/controller
    } catch (error) {
      console.error('Erro ao validar o token:', error.message || error);
      throw new UnauthorizedException('Token inválido ou expirado.');
    }
  }
}
