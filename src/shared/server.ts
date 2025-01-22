import { CorsMiddleware } from '@/shared/middlewares/cors.middleware';
import { DocumentationMiddleware } from '@/shared/middlewares/documentation.middleware';
import { LoggerMiddleware } from '@/shared/middlewares/logger.middleware';
import { Application, Router } from 'express';
import express from 'express';

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3000 } = options;

    this.port = port;
    this.routes = options.routes;
  }

  async start() {
    this.app.use(CorsMiddleware.middleware);
    this.app.use(LoggerMiddleware.middleware);
    this.app.use('/api-doc', ...DocumentationMiddleware.middleware());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
