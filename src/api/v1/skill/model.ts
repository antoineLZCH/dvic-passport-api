import database from '../../../config/database';
import * as Joi from '@hapi/joi';
import * as mongoose  from 'mongoose';

const Joigoose = require('joigoose')(database, null, {
    _id: false,
    timestamps: false
});

const joiSkillSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    required_skills: Joi.array().items(
        Joi.string().meta({
            _mongoose: { type: database.Schema.Types.ObjectId, ref: "Skill" }
        }))
})

const skillSchema = new database.Schema(Joigoose.convert(joiSkillSchema));

export default database.model('Skill', skillSchema);