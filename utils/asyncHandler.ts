import { Request, Response, NextFunction, RequestHandler } from "express";

// Wraps async route handlers and passes errors to Express error handler
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
