import { Request, Response } from 'express'
import SkillModel from './model'
import ISkill from './interface'
export default {
    async getAllSkills(req: Request, res: Response) {
        try {
            const allSkills = await SkillModel.find({});
            return res.status(201).send(allSkills)
        } catch (e) {
            return res.sendStatus(500);
        }
    },
    async getSkill(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const newSkill = await SkillModel.findById(id);
            return res.status(201).send(newSkill)
        } catch (e) {
            return res.sendStatus(500);
        }
    },
    async updateSkill(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const updated = await SkillModel.updateOne({_id: id}, req.body);
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
            return res.status(201).send(createSkill)
        } catch (e) {
            return res.sendStatus(500);
        }
    }

}
