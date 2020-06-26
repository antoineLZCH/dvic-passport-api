import { Request, Response } from 'express';
import MainRouter from '../helpers/router';
import { paths } from './constants';
import VersionedRouter from './v1';
import { isValidToken } from '../middlewares'
import fs = require('fs');
import * as path from 'path'
import * as yaml from 'js-yaml';
const swaggerUi = require('swagger-ui-express');
class AppRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareDocumentation();
        this.declareMiddlewares();
        this.declareVersionedRouter();
        this.declareAppBaseRoute();
    }
    private declareVersionedRouter() {
        this.router.use(paths.V1, VersionedRouter);
    }
    private declareDocumentation() {
        const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, './swagger.yaml'), { encoding: 'utf-8'}))
        const { PORT } = process.env;
        swaggerDocument.servers[0].url = swaggerDocument.servers[0].url.replace('ENV_PORT', PORT)
        this.router.use(swaggerUi.serve)
        this.router.get('/docs', swaggerUi.setup(swaggerDocument))
    }
    private declareMiddlewares() {
        this.router.use(isValidToken)
    }

    private declareAppBaseRoute() {
        this.router.use(paths.DEFAULT, (req: Request, res: Response) => {
            return res.send('Welcome to the API');
        })
    }
}

export default new AppRouter().router;