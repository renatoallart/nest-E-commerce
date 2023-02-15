import { Field, ID, InputType } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';

@InputType()
export class GetAllProducts {
  @Field((type) => ID)
  id: string;
}
