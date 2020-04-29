import * as express from 'express';
import { Application, Router, Request, Response } from 'express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import bodyParser = require('body-parser');

export default class App {
    public app: Application = express();
    private readonly port: string;

    constructor(port: string) {
        this.port = port;
        this.addDependencies();
    }

    private addDependencies() {
        this.app.use(morgan('combined'));
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`);
        })
    }
}