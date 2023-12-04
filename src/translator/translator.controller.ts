import {
  Body,
  Controller,
  Inject,
  Post,
  Res,
  forwardRef,
} from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
import { Response } from 'express';

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
    @Res() res: Response,
  ): Promise<string> {
    return await this.translatorService.translate(
      sourceLang,
      text,
      targetLang,
      res,
    );
  }
}
