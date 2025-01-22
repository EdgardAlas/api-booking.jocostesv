import { envs } from '@/config/envs';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

class Database {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      if (envs.NODE_ENV === 'production') {
        Database.instance = new PrismaClient();
      } else {
        if (!global.prisma) {
          global.prisma = new PrismaClient();
        }
        Database.instance = global.prisma;
      }
    }
    return Database.instance;
  }
}

export const db = Database.getInstance();
