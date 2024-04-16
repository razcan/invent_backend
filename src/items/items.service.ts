import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) { }

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  async findAll(): Promise<any> {
    const result = await this.prisma.items.findMany()
    return result;
  }

  async findOne(id: number) {
    const result = await this.prisma.items.findFirst({
      where: {
        id: id
      }
    })
    return result;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
