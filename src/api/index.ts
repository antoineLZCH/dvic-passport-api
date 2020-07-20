import { Request, Response } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import MainRouter from '../helpers/router';
import { paths } from './constants';
import VersionedRouter from './v1';
import { isValidToken } from '../middlewares'
import swaggerDocument from './swagger'  
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