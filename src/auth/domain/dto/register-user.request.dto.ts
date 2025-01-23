import { mapZodErros } from '@/shared/errors/handle-error';
import z from 'zod';

export class RegisterUserRequestDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(
    body: Record<string, unknown>
  ): [Record<string, string>?, RegisterUserRequestDto?] {
    const { success, data, error } =
      RegisterUserRequestDtoSchema.safeParse(body);

    if (!success) {
      return [mapZodErros(error.errors)];
    }

    return [
      undefined,
      new RegisterUserRequestDto(data.name, data.email, data.password),
    ];
  }
}

export const RegisterUserRequestDtoSchema = z
  .object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
