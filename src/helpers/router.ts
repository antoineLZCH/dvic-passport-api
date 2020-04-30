import { Router } from 'express';

interface routes {
    [key: string]: string
}

export default class CoreRouter {
    public router: Router = Router();
    protected routes: routes;
    constructor(routes: routes) {
        this.routes = routes;
    }
}