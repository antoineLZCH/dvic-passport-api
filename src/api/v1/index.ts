import { Request, Response } from 'express';
import MainRouter from "../../helpers/router";
import { paths } from './constants';

import UserRouter from './user';

class VersionedRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareBaseRoute();
        this.declareSubRouters();
    }

    private declareSubRouters() {
        this.router.use(paths.USER, UserRouter.getRouter());
    }

    private declareBaseRoute() {
        this.router.get(paths.DEFAULT, (req: Request, res: Response) => {
            return res.send('This is version 1 of the API.')
        })
    }
}

export default new VersionedRouter().router;