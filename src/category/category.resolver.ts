import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { GetAllProducts } from './dto/get-products.input';
import { Product } from 'src/product/entities/product.entity';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, {
    name: 'getProductByCategory',
    description: 'fetch 10 product by selected category',
  })
  findCategory(@Args('name', { type: () => String }) name: string) {
    return this.categoryService.findCategory(name);
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
