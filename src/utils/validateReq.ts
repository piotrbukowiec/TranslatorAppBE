import { Request, Response } from 'express';
import { ValidationError } from './error';
export const validateReq = async (
  req: Request,
  //   res: Response,
): Promise<void> => {
  let errMsg: null | string = null;
  const { text } = req.body;
  if (!(text.length > 1) || !(text.length < 200))
    errMsg = 'Length of text must be between 1 and 200 characters!';
  if (errMsg) throw new ValidationError(errMsg);
};
