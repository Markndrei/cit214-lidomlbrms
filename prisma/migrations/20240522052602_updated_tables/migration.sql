/*
  Warnings:

  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `colorScheme` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "colorScheme" SET NOT NULL;

-- DropTable
DROP TABLE "Books";

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(225) NOT NULL,
    "author" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ISBN" INTEGER NOT NULL,
    "publicationYear" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
