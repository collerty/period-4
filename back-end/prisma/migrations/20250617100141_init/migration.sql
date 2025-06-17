-- CreateTable
CREATE TABLE "Outfit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Outfit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutfitCloth" (
    "id" TEXT NOT NULL,
    "outfitId" TEXT NOT NULL,
    "clothId" TEXT NOT NULL,

    CONSTRAINT "OutfitCloth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutfitCloth" ADD CONSTRAINT "OutfitCloth_outfitId_fkey" FOREIGN KEY ("outfitId") REFERENCES "Outfit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutfitCloth" ADD CONSTRAINT "OutfitCloth_clothId_fkey" FOREIGN KEY ("clothId") REFERENCES "Cloth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
