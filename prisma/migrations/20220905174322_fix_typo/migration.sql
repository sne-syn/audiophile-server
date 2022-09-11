/*
  Warnings:

  - You are about to drop the `Galery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Galery" DROP CONSTRAINT "Galery_productId_fkey";

-- DropTable
DROP TABLE "Galery";

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_productId_key" ON "Gallery"("productId");

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
