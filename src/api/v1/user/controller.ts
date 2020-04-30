import { Request, Response } from 'express';
import UserModel from './model';
import IUser, { IOwnedSkill } from './interface';

async function getUsers(req: Request, res: Response) {
    try {
        const users = await UserModel.find().populate('owned_skills.skill_infos');
        return res.send(users).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function getUser(req: Request, res: Response) {
    try {
        const user = await UserModel.findOne({ _id: req.params.id }).populate('owned_skills.skill_infos');
        return res.send(user).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function createUser(req: Request, res: Response) {
    const sentRequest: IUser = req.body;
    try {
        const createdUser = await new UserModel(sentRequest).save();
        return res.send(createdUser).status(201);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function deleteUser(req: Request, res: Response) {
    try {
        const user = await UserModel.findOneAndDelete({ _id: req.params.id });
        return res.send(user).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}

async function createUserSkill(req: Request, res: Response) {
    const sentRequest: { id: number, level: number } = req.body;
    try {
        const createdUserSkill = await UserModel.updateOne(
            { _id: req.params.id }, {
                $set: {
                    owned_skills: {
                        skill_infos: sentRequest.id,
                        level: sentRequest.level
                    }
                }
        }, { new: true });

        return res.send(createdUserSkill).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}

async function updateUserSkill(req: Request, res: Response) {
    const sentRequest: { id: number, level: number } = req.body;
    try {
        const updateUserSkill = await UserModel.updateOne({
            _id: req.params.id, "owned_skills.skill_infos": sentRequest.id
        }, {
            $set: { "owned_skills.$.level": sentRequest.level }
        });
        return res.send(updateUserSkill).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function deleteUserSkill(req: Request, res: Response) {

    const sentRequest: { id: number } = req.body;
    try {
        const updateUserSkill = await UserModel.updateOne({
            _id: req.params.id, "owned_skills.skill_infos": sentRequest.id
        }, {
            $pull: { owned_skills: { skill_infos: sentRequest.id } }
        }
        );
        return res.send(updateUserSkill).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}

export default {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    createUserSkill,
    updateUserSkill,
    deleteUserSkill
}