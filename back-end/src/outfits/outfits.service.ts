import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { UpdateOutfitDto } from './dto/update-outfit.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OutfitsService {
  constructor(private prisma: PrismaService) {}

  async create(createOutfitDto: CreateOutfitDto) {
    // Verify user exists
    const user = await this.prisma.user.findUnique({
      where: { id: createOutfitDto.userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify all clothes exist and belong to the user
    for (const clothId of createOutfitDto.clothIds) {
      const cloth = await this.prisma.cloth.findUnique({
        where: { id: clothId },
      });

      if (!cloth) {
        throw new NotFoundException(`Cloth with ID ${clothId} not found`);
      }

      if (cloth.userId !== createOutfitDto.userId) {
        throw new ForbiddenException(`Cloth with ID ${clothId} does not belong to you`);
      }
    }

    // Create outfit with clothes
    return this.prisma.outfit.create({
      data: {
        name: createOutfitDto.name,
        description: createOutfitDto.description,
        imageUrl: createOutfitDto.imageUrl,
        userId: createOutfitDto.userId,
        clothes: {
          create: createOutfitDto.clothIds.map(clothId => ({
            cloth: { connect: { id: clothId } }
          }))
        }
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        clothes: {
          include: {
            cloth: true,
          },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.outfit.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        clothes: {
          include: {
            cloth: true,
          },
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    const outfit = await this.prisma.outfit.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        clothes: {
          include: {
            cloth: true,
          },
        },
      },
    });

    if (!outfit) {
      throw new NotFoundException(`Outfit with ID ${id} not found`);
    }

    if (outfit.userId !== userId) {
      throw new ForbiddenException('You do not have access to this outfit');
    }

    return outfit;
  }

  async update(id: string, updateOutfitDto: UpdateOutfitDto, userId: string) {
    // Check if outfit exists and belongs to user
    await this.findOne(id, userId);

    // If clothIds are provided, verify they exist and belong to user
    if (updateOutfitDto.clothIds) {
      for (const clothId of updateOutfitDto.clothIds) {
        const cloth = await this.prisma.cloth.findUnique({
          where: { id: clothId },
        });

        if (!cloth) {
          throw new NotFoundException(`Cloth with ID ${clothId} not found`);
        }

        if (cloth.userId !== userId) {
          throw new ForbiddenException(`Cloth with ID ${clothId} does not belong to you`);
        }
      }
    }

    // Update outfit
    const updatedOutfit = await this.prisma.outfit.update({
      where: { id },
      data: {
        name: updateOutfitDto.name,
        description: updateOutfitDto.description,
        imageUrl: updateOutfitDto.imageUrl,
        // If clothIds are provided, update the clothes
        ...(updateOutfitDto.clothIds && {
          clothes: {
            deleteMany: {},
            create: updateOutfitDto.clothIds.map(clothId => ({
              cloth: { connect: { id: clothId } }
            }))
          }
        })
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        clothes: {
          include: {
            cloth: true,
          },
        },
      },
    });

    return updatedOutfit;
  }

  async remove(id: string, userId: string) {
    // Check if outfit exists and belongs to user
    await this.findOne(id, userId);

    // Delete the outfit (cascade will handle OutfitCloth relations)
    await this.prisma.outfit.delete({
      where: { id },
    });

    return { message: 'Outfit deleted successfully' };
  }
} 