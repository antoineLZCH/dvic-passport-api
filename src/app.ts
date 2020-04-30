import * as express from 'express';
import { Application, Router, Request, Response } from 'express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import bodyParser = require('body-parser');

import AppRouter from './api';

export default class App {
    public app: Application = express();
    private readonly port: string;
    public AppRouter: Router = AppRouter;

    constructor(port: string) {
        this.port = port;
        this.addDependencies();
        this.configureRoutes();
    }

    private addDependencies() {
        this.app.use(morgan('combined'));
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    private configureRoutes() {
        this.app.use('/', this.AppRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`);
        })
    }
}