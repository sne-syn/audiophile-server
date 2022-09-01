/*
  Warnings:

  - You are about to drop the column `productId` on the `Others` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Others" DROP CONSTRAINT "Others_productId_fkey";

-- AlterTable
ALTER TABLE "Others" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_OthersToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OthersToProduct_AB_unique" ON "_OthersToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OthersToProduct_B_index" ON "_OthersToProduct"("B");

-- AddForeignKey
ALTER TABLE "_OthersToProduct" ADD CONSTRAINT "_OthersToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Others"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OthersToProduct" ADD CONSTRAINT "_OthersToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
