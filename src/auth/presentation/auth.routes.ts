import { AuthDatasourceImpl } from '@/auth/infraestructure/auth.datasource.impl';
import { AuthRepositoryImpl } from '@/auth/infraestructure/auth.repository.impl';
import { AuthController } from '@/auth/presentation/auth.controller';
import { Router } from 'express';

export class AuthRoutes {
  static get routes() {
    const router = Router();

    const authDatasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(authDatasource);

    const authController = new AuthController(authRepository);

    router.post('/login', authController.login);
    router.post('/register', authController.register);

    return router;
  }
}
