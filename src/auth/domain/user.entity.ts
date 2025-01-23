import { CustomError } from '@/shared/errors/custom-error';
import z from 'zod';

export const UserEntitySchema = z.object({
  id: z.string().nonempty('Id is required'),
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
});

export class UserEntity {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string
  ) {}

  static create(body: Record<string, unknown>): UserEntity {
    const { success, data, error } = UserEntitySchema.safeParse(body);

    if (!success) {
      throw CustomError.internal(error.message);
    }

    return new UserEntity(data.id, data.name, data.email);
  }
}
