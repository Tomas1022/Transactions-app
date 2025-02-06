import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

async function initializeDB() {
    try {
        await db.$connect();
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw new Error("Database initialization error.");
    }
}

initializeDB();

export default db;