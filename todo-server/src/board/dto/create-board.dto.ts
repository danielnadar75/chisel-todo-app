import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  fk_userId: string;
}
