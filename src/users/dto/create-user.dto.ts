import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly phone: string;
  
  @ApiProperty()
  readonly password: string;
  
  @ApiProperty()
  readonly passwordConfirmation: string;
  
  @ApiProperty()
  readonly socialId: string;
}
