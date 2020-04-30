import { Request, Response } from 'express';
import MainRouter from '../helpers/router';
import {paths} from './constants';
import VersionedRouter from './v1';

class AppRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareAppBaseRoute();
        this.declareVersionedRouter();
    }

    private declareVersionedRouter() {
        this.router.use('/v1/', VersionedRouter);
    }

    private declareAppBaseRoute() {
        this.router.use(paths.DEFAULT, (req: Request, res: Response) => {
            return res.send('Welcome to the API');
        })
    }
}

export default new AppRouter().router;