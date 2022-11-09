import Joi from "joi";

export const signup = Joi.object({
    full_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(6).required()
})

export const signin = Joi.object({
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(6).required()
})