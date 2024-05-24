-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "library" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "bookRating" INTEGER NOT NULL DEFAULT 0,
    "email" TEXT NOT NULL DEFAULT 'anonymous',
    "ISBN" TEXT NOT NULL,
    "reviewText" TEXT,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES "Book"("ISBN") ON DELETE CASCADE ON UPDATE CASCADE;
