import { StatusCodes } from '@/config/status-codes';
import { CustomError } from '@/shared/errors/custom-error';
import { Response } from 'express';
import { ZodIssue } from 'zod';

export const handleError = (error: unknown, res: Response) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res
    .status(StatusCodes.InternalServerError)
    .json({ message: 'Internal server error' });
};

export const mapZodErros = (errors: ZodIssue[]) => {
  return errors.reduce(
    (acc, error) => ({
      ...acc,
      [error.path.join('.')]: error.message,
    }),
    {}
  );
};
