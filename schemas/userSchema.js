import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";

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

const emptySchema = Joi.object()
  .min(1)
  .messages({ "object.min": "Missing fields" });

const isValidId = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
    "boolean.base": "Must be boolean type",
  }),
});

const userSchema = Joi.object({});

export default {
  userSignupSchema,
  userSigninSchema,
  userEmailSchema,
  emptySchema,
  userSchema,
  isValidId,
};
