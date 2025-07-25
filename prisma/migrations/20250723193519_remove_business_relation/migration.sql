/*
  Warnings:

  - You are about to drop the column `businessId` on the `produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `produto_businessId_fkey`;

-- DropIndex
DROP INDEX `produto_businessId_fkey` ON `produto`;

-- AlterTable
ALTER TABLE `produto` DROP COLUMN `businessId`;
