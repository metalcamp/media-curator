import Redis from "ioredis";
import * as dotenv from "dotenv"

dotenv.config();

const redis = new Redis({
    // @ts-ignore
    port: parseInt(process.env.REDIS_PORT,10) || 6379,
    host: process.env.REDIS_HOST || "localhost",
    password: process.env.REDIS_PASSWORD || "",
});

export default redis;
