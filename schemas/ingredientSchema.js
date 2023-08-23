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

const ingredientSchema = Joi.object({});

export default {
  emptySchema,
  ingredientSchema,
  isValidId,
};
