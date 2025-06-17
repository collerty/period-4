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
import { OutfitsService } from './outfits.service';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { UpdateOutfitDto } from './dto/update-outfit.dto';

@Controller('outfits')
export class OutfitsController {
  constructor(private readonly outfitsService: OutfitsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOutfitDto: CreateOutfitDto) {
    return this.outfitsService.create(createOutfitDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query('userId') userId: string) {
    return this.outfitsService.findAll(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(
    @Param('id') id: string,
    @Query('userId') userId: string,
  ) {
    return this.outfitsService.findOne(id, userId);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() updateOutfitDto: UpdateOutfitDto,
    @Query('userId') userId: string,
  ) {
    return this.outfitsService.update(id, updateOutfitDto, userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(
    @Param('id') id: string,
    @Query('userId') userId: string,
  ) {
    return this.outfitsService.remove(id, userId);
  }
} 