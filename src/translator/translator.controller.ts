import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';

@Controller('translator')
export class TranslatorController {
  constructor(
    @Inject(TranslatorService)
    private readonly translatorService: TranslatorService,
  ) {}
  @Get('/')
  index(): string {
    return 'Success!';
  }
  @Post('/')
  async translateLang(
    @Body('sourceLang') sourceLang: SourceLanguageCode,
    @Body('text') text: string,
    @Body('targetLang') targetLang: TargetLanguageCode,
  ): Promise<string> {
    text = text.trim();
    if (text.length > 1000) throw new Error('Too long text!');
    return await this.translatorService.translate(sourceLang, text, targetLang);
  }
}
