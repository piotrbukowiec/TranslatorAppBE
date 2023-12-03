import { IsEnum, IsString, Length } from 'class-validator';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
import { SourceLangCode } from '../enum/sourceLangCode.enum';
import { TargetLangCode } from '../enum/targetLangCode.enum';
export class LangReqBody {
  @IsEnum(SourceLangCode)
  @Length(2, 4)
  readonly sourceLang: SourceLanguageCode;
  @IsString() @Length(1, 200) text: string;
  @IsEnum(TargetLangCode)
  @Length(2, 4)
  readonly targetLang: TargetLanguageCode;
}
