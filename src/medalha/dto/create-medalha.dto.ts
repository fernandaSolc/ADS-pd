import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedalhaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  icone?: string;
}
