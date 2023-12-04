import { Injectable, Res } from '@nestjs/common';
import { Translator, SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
import { Response } from 'express';
@Injectable()
export class TranslatorService {
  async translate(
    sourceLang: SourceLanguageCode,
    text: string,
    targetLang: TargetLanguageCode,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Res() res: Response,
  ): Promise<string> {
    const translator: Translator = new Translator(process.env.AUTH_KEY);
    return JSON.stringify(
      (await translator.translateText(text, sourceLang, targetLang)).text,
    );
  }
}
