import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCargoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
