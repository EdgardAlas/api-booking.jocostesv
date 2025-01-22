import { envs } from '@/config/envs';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';

function getPrismaClient() {
  return new PrismaClient().$extends(
    pagination({
      pages: {
        limit: 10,
        includePageCount: true,
      },
    })
  );
}

type PrismaClientWithPagination = ReturnType<typeof getPrismaClient>;

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientWithPagination;
}

class Database {
  private static instance: PrismaClientWithPagination;

  private constructor() {}

  public static getInstance(): PrismaClientWithPagination {
    if (!Database.instance) {
      if (envs.NODE_ENV === 'production') {
        Database.instance = getPrismaClient();
      } else {
        if (!global.prisma) {
          global.prisma = getPrismaClient();
        }
        Database.instance = global.prisma;
      }
    }
    return Database.instance;
  }
}

export const db = Database.getInstance();
