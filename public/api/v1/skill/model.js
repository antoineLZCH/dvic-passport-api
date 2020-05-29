"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../config/database"));
const Joi = __importStar(require("@hapi/joi"));
const Joigoose = require('joigoose')(database_1.default, null, {
    _id: false,
    timestamps: false
});
const joiSkillSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    required_skills: Joi.array().items(Joi.string().meta({
        _mongoose: { type: database_1.default.Schema.Types.ObjectId, ref: "Skill" }
    }))
});
const skillSchema = new database_1.default.Schema(Joigoose.convert(joiSkillSchema));
exports.default = database_1.default.model('Skill', skillSchema);
//# sourceMappingURL=model.js.map