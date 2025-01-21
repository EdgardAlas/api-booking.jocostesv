import { NotFoundRoutes } from '@/not-found/presentation/not-found.routes';
import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use(NotFoundRoutes.routes);

    return router;
  }
}
