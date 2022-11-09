import Joi from "joi";

export const validateCategory = Joi.object({
    category_name: Joi.string().required(),
})

export const validateUpdateCategory = Joi.object({
    category_name: Joi.string().required(),
})