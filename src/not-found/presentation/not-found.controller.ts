import { StatusCodes } from '@/config/status-codes';
import { Request, Response } from 'express';

export class NotFoundController {
  static notFound(req: Request, res: Response) {
    return res.status(StatusCodes.NotFound).json({ message: 'Not found' });
  }
}
