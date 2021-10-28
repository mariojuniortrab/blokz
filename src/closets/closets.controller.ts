import { Controller, Get, Param} from '@nestjs/common';
import { ClosetsService } from './closets.service';

@Controller('closets')
export class ClosetsController {
  constructor(private readonly closetsService: ClosetsService) {}

  @Get('products/:id')
  findProducts(@Param('user_id') user_id: string) {
    return this.closetsService.findProducts(+user_id);
  }

  @Get('reviews/:id')
  findReviews(@Param('user_id') user_id: string) {
    return this.closetsService.findReviews(+user_id);
  }
}
