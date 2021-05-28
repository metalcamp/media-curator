import Redis from "ioredis";
import redisConfig from "./config/RedisConfig";

const redis = new Redis({
    port: redisConfig.port,
    host: redisConfig.host,
    password: redisConfig.password,
});

export default redis;
