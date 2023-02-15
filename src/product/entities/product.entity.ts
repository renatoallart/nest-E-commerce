import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Review } from 'src/review/entities/review.entity';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: String;

  @Field()
  name: String;

  @Field()
  image: String;

  @Field()
  description: String;

  @Field()
  quantity: String;

  @Field()
  price: number;

  @Field()
  onSale: boolean;

  @Field((type) => String)
  categoryId: string;

  @Field((type) => Category)
  category: Category;

  @Field((type) => String)
  reviewId: string;

  @Field((type) => [Review])
  reviews: [Review];
}
