import database from '../../../config/database';
import * as Joi from '@hapi/joi';
const Joigoose = require('joigoose')(database, null, {
    _id: false,
    timestamps: true
});

const joiUserSchema = Joi.object({
    login_name: Joi.string().required(),
    owned_skills: Joi.array().items({
        level: Joi.number().required().default(0),
        skill_infos: Joi.string().meta({
            _mongoose: {type: database.Schema.Types.ObjectId, ref: "Skill"}
        })
    }).meta({_mongoose: {_id: false, timestamps: true}})
})

const userSchema = new database.Schema(Joigoose.convert(joiUserSchema));
export default database.model('User', userSchema);