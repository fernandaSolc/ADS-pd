import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'), // Use a chave pública
      algorithms: ['RS256'],
    });
  }

  async validate(payload: { sub: number; email: string }): Promise<Funcionario> {
    return this.authService.validateJwt(payload);
  }
}
