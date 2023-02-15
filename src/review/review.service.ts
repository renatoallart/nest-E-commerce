import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/product/prisma/prisma.service';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create({ comment, productId }: CreateReviewInput) {
    return this.prisma.review.create({
      data: {
        comment,
        product: {
          connect: {
            id: productId,
          },
        },
      },
      include: {
        product: true,
      },
    });
  }

  async findAllReviews() {
    return this.prisma.review.findMany({
      include: {
        product: true,
      },
    });
  }

  async reviews(id: string) {
    return this.prisma.review.findUnique({
      where: { id: id },
      include: { product: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.review.findUnique({
      where: { id },
      include: { product: true },
    });
  }

  update(id: string, { comment }: UpdateReviewInput) {
    return this.prisma.review.update({
      where: { id },
      data: { comment },
    });
  }

  remove(id: string) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
