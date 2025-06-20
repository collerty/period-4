import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClothesService {
  constructor(private prisma: PrismaService) {}

  async create(createClotheDto: CreateClotheDto) {
    // Verify user exists
    const user = await this.prisma.user.findUnique({
      where: { id: createClotheDto.userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.cloth.create({
      data: createClotheDto,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.cloth.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    const cloth = await this.prisma.cloth.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    if (!cloth) {
      throw new NotFoundException(`Cloth with ID ${id} not found`);
    }

    if (cloth.userId !== userId) {
      throw new ForbiddenException('You do not have access to this cloth');
    }

    return cloth;
  }

  async update(id: string, updateClotheDto: UpdateClotheDto, userId: string) {
    // Check if cloth exists and belongs to user
    await this.findOne(id, userId);

    return this.prisma.cloth.update({
      where: { id },
      data: updateClotheDto,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  async remove(id: string, userId: string) {
    // Check if cloth exists and belongs to user
    await this.findOne(id, userId);

    await this.prisma.cloth.delete({
      where: { id },
    });

    return { message: 'Cloth deleted successfully' };
  }
}