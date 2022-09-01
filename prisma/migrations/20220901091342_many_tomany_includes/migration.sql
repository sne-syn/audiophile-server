/*
  Warnings:

  - You are about to drop the column `productId` on the `Includes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Includes" DROP CONSTRAINT "Includes_productId_fkey";

-- AlterTable
ALTER TABLE "Includes" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_IncludesToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IncludesToProduct_AB_unique" ON "_IncludesToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_IncludesToProduct_B_index" ON "_IncludesToProduct"("B");

-- AddForeignKey
ALTER TABLE "_IncludesToProduct" ADD CONSTRAINT "_IncludesToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Includes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludesToProduct" ADD CONSTRAINT "_IncludesToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
