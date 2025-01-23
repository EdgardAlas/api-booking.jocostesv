import { AuthDatasource } from '@/auth/domain/auth.datasource';
import { RegisterUserRequestDto } from '@/auth/domain/dto/register-user.request.dto';
import { UserEntity } from '@/auth/domain/user.entity';
import { db } from '@/data/postgresql.connection';
import { CustomError } from '@/shared/errors/custom-error';

export class AuthDatasourceImpl implements AuthDatasource {
  login(): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  async registerUser(user: RegisterUserRequestDto): Promise<UserEntity> {
    try {
      const userExists = await db.users.findFirst({
        where: {
          email: user.email,
        },
      });

      if (userExists) {
        throw CustomError.conflict('This email is already in use');
      }

      const registeredUser = await db.users.create({
        data: {
          email: user.email,
          name: user.name,
          password: user.password,
        },
      });

      return UserEntity.create(registeredUser);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internal("Couldn't register user");
    }
  }
}
