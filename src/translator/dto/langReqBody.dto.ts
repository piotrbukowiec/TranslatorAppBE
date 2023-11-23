import { IsString, Length } from 'class-validator';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
export class LangReqBody {
  @IsString() @Length(2, 4) readonly sourceLang: SourceLanguageCode;
  @IsString() @Length(1, 200) readonly text: string;
  @IsString() @Length(2, 4) readonly targetLang: TargetLanguageCode;
}
