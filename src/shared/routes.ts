import { AuthRoutes } from '@/auth/presentation/auth.routes';
import { NotFoundRoutes } from '@/not-found/presentation/not-found.routes';
import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/auth', AuthRoutes.routes);

    router.use(NotFoundRoutes.routes);

    return router;
  }
}
