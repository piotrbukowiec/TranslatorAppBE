import { NextFunction, Response, Request } from 'express';

class ValidationError extends Error {}

const handleError = (
  err: Error | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  const isValidationErr: boolean = err instanceof ValidationError;
  res
    .status(isValidationErr ? 400 : 500)
    .json(isValidationErr ? err.message : 'Internal server error');
};
export { handleError, ValidationError };
