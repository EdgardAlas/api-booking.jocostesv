import { documentation } from '@/config/documentation';
import { envs } from '@/config/envs';
import basicAuth from 'express-basic-auth';
import swaggerUI from 'swagger-ui-express';

export class DocumentationMiddleware {
  static middleware() {
    return [
      basicAuth({
        users: {
          admin: envs.API_DOC_PASSWORD,
        },
        challenge: true,
      }),
      swaggerUI.serve,
      swaggerUI.setup(documentation, {
        swaggerOptions: {
          tryItOutEnabled: false,
          supportedSubmitMethods: [],
        },
      }),
    ];
  }
}
