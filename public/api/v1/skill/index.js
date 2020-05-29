"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../../helpers/router"));
const controller_1 = __importDefault(require("./controller"));
const constants_1 = require("./constants");
class SkillControllerRouter extends router_1.default {
    constructor() {
        super(constants_1.paths);
        this.declareRoutes();
    }
    declareRoutes() {
        this.router.get(constants_1.paths.GET_SKILLS, controller_1.default.getAllSkills);
        this.router.get(constants_1.paths.GET_SKILL, controller_1.default.getSkill);
        this.router.patch(constants_1.paths.GET_SKILL, controller_1.default.updateSkill);
        this.router.delete(constants_1.paths.GET_SKILL, controller_1.default.deleteSkill);
        this.router.post(constants_1.paths.CREATE_SKILL, controller_1.default.createSkill);
        this.router.post(constants_1.paths.ADD_REQUIRED_SKILL, controller_1.default.addRequiredSkill);
        this.router.delete(constants_1.paths.REMOVE_REQUIRED_SKILL, controller_1.default.removeRequiredSkill);
    }
}
exports.default = new SkillControllerRouter;
//# sourceMappingURL=index.js.map