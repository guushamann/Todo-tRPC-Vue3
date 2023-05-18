-- CreateTable
CREATE TABLE "TodoCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "todoId" INTEGER,
    CONSTRAINT "TodoCategories_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
