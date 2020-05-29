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
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield model_1.default.find().populate('owned_skills.skill_infos');
            return res.send(users).status(200);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield model_1.default.findOne({ _id: req.params.id }).populate('owned_skills.skill_infos');
            return res.send(user).status(200);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentRequest = req.body;
        try {
            const createdUser = yield new model_1.default(sentRequest).save();
            return res.send(createdUser).status(201);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield model_1.default.findOneAndDelete({ _id: req.params.id });
            return res.send(user).status(200);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function createUserSkill(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentRequest = req.body;
        try {
            const createdUserSkill = yield model_1.default.updateOne({ _id: req.params.id }, {
                $set: {
                    owned_skills: {
                        skill_infos: sentRequest.id,
                        level: sentRequest.level
                    }
                }
            }, { new: true });
            return res.send(createdUserSkill).status(201);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function updateUserSkill(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentRequest = req.body;
        try {
            const updateUserSkill = yield model_1.default.updateOne({
                _id: req.params.id, "owned_skills.skill_infos": sentRequest.id
            }, {
                $set: { "owned_skills.$.level": sentRequest.level }
            });
            return res.send(updateUserSkill).status(200);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
function deleteUserSkill(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentRequest = req.body;
        try {
            const updateUserSkill = yield model_1.default.updateOne({
                _id: req.params.id, "owned_skills.skill_infos": sentRequest.id
            }, {
                $pull: { owned_skills: { skill_infos: sentRequest.id } }
            });
            return res.send(updateUserSkill).status(200);
        }
        catch (error) {
            res.status(500).send(error);
            throw new Error(error);
        }
    });
}
exports.default = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    createUserSkill,
    updateUserSkill,
    deleteUserSkill
};
//# sourceMappingURL=controller.js.map