import { Request, Response } from 'express'
import SkillModel from './model'
import UserModel from '../user/model'
import ISkill from './interface'
import user from '../user'

export default {

    async getAllSkills(req: Request, res: Response) {
        try {
            const allSkills = await SkillModel.find({}).populate('required_skills');
            return res.status(200).send(allSkills)
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async getSkill(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const newSkill = await SkillModel.findById(id).populate('required_skills');
            return res.status(200).send(newSkill)
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async updateSkill(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const updated = await SkillModel.updateOne({ _id: id }, req.body).populate('required_skills');
            return res.status(200).send(updated)
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async deleteSkill(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedSkill = await SkillModel.findByIdAndRemove(id);
            return res.status(200).send(deletedSkill)
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async createSkill(req: Request, res: Response) {
        const newSkill: ISkill = req.body;
        try {
            const createSkill = await new SkillModel(newSkill).save();
            return res.status(200).send(createSkill)
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async removeRequiredSkill(req: Request, res: Response) {
        const { id } = req.params;
        const { id: requiredSkillId } = req.body
        try {
            const createSkill = await SkillModel.updateOne({ _id: id }, { $pull: { required_skills: requiredSkillId } });
            return res.status(200).send(createSkill)
        } catch (e) {
            console.error(e);
            return res.sendStatus(500);
        }
    },

    async addRequiredSkill(req: Request, res: Response) {
        const { id } = req.params;
        const { id: requiredSkillId } = req.body
        try {
            const createSkill = await SkillModel.updateOne({ _id: id }, { $push: { required_skills: requiredSkillId } });
            return res.status(200).send(createSkill)
        } catch (e) {
            console.error(e);
            return res.sendStatus(500);
        }
    },
    async getRelatedUsers(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const Users = await UserModel.find({ owned_skills: {$elemMatch: { skill_infos: id}} }).populate('owned_skills.skill_infos');;
            console.log(Users)
            return res.status(200).send(Users)
        } catch (e) {
            console.error(e);
            return res.sendStatus(500);
        }
    }

}
