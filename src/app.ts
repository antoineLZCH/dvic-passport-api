import express from 'express';
import { Application, Router } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compress from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';

import AppRouter from './api';

export default class App {
    public app: Application = express();
    private readonly port: string;
    public AppRouter: Router = AppRouter;
    private whitelist: Array<string> = ['*'];

    constructor(port: string) {
        this.port = port;
        this.addDependencies();
        this.configureRoutes();
    }

    private addDependencies() {
        this.app.use(morgan('combined'));
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(compress());
        this.app.use(cors({
            exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time',
            origin: (origin: string, callback) => {
                if (this.whitelist.includes('*')) callback(null, true);
                if (!this.whitelist || this.whitelist.includes(origin)) callback(null, true);
                else (new Error('Not Allowed by CORS.'))
            }
        }));

    }

    private configureRoutes() {
        this.app.use('/api', this.AppRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`);
        })
    }
}