import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Review } from 'src/review/entities/review.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product!]!, { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.productService.findOne(id);
  }

  @Query(() => Product)
  async getReviewByProduct(
    @Args('productId', { type: () => String }) productId: string,
  ) {
    return this.productService.getReviewByProduct(productId);
  }
  // @Query(() => Category, { name: 'gettttt' })
  // findCategory(@Args('id', { type: () => String }) name: string) {
  //   return this.productService.findCategory(name);
  // }

  @Query((returns) => [Product], { name: 'findProductsByCategory' })
  findProductsByCategory(@Args('id', { type: () => String }) id: string) {
    return this.productService.findProductsByCategory(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') ProductName: UpdateProductInput) {
    return this.productService.updateName(ProductName);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productService.remove(id);
  }
}
