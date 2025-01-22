import helmet from 'helmet';

export class HelmetMiddleware {
  static get middleware() {
    return helmet();
  }
}
