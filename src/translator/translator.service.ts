import { Injectable } from '@nestjs/common';
import { Translator, SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
import { AUTH_KEY as authKey } from '../constants';

@Injectable()
export class TranslatorService {
  async translate(
    sourceLang: SourceLanguageCode,
    text: string,
    targetLang: TargetLanguageCode,
  ): Promise<string> {
    const translator: Translator = new Translator(authKey);
    return (await translator.translateText(text, sourceLang, targetLang)).text;
  }
}

// (async () => {
//     const result = await translator.translateText('Hello, world!', null, 'fr');
//     console.log(result.text); // Bonjour, le monde !
// })();
//possible languages to traslate = 'bg' | 'cs' | 'da' | 'de' | 'el' | 'es' | 'et' | 'fi' | 'fr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'pl' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'tr' | 'uk' | 'zh' | 'en-GB' | 'en-US' | 'pt-BR' | 'pt-PT'

//source languages codes = 'bg' | 'cs' | 'da' | 'de' | 'el' | 'es' | 'et' | 'fi' | 'fr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'pl' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'tr' | 'uk' | 'zh' | 'en' | 'pt'
//TODO dokończyć
// "BG" - Bulgarian
// "CS" - Czech
// "DA" - Danish
// "DE" - German
// "EL" - Greek
// "EN-GB" - English (British)
// "EN-US" - English (American)
// "EN" - English (unspecified variant for backward compatibility; please select EN-GB or EN-US instead)
// "ES" - Spanish
// "ET" - Estonian
// "FI" - Finnish
// "FR" - French
// "HU" - Hungarian
// "IT" - Italian
// "JA" - Japanese
// "LT" - Lithuanian
// "LV" - Latvian
// "NL" - Dutch
// "PL" - Polish
// "PT-PT" - Portuguese (all Portuguese varieties excluding Brazilian Portuguese)
// "PT-BR" - Portuguese (Brazilian)
// "PT" - Portuguese (unspecified variant for backward compatibility; please select PT-PT or PT-BR instead)
// "RO" - Romanian
// "RU" - Russian
// "SK" - Slovak
// "SL" - Slovenian
// "SV" - Swedish
// "ZH" - Chinese
