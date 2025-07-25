/*
  Warnings:

  - You are about to drop the column `image` on the `produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `produto` DROP COLUMN `image`,
    ADD COLUMN `banner` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL;
