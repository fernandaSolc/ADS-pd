import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsNumber()
  id_remetente: number;

  @IsNotEmpty()
  @IsNumber()
  id_destinatario: number;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  conteudo: string;

  @IsNotEmpty()
  @IsNumber()
  moeda_enviada: number;
}
