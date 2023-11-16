import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
export class LangReqBody {
  sourceLang: SourceLanguageCode;
  text: string;
  targetLang: TargetLanguageCode;
}
