/*
  Warnings:

  - You are about to drop the column `galery` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Includes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Others` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IncludesToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OthersToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewImage` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_productId_fkey";

-- DropForeignKey
ALTER TABLE "_IncludesToProduct" DROP CONSTRAINT "_IncludesToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_IncludesToProduct" DROP CONSTRAINT "_IncludesToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "_OthersToProduct" DROP CONSTRAINT "_OthersToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_OthersToProduct" DROP CONSTRAINT "_OthersToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "galery",
ADD COLUMN     "previewImage" TEXT NOT NULL;

-- DropTable
DROP TABLE "Images";

-- DropTable
DROP TABLE "Includes";

-- DropTable
DROP TABLE "Others";

-- DropTable
DROP TABLE "_IncludesToProduct";

-- DropTable
DROP TABLE "_OthersToProduct";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    "otherId" TEXT,
    "productId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Include" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Include_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Other" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galery" (
    "id" TEXT NOT NULL,
    "galery" JSONB NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Galery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IncludeToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OtherToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_otherId_key" ON "Image"("otherId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_productId_key" ON "Image"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Galery_productId_key" ON "Galery"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "_IncludeToProduct_AB_unique" ON "_IncludeToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_IncludeToProduct_B_index" ON "_IncludeToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OtherToProduct_AB_unique" ON "_OtherToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OtherToProduct_B_index" ON "_OtherToProduct"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_otherId_fkey" FOREIGN KEY ("otherId") REFERENCES "Other"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Galery" ADD CONSTRAINT "Galery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludeToProduct" ADD CONSTRAINT "_IncludeToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Include"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncludeToProduct" ADD CONSTRAINT "_IncludeToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OtherToProduct" ADD CONSTRAINT "_OtherToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Other"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OtherToProduct" ADD CONSTRAINT "_OtherToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
