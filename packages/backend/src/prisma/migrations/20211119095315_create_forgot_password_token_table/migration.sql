-- CreateTable
CREATE TABLE "forgot_password_token" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "forgot_password_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "forgot_password_token_userId_unique" ON "forgot_password_token"("userId");

-- AddForeignKey
ALTER TABLE "forgot_password_token" ADD CONSTRAINT "forgot_password_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
