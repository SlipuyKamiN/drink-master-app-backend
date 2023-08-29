import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";
import Ingredient from "../../models/ingredients.js";
import parseIfJSON from "../../helpers/parseIfJson.js";

const addMyRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const drinkThumb = req.file.path;

  let { ingredients, instructions } = req.body;

  ingredients = parseIfJSON(ingredients);
  instructions = parseIfJSON(instructions);

  const ingredientsArray = [];

  for (const ingredient of ingredients) {
    const ingredientData = await Ingredient.findOne({
      title: ingredient.title,
    });

    if (!ingredientData) throw HttpError(404, "Wrong ingredient title");

    const {
      ingredientThumb,
      "thumb-medium": thumbMedium,
      "thumb-small": thumbSmall,
    } = ingredientData;

    ingredientsArray.push({
      ingredientThumb,
      thumbMedium,
      thumbSmall,
      ...ingredient,
    });
  }

  const result = await Cocktail.create({
    ...req.body,
    owner,
    drinkThumb,
    ingredients: ingredientsArray,
  });

  res.status(201).json(result);
};

export default ctrlWrapper(addMyRecipe);
