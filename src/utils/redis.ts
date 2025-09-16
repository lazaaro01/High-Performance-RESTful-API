import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

redis.on("Conectado", () => {
    console.log("Conectado ao Redis");
});

redis.on ("error", (err) => {
    console.error("Erro no Redis", err);
});

export default redis;