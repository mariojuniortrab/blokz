import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly how_to_use: string;
  
  @ApiProperty()
  readonly category: string;
  
  @ApiProperty()
  readonly datasheet: string;
}