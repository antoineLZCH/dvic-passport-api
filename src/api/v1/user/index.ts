import MainRouter from "../../../helpers/router";
import User from './controller';
import { paths } from './constants';

class UserRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_USERS, User.getUsers);
        this.router.get(paths.GET_USER, User.getUser);
        this.router.post(paths.CREATE_USER, User.createUser);
        this.router.delete(paths.DELETE_USER, User.deleteUser);
        this.router.patch(paths.CREATE_USER_SKILL, User.createUserSkill);
        this.router.patch(paths.UPDATE_USER_SKILL, User.updateUserSkill);
        this.router.patch(paths.DELETE_USER_SKILL, User.deleteUserSkill);
    }
}

export default new UserRouter;