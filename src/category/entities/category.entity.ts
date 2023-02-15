import { ObjectType, Field } from '@nestjs/graphql';

import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class Category {
  @Field()
  id: String;

  @Field()
  name: String;

  @Field(() => [Product])
  products: [Product];
}
