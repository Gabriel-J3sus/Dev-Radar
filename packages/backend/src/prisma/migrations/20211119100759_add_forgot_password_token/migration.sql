/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `forgot_password_token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `forgot_password_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "forgot_password_token" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "forgot_password_token_token_key" ON "forgot_password_token"("token");
