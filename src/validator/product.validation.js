import Joi from "joi";

export const validateProduct = Joi.object({
    product_name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.required(),
    product_image: Joi.string().required(),
})

export const validateUpdateProduct = Joi.object({
    product_name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.required(),
    product_image: Joi.string().required(),

})