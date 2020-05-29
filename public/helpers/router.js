"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MainRouter {
    constructor(routes) {
        this.router = express_1.Router();
        this.routes = routes;
    }
    getRouter() {
        return this.router;
    }
}
exports.default = MainRouter;
//# sourceMappingURL=router.js.map