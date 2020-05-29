"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
exports.default = {
    getAllSkills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allSkills = yield model_1.default.find({}).populate('required_skills');
                return res.status(200).send(allSkills);
            }
            catch (e) {
                return res.sendStatus(500);
            }
        });
    },
    getSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const newSkill = yield model_1.default.findById(id).populate('required_skills');
                return res.status(200).send(newSkill);
            }
            catch (e) {
                return res.sendStatus(500);
            }
        });
    },
    updateSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const updated = yield model_1.default.updateOne({ _id: id }, req.body).populate('required_skills');
                return res.status(200).send(updated);
            }
            catch (e) {
                return res.sendStatus(500);
            }
        });
    },
    deleteSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deletedSkill = yield model_1.default.findByIdAndRemove(id);
                return res.status(200).send(deletedSkill);
            }
            catch (e) {
                return res.sendStatus(500);
            }
        });
    },
    createSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSkill = req.body;
            try {
                const createSkill = yield new model_1.default(newSkill).save();
                return res.status(200).send(createSkill);
            }
            catch (e) {
                return res.sendStatus(500);
            }
        });
    },
    removeRequiredSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { id: requiredSkillId } = req.body;
            console.log('id', id);
            console.log('requiredSkillId', requiredSkillId);
            try {
                const createSkill = yield model_1.default.updateOne({ _id: id }, { $pull: { required_skills: requiredSkillId } });
                return res.status(200).send(createSkill);
            }
            catch (e) {
                console.error(e);
                //return res.sendStatus(500);
            }
        });
    },
    addRequiredSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { id: requiredSkillId } = req.body;
            try {
                const createSkill = yield model_1.default.updateOne({ _id: id }, { $push: { required_skills: requiredSkillId } });
                return res.status(200).send(createSkill);
            }
            catch (e) {
                console.error(e);
                return res.sendStatus(500);
            }
        });
    }
};
//# sourceMappingURL=controller.js.map