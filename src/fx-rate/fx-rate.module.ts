import { Module } from '@nestjs/common';
import { FxRateService } from './fx-rate.service';

@Module({
  providers: [FxRateService]
})
export class FxRateModule {}
