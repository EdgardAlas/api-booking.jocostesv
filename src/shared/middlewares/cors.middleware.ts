import cors from 'cors';

export class CorsMiddleware {
  static get middleware() {
    return cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
    });
  }
}
