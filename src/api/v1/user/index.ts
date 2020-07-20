import MainRouter from "../../../helpers/router";
import UserController from './controller';
import { isAdmin } from '../../../middlewares/'
import { paths } from './constants';
class UserRouter extends MainRouter {
    constructor() {
        super(paths);
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_USERS, UserController.getUsers);
        this.router.get(paths.GET_USER, UserController.getUser);
        this.router.post(paths.CREATE_USER, isAdmin, UserController.createUser);
        this.router.delete(paths.DELETE_USER, isAdmin, UserController.deleteUser);
        this.router.patch(paths.UPDATE_USER_SKILL, isAdmin, UserController.updateUserSkill);
        this.router.delete(paths.DELETE_USER_SKILL, isAdmin, UserController.deleteUserSkill);
        this.router.post(paths.CREATE_USER_SKILL, isAdmin, UserController.createUserSkill);
    }
}

export default new UserRouter;