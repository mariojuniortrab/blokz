import { ApiProperty } from '@nestjs/swagger';

export class RememberPasswordDto {
  @ApiProperty()
  email: string;
}