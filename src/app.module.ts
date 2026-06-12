import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BusinessModule } from './business/business.module';
import { TransactionModule } from './transaction/transaction.module';
import { WalletModule } from './wallet/wallet.module';
import { FxRateModule } from './fx-rate/fx-rate.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [UserModule, PrismaModule, BusinessModule, TransactionModule, WalletModule, FxRateModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
