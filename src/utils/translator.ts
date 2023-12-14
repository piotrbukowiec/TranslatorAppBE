import { TargetLanguageCode, Translator } from "deepl-node";
const translator = new Translator(String(process.env.DEEPL_API_KEY));
const translate = async (text: string, targetLang: TargetLanguageCode) =>
  (await translator.translateText(text, null, targetLang)).text;
export { translate };
