import app from "./app";
import dotenv from "dotenv";
import cluster from "cluster";
import os from "os";
import logger from "./utils/logger";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  logger.info(`⚡ Master process running. Spawning ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    logger.warn(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    logger.info(`🚀 Worker ${process.pid} running on port ${PORT}`);
  });
}
