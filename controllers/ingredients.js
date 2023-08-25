import Ingredient from "../models/ingredients.js";
import { ctrlWrapper } from "../utils/index.js";

const getIngredients = async (req, res) => {
  const ingredients = await Ingredient.find().sort({ title: 1 });

  if (!ingredients) {
    throw HttpError(404, "Sorry, there are no ingredients to display");
  }
  res.json(ingredients);
};

export default ctrlWrapper(getIngredients);
