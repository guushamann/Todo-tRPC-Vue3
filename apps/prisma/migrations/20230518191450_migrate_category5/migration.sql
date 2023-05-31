-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "note" TEXT,
    "completed" BOOLEAN DEFAULT false,
    "archived" BOOLEAN DEFAULT false,
    "pinned" BOOLEAN DEFAULT false
);
INSERT INTO "new_Todo" ("archived", "completed", "id", "note", "pinned", "title") SELECT "archived", "completed", "id", "note", "pinned", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
