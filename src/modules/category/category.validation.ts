import Joi from "joi";

export const categoryValidate = Joi.object({

    name: Joi.string().required(),
    icon: Joi.string().required(),
})