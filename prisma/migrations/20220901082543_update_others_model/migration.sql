/*
  Warnings:

  - Added the required column `images` to the `Others` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_othersId_fkey";

-- AlterTable
ALTER TABLE "Others" ADD COLUMN     "images" JSONB NOT NULL;
