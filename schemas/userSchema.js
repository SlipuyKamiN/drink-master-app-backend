import Joi from "joi";
import { emailRegexp, passwordRegexp } from "../constants/user-constants.js";

const userSignupSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
    "any.required": "Name is required",
  }),
  password: Joi.string()
    .min(6)
    .max(16)
    .pattern(passwordRegexp)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password cannot be longer than 16 characters",
      "string.pattern.base":
        "Password must include at least 1 uppercase, 1 lowercase and 1 digit",
      "any.required": "Password is required",
    }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
});

const userSigninSchema = Joi.object({
  password: Joi.string().min(6).max(16).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.max": "Password cannot be longer than 16 characters",
    "any.required": "Password is required",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
});

const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is required",
  }),
});

export default {
  userSignupSchema,
  userSigninSchema,
  userEmailSchema,
};
