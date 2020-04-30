import { Request, Response } from 'express';
import MainRouter from "../../helpers/router";
import { paths } from './constants';

class VersionedRouter extends MainRouter {
    constructor() {
        super();
        this.declareBaseRoute();
    }

    private declareBaseRoute() {
        this.router.use(paths.DEFAULT, (req: Request, res: Response) => {
            return res.send('This is version 1 of the API.')
        })
    }
}

export default new VersionedRouter().router;