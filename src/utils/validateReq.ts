import { ValidationError } from "./error";

const validateReq = async (text: string) => {
  let err: string | null = null;
  if (!text) err = "Invalid request body!";
  else if (text.length < 1) err = "Text is too short!";
  else if (text.length > 150) err = "Text is too long!";
  if (err) throw new ValidationError(err);
  else return;
};
export { validateReq };
