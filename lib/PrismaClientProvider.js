import { PrismaClient } from "@prisma/client"

let db;

if (process.env.NODE_ENV === "PRODUCTION") {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.db = new PrismaClient();
  }
  db = global.db;
}

export default db;

// const db = new PrismaClient()

// export default  db
 