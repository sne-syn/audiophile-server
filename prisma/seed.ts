import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { data } from "./seeding-data";

async function main() {
  await prisma.category.deleteMany();
  await prisma.images.deleteMany();
  await prisma.includes.deleteMany();
  await prisma.others.deleteMany();
  await prisma.product.deleteMany();
  console.log("Deleted records in table");

  for (let category of data) {
    await prisma.category.create({
      data: category,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
