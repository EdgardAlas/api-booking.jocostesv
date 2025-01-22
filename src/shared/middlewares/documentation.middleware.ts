import { documentation } from '@/config/documentation';
import { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import { envs } from '@/config/envs';

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
