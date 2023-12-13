import { Translator } from 'deepl-node';
const translator = new Translator(process.env.AUTH_KEY);
const translate = async (text, targetLang) => {
  const result = await translator.translateText(text, null, targetLang);
  console.log('RESULT: ', result);
};
export { translator, translate };
// (async () => await translate('Witaj świecie!', 'en-GB'))();
