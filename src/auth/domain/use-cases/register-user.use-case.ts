import { AuthRepository } from '@/auth/domain/auth.repository';
import { RegisterUserRequestDto } from '@/auth/domain/dto/register-user.request.dto';
import { SignToken } from '@/shared/types/jwt';

export class RegisterUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken
  ) {}

  execute = async (
    user: RegisterUserRequestDto
  ): Promise<{
    token: string;
  }> => {
    const userEntity = await this.authRepository.registerUser(user);

    const token = await this.signToken({
      id: userEntity.id,
    });

    return {
      token,
    };
  };
}
