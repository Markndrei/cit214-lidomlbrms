/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `edition` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publicationYear` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Book` table. All the data in the column will be lost.
  - Added the required column `bookAuthor` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookTitle` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrlM` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearOfPublication` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "author",
DROP COLUMN "edition",
DROP COLUMN "id",
DROP COLUMN "location",
DROP COLUMN "publicationYear",
DROP COLUMN "section",
DROP COLUMN "title",
ADD COLUMN     "bookAuthor" TEXT NOT NULL,
ADD COLUMN     "bookTitle" TEXT NOT NULL,
ADD COLUMN     "imageUrlL" TEXT,
ADD COLUMN     "imageUrlM" TEXT NOT NULL,
ADD COLUMN     "imageUrlS" TEXT,
ADD COLUMN     "yearOfPublication" INTEGER NOT NULL,
ALTER COLUMN "ISBN" SET DATA TYPE TEXT,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("ISBN");
