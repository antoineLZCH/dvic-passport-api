import { Router } from 'express';

export default class MainRouter {
    public router: Router = Router();

    public getRouter() {
        return this.router;
    }
}