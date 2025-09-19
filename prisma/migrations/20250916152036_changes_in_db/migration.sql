/*
  Warnings:

  - You are about to drop the column `image` on the `Car` table. All the data in the column will be lost.
  - Added the required column `address` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peopleCount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Booking" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "peopleCount" INTEGER NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "properties" TEXT[];
