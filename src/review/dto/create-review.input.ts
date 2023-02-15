import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field()
  comment: string;

  @Field(() => ID)
  productId: string;
}
