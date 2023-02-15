import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaModule } from './product/prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProductModule,
    PrismaModule,
    CategoryModule,
    ReviewModule,
  ],
})
export class AppModule {}
