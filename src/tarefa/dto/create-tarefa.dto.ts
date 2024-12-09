import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTarefaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsOptional()
  @IsDateString()
  data_limite?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  funcionariosIds?: number[]; // IDs dos funcionários atribuídos à tarefa
}
