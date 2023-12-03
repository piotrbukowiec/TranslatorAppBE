import { Module } from '@nestjs/common';
import { TranslatorController } from './translator.controller';
import { TranslatorService } from './translator.service';

@Module({
  controllers: [TranslatorController],
  providers: [
    TranslatorService,
    // {
    //   provide: APP_FILTER,
    //   useClass: ValidationErrorFilter,
    // },
  ],
})
export class TranslatorModule {}
