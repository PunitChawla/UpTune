/*
  Warnings:

  - Added the required column `addedbyid` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "addedbyid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_addedbyid_fkey" FOREIGN KEY ("addedbyid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
