import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user_table.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user_table.findMany({ where: { published: true } });
  }

  async findOne(id: number) {
    return await this.prisma.user_table.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user_table.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user_table.delete({
      where: { id },
    });
  }
}
