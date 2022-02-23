import * as bodyParser from "body-parser";
import errorhandler from "errorhandler";
import compression from "compression";
import * as express from "express";

import appConfig from "../config/appConfig";

export default class MAPPInit {

    static async initMicroService(app: express.Application) {
        MAPPInit.initializeExpressApp(app);
        return;
    }

    static initializeExpressApp(app: express.Application) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(compression() as any);
        app.use(bodyParser.json());
        appConfig.get("useErrorHandler") ? app.use(errorhandler({
            log: true
        }) as any) : null;
    }

    static errorHandler(app: express.Application) {
        app.use((err, req, res, next) => {
            res.send({ error: (err.message || err.toString()) });
            next();
        });
    }
}