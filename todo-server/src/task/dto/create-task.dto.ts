import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  completed: string;

  @IsUUID()
  fk_boardId: string;

  fk_userId: string;
}
