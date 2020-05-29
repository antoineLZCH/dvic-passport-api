"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../helpers/router"));
const constants_1 = require("./constants");
const v1_1 = __importDefault(require("./v1"));
const middlewares_1 = require("../middlewares");
class AppRouter extends router_1.default {
    constructor() {
        super(constants_1.paths);
        this.declareMiddlewares();
        this.declareVersionedRouter();
        this.declareAppBaseRoute();
    }
    declareVersionedRouter() {
        this.router.use(constants_1.paths.V1, v1_1.default);
    }
    declareMiddlewares() {
        this.router.use(middlewares_1.isValidToken);
    }
    declareAppBaseRoute() {
        this.router.use(constants_1.paths.DEFAULT, (req, res) => {
            return res.send('Welcome to the API');
        });
    }
}
exports.default = new AppRouter().router;
//# sourceMappingURL=index.js.map