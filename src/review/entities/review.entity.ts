import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class Review {
  @Field()
  id: string;

  @Field()
  comment: string;

  @Field()
  productId: string;

  @Field(() => Product)
  product: Product;
}
