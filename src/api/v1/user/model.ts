import database from '../../../config/database';
import * as Joi from '@hapi/joi';
const Joigoose = require('joigoose')(database, null, {
    _id: false,
    timestamps: false
});

const joiUserSchema = Joi.object({
    login_name: Joi.string().required(),
    owned_skills: Joi.array().items({
        level: Joi.number().required().default(0),
        skill_infos: Joi.array().meta({
            _mongoose: {type: database.Schema.Types.ObjectId, ref: "Skill"}
        })
    })
})

const userSchema = new database.Schema(Joigoose.convert(joiUserSchema));
export default database.model('User', userSchema);