/*
  Warnings:

  - You are about to drop the column `galery` on the `Galery` table. All the data in the column will be lost.
  - Added the required column `data` to the `Galery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Galery" DROP COLUMN "galery",
ADD COLUMN     "data" JSONB NOT NULL;
