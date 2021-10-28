import { Module } from '@nestjs/common';
import { ClosetsService } from './closets.service';
import { ClosetsController } from './closets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { Review } from 'src/reviews/entities/review.entity';
import { ReviewsService } from 'src/reviews/reviews.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Review]), ProductsService, ReviewsService],
  controllers: [ClosetsController],
  providers: [ClosetsService]
})
export class ClosetsModule {}
