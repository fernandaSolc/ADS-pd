import { PartialType } from '@nestjs/mapped-types';
import { CreateMedalhaDto } from './create-medalha.dto';

export class UpdateMedalhaDto extends PartialType(CreateMedalhaDto) {}
