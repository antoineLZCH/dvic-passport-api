import { Request, Response } from 'express';
import UserModel from './model';
import IUser from './interface';

async function getUsers(req: Request, res: Response) {
    try {
        const users = await UserModel.find().populate('owned_skills');
        return res.send(users).status(200);
    } catch(error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function getUser(req: Request, res: Response) {
    try {
        const user = await UserModel.findOne({_id: req.params.id}).populate('owned_skills');
        return res.send(user).status(200);
    } catch(error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function createUser(req: Request, res: Response) {
    const sentRequest: IUser = req.body;
    try {
        const createdUser = await new UserModel(sentRequest).save();
        return res.send(createdUser).status(201);
    } catch(error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}
async function deleteUser(req: Request, res: Response) {
    try {
        const user = await UserModel.findOneAndDelete({_id: req.params.id});
        return res.send(user).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}

async function createUserSkill(req: Request, res: Response) {
    const sentRequest: IUser = req.body;
    try {
        const createdUserSkill = await UserModel.updateOne(
            {_id: req.params.id}, { $push: { owned_skills: { sentRequest } }}, {new: true}
            );
        return res.send(createdUserSkill).status(200);
    } catch (error) {
        res.status(500).send(error);
        throw new Error(error);
    }
}

async function updateUserSkill() {}
async function deleteUserSkill() {}

export default {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    createUserSkill,
    updateUserSkill,
    deleteUserSkill
}