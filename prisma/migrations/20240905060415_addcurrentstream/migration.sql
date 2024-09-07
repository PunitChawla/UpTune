-- CreateTable
CREATE TABLE "currentStream" (
    "userId" TEXT NOT NULL,
    "streamId" TEXT NOT NULL,

    CONSTRAINT "currentStream_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "currentStream_streamId_key" ON "currentStream"("streamId");

-- AddForeignKey
ALTER TABLE "currentStream" ADD CONSTRAINT "currentStream_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
