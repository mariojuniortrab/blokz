import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly bank: string;
  
  @ApiProperty()
  readonly agency: string;
  
  @ApiProperty()
  readonly account: string;
  
  @ApiProperty()
  readonly cpf_cnpj: string;
  
  @ApiProperty()
  readonly user_id: number;
}