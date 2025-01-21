import { StatusCodes } from '@/config/status-codes';
import { CustomError } from '@/shared/errors/custom-error';
import { Request, Response } from 'express';

export class NotFoundController {
  static notFound(req: Request, res: Response) {
    return res.status(StatusCodes.NotFound).json({ message: 'Not found' });
  }
}
