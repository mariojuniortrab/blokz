import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClosetsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}


  findReviews(user_id: number): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: {
        user_id
      },
    });
  }

  findProducts(user_id: number): Promise<Product[]> {
    return this.productsRepository.find({
      where: {
        user_id
      },
    });
  }


}
