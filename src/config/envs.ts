import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  /* DATABASE_URL: get('DATABASE_URL').required().asString(), */
  JWT_SECRET: get('JWT_SECRET').required().asString(),
  CLIENT_URL: get('CLIENT_URL').required().asString(),
  NODE_ENV: get('NODE_ENV')
    .required()
    .asEnum(['development', 'production', 'test']),
};
