/*
  Warnings:

  - You are about to drop the column `addedbyid` on the `Stream` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stream" DROP CONSTRAINT "Stream_addedbyid_fkey";

-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "addedbyid";
