import Joi from "joi";

const emptySchema = Joi.object()
  .min(1)
  .messages({ "object.min": "Missing fields" });

const isValidId = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
    "boolean.base": "Must be boolean type",
  }),
});

const cocktailSchema = Joi.object({
  drink: Joi.string()
    .required()
    .messages({ "any.required": "missing required 'drink' field" }),
  description: Joi.string(),
  category: Joi.string()
    .required()
    .messages({ "any.required": "missing required 'category' field" }),
  glass: Joi.string()
    .required()
    .messages({ "any.required": "missing required 'glass' field" }),
  ingredients: Joi.array().items(
    Joi.object({ title: Joi.string(), measure: Joi.string() })
  ),
  instructions: Joi.string()
    .required()
    .messages({ "any.required": "missing required 'instructions' field" }),
  drinkThumb: Joi.string()
    .required()
    .messages({ "any.required": "missing required 'drinkThumb' field" }),
});

export default {
  emptySchema,
  cocktailSchema,
  isValidId,
};
