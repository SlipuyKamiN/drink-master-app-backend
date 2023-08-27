import Joi from "joi";
import { emailRegexp, passwordRegexp } from "../constants/user-constants.js";

const userSignupSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).max(16).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const userSigninSchema = Joi.object({
  password: Joi.string().min(6).max(16).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required field email" }),
});


export default {
  userSignupSchema,
  userSigninSchema,
  userEmailSchema,
};
