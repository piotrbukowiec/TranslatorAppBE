import { TargetLanguageCode, Translator } from "deepl-node";
import { DEEPL_AUTH_KEY as authKey } from "../constants";
const translator = new Translator(String(authKey));
const translate = async (text: string, targetLang: TargetLanguageCode) =>
  (await translator.translateText(text, null, targetLang)).text;
export { translate };
