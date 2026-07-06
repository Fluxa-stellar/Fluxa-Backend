import { Controller, Get } from '@nestjs/common';
import { InvoiceService } from './app.service';

@Controller()
export class InvoiceController {
    constructor(private readonly appService: InvoiceService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
