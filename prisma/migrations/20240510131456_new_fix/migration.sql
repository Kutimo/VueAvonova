/*
  Warnings:

  - The primary key for the `identities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `provider_id` to the `identities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "auth"."identities" DROP CONSTRAINT "identities_pkey",
ADD COLUMN     "provider_id" TEXT NOT NULL,
ADD CONSTRAINT "identities_pkey" PRIMARY KEY ("provider_id");
