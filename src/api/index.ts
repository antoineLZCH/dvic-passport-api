import { Request, Response } from 'express';
import MainRouter from '../helpers/router';
import { paths } from './constants';
import VersionedRouter from './v1';
import { isValidToken } from '../middlewares'

class AppRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareMiddlewares();
        this.declareVersionedRouter();
        this.declareAppBaseRoute();
    }
    private declareVersionedRouter() {
        this.router.use(paths.V1, VersionedRouter);
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