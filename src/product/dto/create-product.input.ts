import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String!)
  name: string;

  @Field(() => String!)
  description: string;

  @Field(() => String!)
  image: string;

  @Field(() => Number!)
  quantity: number;

  @Field(() => Number!)
  price: number;

  @Field(() => Boolean!)
  onSale: boolean;

  @Field(() => ID)
  categoryId: string;
}
