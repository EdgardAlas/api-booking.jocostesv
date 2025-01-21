import { envs } from '@/config/envs';
import { AppRoutes } from '@/shared/routes';
import { Server } from '@/shared/server';

const main = () => {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
};

main();
