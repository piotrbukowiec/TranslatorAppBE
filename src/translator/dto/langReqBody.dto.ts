import {
  IsEnum,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SourceLanguageCode, TargetLanguageCode } from 'deepl-node';
import { SourceLangCode } from '../enum/sourceLangCode.enum';
import { TargetLangCode } from '../enum/targetLangCode.enum';
import { IsDifferent } from 'src/utils/IsDifferent.decorator';
export class LangReqBody {
  @IsEnum(SourceLangCode)
  @Length(2, 4)
  readonly sourceLang: SourceLanguageCode;
  @IsString() @MinLength(1) @MaxLength(200) readonly text: string;
  @IsEnum(TargetLangCode)
  @Length(2, 4)
  @IsDifferent('sourceLang')
  readonly targetLang: TargetLanguageCode;
}
