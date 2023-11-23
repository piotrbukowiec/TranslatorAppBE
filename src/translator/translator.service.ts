import { Injectable } from '@nestjs/common';
import { Translator, SourceLanguageCode, TargetLanguageCode } from 'deepl-node';

@Injectable()
export class TranslatorService {
  async translate(
    sourceLang: SourceLanguageCode,
    text: string,
    targetLang: TargetLanguageCode,
  ): Promise<string> {
    const translator: Translator = new Translator(process.env.AUTH_KEY);
    return JSON.stringify(
      (await translator.translateText(text, sourceLang, targetLang)).text,
    );
  }
}
