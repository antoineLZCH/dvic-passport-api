import MainRouter from "../../../helpers/router";
import UserController from './controller';
import { paths } from './constants';

class UserRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_USERS, UserController.getUsers);
        this.router.get(paths.GET_USER, UserController.getUser);
        this.router.post(paths.CREATE_USER, UserController.createUser);
        this.router.delete(paths.DELETE_USER, UserController.deleteUser);
        this.router.patch(paths.CREATE_USER_SKILL, UserController.createUserSkill);
        this.router.patch(paths.UPDATE_USER_SKILL, UserController.updateUserSkill);
        this.router.patch(paths.DELETE_USER_SKILL, UserController.deleteUserSkill);
    }
}

export default new UserRouter;