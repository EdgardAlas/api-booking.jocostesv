import { AuthRepository } from '@/auth/domain/auth.repository';
import { RegisterUserUseCase } from '@/auth/domain/use-cases/register-user.use-case';
import { JwtAdapter } from '@/config/jwt';
import { handleError } from '@/shared/errors/handle-error';
import { Request, Response } from 'express';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  login = (req: Request, res: Response) => {
    res.json({ message: 'User logged in' });
  };

  register = (req: Request, res: Response) => {
    new RegisterUserUseCase(this.authRepository, JwtAdapter.generateToken)
      .execute(req.body)
      .then((result) => res.json(result))
      .catch((error) => handleError(error, res));
  };
}
