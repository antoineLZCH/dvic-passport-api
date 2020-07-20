import MainRouter from "../../../helpers/router";
import SkillController from './controller';
import { isAdmin } from '../../../middlewares/'
import { paths } from './constants';

class SkillControllerRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_SKILLS, SkillController.getAllSkills );
        this.router.get(paths.GET_SKILL, SkillController.getSkill );
        this.router.patch(paths.GET_SKILL,isAdmin, SkillController.updateSkill );
        this.router.delete(paths.GET_SKILL,isAdmin, SkillController.deleteSkill );
        this.router.post(paths.CREATE_SKILL,isAdmin, SkillController.createSkill );
        this.router.post(paths.ADD_REQUIRED_SKILL,isAdmin, SkillController.addRequiredSkill );
        this.router.delete(paths.REMOVE_REQUIRED_SKILL,isAdmin, SkillController.removeRequiredSkill );
        this.router.get(paths.GET_RELATED_USERS, SkillController.getRelatedUsers );
    }
}

export default new SkillControllerRouter;