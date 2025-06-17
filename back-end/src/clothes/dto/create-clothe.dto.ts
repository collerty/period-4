import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateClotheDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  userId: string;
}
