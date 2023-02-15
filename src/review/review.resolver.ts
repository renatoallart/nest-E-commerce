import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => Review, { name: 'getOneRev' })
  async findOne(@Args('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Query(() => [Review], { name: 'allReviews' })
  async findAllReviews() {
    return this.reviewService.findAllReviews();
  }

  @Query(() => Review, {
    name: 'reviews',
  })
  findCategory(@Args('name', { type: () => String }) id: string) {
    return this.reviewService.reviews(id);
  }

  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return this.reviewService.create(createReviewInput);
  }

  @Mutation(() => Review)
  updateReview(
    @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
  ) {
    return this.reviewService.update(updateReviewInput.id, updateReviewInput);
  }

  @Mutation(() => Review)
  removeReview(@Args('id', { type: () => Int }) id: string) {
    return this.reviewService.remove(id);
  }
}
