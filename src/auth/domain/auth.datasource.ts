import { RegisterUserRequestDto } from '@/auth/domain/dto/register-user.request.dto';
import { UserEntity } from '@/auth/domain/user.entity';

export abstract class AuthDatasource {
  abstract login(): Promise<UserEntity>;
  abstract registerUser(user: RegisterUserRequestDto): Promise<UserEntity>;
}
