import express = require("express");
import router from "./routes/router";
import {Express} from "express";
import {createConnection} from "typeorm";
import * as dotenv from "dotenv";
import {errorHandler} from "./middlewares/ErrorHandler";
import "reflect-metadata";
import logger from "./logger";

dotenv.config();

export class App {
    public app: Express;
    private readonly port: number;
    private readonly env: string;

    constructor() {
        // @ts-ignore
        this.port = parseInt(process.env.PORT, 10) || 3000;
        this.env = process.env.APP_ENV ?? 'prod';
        this.app = express();
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.log("info", `app listening on the port ${this.port} in ${this.env} mode`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeRoutes() {
        this.app.use("/api/v1", router);
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeErrorHandling() {
        this.app.use(errorHandler());
    }

    private connectToDatabase() {
        createConnection();
    }
}
