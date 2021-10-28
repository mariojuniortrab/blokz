import { Module } from '@nestjs/common';
import { LomadeeService } from './lomadee.service';

@Module({
  providers: [LomadeeService]
})
export class LomadeeModule {}
