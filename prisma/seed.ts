// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user_table.upsert({
    where: { mail: 'user.1@example.com' },
    update: {},
    create: {
      first_name: 'user',
      last_name: '1',
      mail: 'user.1@example.com',
      password: 'password1',
    },
  });

  const user2 = await prisma.user_table.upsert({
    where: { mail: 'user.2@example.com' },
    update: {},
    create: {
      first_name: 'user',
      last_name: '2',
      mail: 'user.2@example.com',
      password: 'password2',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
