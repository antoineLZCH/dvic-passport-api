"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../helpers/router"));
const constants_1 = require("./constants");
const user_1 = __importDefault(require("./user"));
const skill_1 = __importDefault(require("./skill"));
class VersionedRouter extends router_1.default {
    constructor() {
        super(constants_1.paths);
        this.declareBaseRoute();
        this.declareSubRouters();
    }
    declareSubRouters() {
        this.router.use(constants_1.paths.USER, user_1.default.getRouter());
        this.router.use(constants_1.paths.SKILL, skill_1.default.getRouter());
    }
    declareBaseRoute() {
        this.router.get(constants_1.paths.DEFAULT, (req, res) => {
            return res.send('This is version 1 of the API.');
        });
    }
}
exports.default = new VersionedRouter().router;
//# sourceMappingURL=index.js.map