"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../../helpers/router"));
const controller_1 = __importDefault(require("./controller"));
const constants_1 = require("./constants");
class UserRouter extends router_1.default {
    constructor() {
        super(constants_1.paths);
        this.declareRoutes();
    }
    declareRoutes() {
        this.router.get(constants_1.paths.GET_USERS, controller_1.default.getUsers);
        this.router.get(constants_1.paths.GET_USER, controller_1.default.getUser);
        this.router.post(constants_1.paths.CREATE_USER, controller_1.default.createUser);
        this.router.delete(constants_1.paths.DELETE_USER, controller_1.default.deleteUser);
        this.router.patch(constants_1.paths.CREATE_USER_SKILL, controller_1.default.createUserSkill);
        this.router.patch(constants_1.paths.UPDATE_USER_SKILL, controller_1.default.updateUserSkill);
        this.router.patch(constants_1.paths.DELETE_USER_SKILL, controller_1.default.deleteUserSkill);
    }
}
exports.default = new UserRouter;
//# sourceMappingURL=index.js.map