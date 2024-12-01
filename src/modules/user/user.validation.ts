import Joi from "joi";

export const userValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    avatar: Joi.optional(),
});

export const userLoginValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});