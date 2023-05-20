// import { PrismaClient } from '../../node_modules/@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma =
  global.prisma ||
  (() => {
    const client = new PrismaClient({
      log: ['query'],
    });

    // Automatically disconnect the Prisma client after each request
    client.$on('beforeExit', async () => {
      await client.$disconnect();
    });

    // Assign the Prisma client to the global object
    // to prevent duplicate client instances
    if (process.env.NODE_ENV !== 'production') global.prisma = client

    return client;
  })();

export default prisma
