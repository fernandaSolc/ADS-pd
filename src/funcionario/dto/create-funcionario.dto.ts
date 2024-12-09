import { IsNotEmpty, IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateFuncionarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsOptional()
  @IsString()
  foto?: string;

  @IsOptional()
  @IsNumber()
  moedas?: number;

  @IsNotEmpty()
  @IsNumber()
  id_cargo: number; // Campo obrigatório para vincular um cargo
}
