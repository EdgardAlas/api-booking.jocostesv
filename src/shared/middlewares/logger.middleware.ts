import { envs } from '@/config/envs';
import morgan from 'morgan';

export class LoggerMiddleware {
  static get middleware() {
    return morgan(envs.NODE_ENV === 'development' ? 'dev' : 'combined');
  }
}
