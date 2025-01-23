import { AuthDatasource } from '@/auth/domain/auth.datasource';
import { AuthRepository } from '@/auth/domain/auth.repository';
import { RegisterUserRequestDto } from '@/auth/domain/dto/register-user.request.dto';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDatasource) {}

  login() {
    return this.datasource.login();
  }

  registerUser(user: RegisterUserRequestDto) {
    return this.datasource.registerUser(user);
  }
}
