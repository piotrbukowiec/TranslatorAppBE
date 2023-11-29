import { Body, Controller, Inject, Post, forwardRef } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';

@Controller('translator')
export class TranslatorController {
  constructor(
    @Inject(forwardRef(() => TranslatorService))
    private readonly translatorService: TranslatorService,
  ) {}
  @Post('/')
  async translateLang(
    @Body('sourceLang') sourceLang: SourceLanguageCode,
    @Body('text') text: string,
    @Body('targetLang') targetLang: TargetLanguageCode,
  ): Promise<string> {
    return await this.translatorService.translate(sourceLang, text, targetLang);
  }
}
//Przemyśleć kwestię używania enum w tłumaczeniu, zasadzniczo komunikacja działa
