import express = require("express");
import router from "./routes/router";
import {Express} from "express";
import {createConnection} from "typeorm";
import {errorHandler} from "./middlewares/ErrorHandler";
import "reflect-metadata";
import logger from "./logger";
import appConfig from "./config/AppConfig";

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}


export class App {
    public app: Express;
    private readonly port: number;
    private readonly env: string;

    constructor() {
        // @ts-ignore
        this.port = appConfig.port;
        this.env = appConfig.env;
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
