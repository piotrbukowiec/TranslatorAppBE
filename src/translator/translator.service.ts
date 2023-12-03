import { Injectable } from '@nestjs/common';
// import { ValidationError } from 'class-validator/types/validation/ValidationError';
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
/*Currently class-valdator does not work properly ()
- @IsString() @Length(1, 200) text: string; does not work (if the value is greater than 200, class-validator doesn't throw an error)
*/
