import MainRouter from "../../../helpers/router";
import SkillController from './controller';
import { paths } from './constants';

class SkillControllerRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_SKILLS, SkillController.getAllSkills );
        this.router.get(paths.GET_SKILL, SkillController.getSkill );
        this.router.patch(paths.GET_SKILL, SkillController.updateSkill );
        this.router.delete(paths.GET_SKILL, SkillController.deleteSkill );
        this.router.post(paths.CREATE_SKILL, SkillController.createSkill );
        this.router.post(paths.ADD_REQUIRED_SKILL, SkillController.addRequiredSkill );
        this.router.delete(paths.REMOVE_REQUIRED_SKILL, SkillController.removeRequiredSkill );
    }
}

export default new SkillControllerRouter;