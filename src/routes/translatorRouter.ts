import { Router, Request, Response } from "express";
import { translate } from "../utils/translator";
import { validateReq } from "../utils/validateReq";

const translatorRouter = Router();

translatorRouter.post("/translator", async (req: Request, res: Response) => {
  const { text, targetLang } = req.body;
  await validateReq(text);
  const translatedText = await translate(text, targetLang);
  res.json({ translatedText });
});

export { translatorRouter };
