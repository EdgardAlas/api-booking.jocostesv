import { envs } from '@/config/envs';
import { db } from '@/data/postgresql.connection';
import { AppRoutes } from '@/shared/routes';
import { Server } from '@/shared/server';

const main = async () => {
  try {
    const server = new Server({
      port: envs.PORT,
      routes: AppRoutes.routes,
    });

    server.start();
  } catch (_) {
    db.$disconnect();
  }
};

main();
