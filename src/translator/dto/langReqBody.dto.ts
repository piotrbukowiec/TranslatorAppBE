import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
export class LangReqBody {
  readonly sourceLang: SourceLanguageCode;
  readonly text: string;
  readonly targetLang: TargetLanguageCode;
}
