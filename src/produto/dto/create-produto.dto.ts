import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  preco: number;
}
