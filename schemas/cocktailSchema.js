import Joi from "joi";

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
});

export default {
  cocktailSchema,
};
