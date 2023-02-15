import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/product/prisma/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create({ name }: CreateCategoryInput) {
    const categoryName = name.toLocaleLowerCase();
    return this.prisma.category.create({
      data: { name: categoryName },
    });
  }

  async findCategory(name: string) {
    const categoryName = name.toLocaleLowerCase();
    return this.prisma.category.findUnique({
      where: { name: categoryName },
      include: { products: true },
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      include: {
        products: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
