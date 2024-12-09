import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from '../funcionario/entities/funcionario.entity';
import { FuncionarioModule } from "../funcionario/funcionario.module";
import * as fs from 'fs';

const privateKey = fs.readFileSync(process.env.JWT_PRIVATE_KEY_PATH, 'utf8');
const publicKey = fs.readFileSync(process.env.JWT_PUBLIC_KEY_PATH, 'utf8');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Configura JWT como estratégia padrão
    JwtModule.register({
      privateKey,
      publicKey,
      signOptions: { expiresIn: '3h', algorithm: 'RS256' },
    }),
    TypeOrmModule.forFeature([Funcionario]), // Registra a entidade Funcionario
    FuncionarioModule,
  ],
  providers: [AuthService, JwtStrategy], // Inclui JwtStrategy nos providers
  controllers: [AuthController],
  exports: [AuthService, JwtModule], // Exporta JwtModule para ser usado em outros módulos
})

export class AuthModule {}