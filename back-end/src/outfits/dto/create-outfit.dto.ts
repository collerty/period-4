import { IsString, IsOptional, IsUrl, IsArray } from 'class-validator';

export class CreateOutfitDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  userId: string;

  @IsArray()
  @IsString({ each: true })
  clothIds: string[];
} 