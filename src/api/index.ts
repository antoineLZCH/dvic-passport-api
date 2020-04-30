import { Request, Response } from 'express';
import MainRouter from '../helpers/router';
import {paths} from './constants';
import VersionedRouter from './v1';

class AppRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareVersionedRouter();
        this.declareAppBaseRoute();
    }

    private declareVersionedRouter() {
        this.router.use(paths.V1, VersionedRouter);
    }

    private declareAppBaseRoute() {
        this.router.use(paths.DEFAULT, (req: Request, res: Response) => {
            return res.send('Welcome to the API');
        })
    }
}

export default new AppRouter().router;