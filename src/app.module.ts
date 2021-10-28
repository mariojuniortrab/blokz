import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsModule } from './products/products.module';
import { WalletsModule } from './wallets/wallets.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LomadeeModule } from './lomadee/lomadee.module';
import { ClosetsModule } from './closets/closets.module';

@Module({
  imports: [AuthModule, UsersModule, 
    ReviewsModule, ProductsModule, WalletsModule,
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      url: '', 
      logging: true,
      entities: [join(__dirname, '**', `*.entity.{ts,js}`)],
      synchronize: true,
    }),
    LomadeeModule,
    ClosetsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
