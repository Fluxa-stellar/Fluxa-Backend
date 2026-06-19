import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

@Module({
  providers: [BusinessService],
  controllers: [BusinessController]
})
export class BusinessModule {}
