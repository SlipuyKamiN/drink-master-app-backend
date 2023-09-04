import Joi from "joi";

const cocktailSchema = Joi.object({
  drink: Joi.string().required().messages({
    "any.required": "The drink field is required",
    "string.empty": "The drink field is required",
    "string.base": "The drink must be a string",
  }),
  description: Joi.string(),
  category: Joi.string()
    .valid(
      "Ordinary Drink",
      "Cocktail",
      "Shake",
      "Other",
      "Cocoa",
      "Shot",
      "Coffee / Tea",
      "Homemade Liqueur",
      "Punch / Party Drink",
      "Beer",
      "Soft Drink"
    )
    .required()
    .messages({
      "any.required": "The category field is required",
      "string.empty": "The category field is required",
      "string.base": "The category must be a string",
      "any.only":
        "Invalid category. Allowed values are Ordinary Drink, Cocktail, Shake, Other, Cocoa, Shot, Coffee / Tea, Homemade Liqueur, Punch / Party Drink, Beer, Soft Drink",
    }),
  glass: Joi.string()
    .valid(
      "Highball glass",
      "Cocktail glass",
      "Old-fashioned glass",
      "Whiskey Glass",
      "Collins glass",
      "Pousse cafe glass",
      "Champagne flute",
      "Whiskey sour glass",
      "Cordial glass",
      "Brandy snifter",
      "White wine glass",
      "Nick and Nora Glass",
      "Hurricane glass",
      "Coffee mug",
      "Shot glass",
      "Jar",
      "Irish coffee cup",
      "Punch bowl",
      "Pitcher",
      "Pint glass",
      "Copper Mug",
      "Wine Glass",
      "Beer mug",
      "Margarita / Coupette glass",
      "Beer pilsner",
      "Beer Glass",
      "Parfait glass",
      "Mason jar",
      "Margarita glass",
      "Martini Glass",
      "Balloon Glass",
      "Coupe Glass"
    )
    .required()
    .messages({
      "any.required": "The glass field is required",
      "string.empty": "The glass field is required",
      "string.base": "The glass must be a string",
      "any.only":
        "Invalid glass. Allowed values are Highball glass, Cocktail glass, Old-fashioned glass, Whiskey Glass, Collins glass, Pousse cafe glass, Champagne flute, Whiskey sour glass, Cordial glass, Brandy snifter, White wine glass, Nick and Nora Glass, Hurricane glass, Coffee mug, Shot glass, Jar, Irish coffee cup, Punch bowl, Pitcher, Pint glass, Copper Mug, Wine Glass, Beer mug, Margarita / Coupette glass, Beer pilsner, Beer Glass, Parfait glass, Mason jar, Margarita glass, Martini Glass, Balloon Glass, Coupe Glass",
    }),
  ingredients: Joi.array().items(
    Joi.object({ title: Joi.string(), measure: Joi.string() })
      .required()
      .messages({ "any.required": "The ingredients field is required" })
  ),
  instructions: Joi.alternatives()
    .try(Joi.array().items(Joi.string), Joi.string())
    .required()
    .messages({ "any.required": "The instructions field is required" }),
});

export default {
  cocktailSchema,
};
