import { NotFoundController } from '@/not-found/presentation/not-found.controller';
import { Router } from 'express';

export class NotFoundRoutes {
  static get routes() {
    const router = Router();

    router.use(NotFoundController.notFound);

    return router;
  }
}
