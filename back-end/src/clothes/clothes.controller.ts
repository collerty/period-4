import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createClotheDto: CreateClotheDto) {
    return this.clothesService.create(createClotheDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query('userId') userId: string) {
    return this.clothesService.findAll(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(
    @Param('id') id: string,
    @Query('userId') userId: string,
  ) {
    return this.clothesService.findOne(id, userId);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() updateClotheDto: UpdateClotheDto,
    @Query('userId') userId: string,
  ) {
    return this.clothesService.update(id, updateClotheDto, userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(
    @Param('id') id: string,
    @Query('userId') userId: string,
  ) {
    return this.clothesService.remove(id, userId);
  }
}
