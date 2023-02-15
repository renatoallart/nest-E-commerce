import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    description,
    onSale,
    price,
    quantity,
    image,
    categoryId,
  }: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        name,
        description,
        onSale,
        price,
        quantity,
        image,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  // async findCategory(name: string) {
  //   const categoryName = name.toLocaleLowerCase();
  //   return this.prisma.category.findUnique({
  //     where: { name: categoryName },
  //     include: { products: true },
  //   });
  // }

  async getReviewByProduct(productId: string) {
    return this.prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        category: true,
        reviews: true,
      },
    });
  }
  async findProductsByCategory(id: string) {
    return this.prisma.product.findMany({
      take: 3,
      where: { categoryId: id },
      include: { category: true },
    });
  }

  updateName({ id, name }: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
