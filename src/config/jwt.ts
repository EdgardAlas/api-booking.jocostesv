import jwt from 'jsonwebtoken';
import { envs } from './envs';

export class JwtAdapter {
  static async generateToken(
    payload: string | Record<string, unknown> | Buffer,
    duration: string = '2h'
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        envs.JWT_SECRET,
        { expiresIn: duration },
        (err, token) => {
          if (err || !token) {
            reject(null);
          }

          if (token) {
            resolve(token);
          }
        }
      );
    });
  }

  static async verifyToken<T = Record<string, unknown>>(
    token: string
  ): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, envs.JWT_SECRET, (err, decoded) => {
        if (err || !decoded) {
          resolve(null);
        }

        if (decoded) {
          resolve(decoded as T);
        }
      });
    });
  }
}
