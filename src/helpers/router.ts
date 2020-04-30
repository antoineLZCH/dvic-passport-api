import { Router } from 'express';

interface routes {
    [key: string]: string
}

export default class MainRouter {
    public router: Router = Router();
    protected routes: routes;
    constructor(routes: routes) {
        this.routes = routes;
    }

    public getRouter() {
        return this.router;
    }
}