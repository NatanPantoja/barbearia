/*
  Warnings:

  - You are about to drop the column `serviceId` on the `agendar` table. All the data in the column will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `produtoId` to the `agendar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `agendar` DROP FOREIGN KEY `agendar_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `services` DROP FOREIGN KEY `services_businessId_fkey`;

-- DropIndex
DROP INDEX `agendar_serviceId_fkey` ON `agendar`;

-- AlterTable
ALTER TABLE `agendar` DROP COLUMN `serviceId`,
    ADD COLUMN `produtoId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `services`;

-- CreateTable
CREATE TABLE `produto` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `duration` INTEGER NOT NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `businessId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `businesses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendar` ADD CONSTRAINT `agendar_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
