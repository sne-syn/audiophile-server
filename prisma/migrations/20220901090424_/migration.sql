/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `CategoryImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CategoryImage_productId_key" ON "CategoryImage"("productId");
