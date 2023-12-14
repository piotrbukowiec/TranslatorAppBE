import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
class ValidationError extends Error {}
const handleError = (
  err: Error | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isValidationError: boolean = err instanceof ValidationError;
  const status = isValidationError ? 400 : 500;
  const message = isValidationError ? err.message : "Internal server error";
  res.status(status).json({ message });
};
export { ValidationError, handleError };
