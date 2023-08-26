import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";
import Ingredient from "../../models/ingredients.js";

const addMyRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const drinkThumb = req.file.path;

  const { ingredients } = req.body;

  let ingredientsArray = [];

  for (const ingredient of ingredients) {
    const { title } = ingredient;

    const ingredientData = await Ingredient.find({ title });

    ingredientsArray.push(ingredientData[0]);
  }

  const result = await Cocktail.create({ ...req.body, owner, drinkThumb });

  const updatedIngredients = result.ingredients.map((ingredient) => {
    const matchingIngredient = ingredientsArray.find(
      (data) => data.title === ingredient.title
    );

    // this part of code doesn't work

    if (matchingIngredient) {
      return {
        ...ingredient,
        ingredientThumb: matchingIngredient.ingredientThumb,
        "thumb-medium": matchingIngredient["thumb-medium"],
        "thumb-small": matchingIngredient["thumb-small"],
      };
    } else {
      return ingredient;
    }
  });

  const finalResult = await Cocktail.findByIdAndUpdate(
    result._id,
    { ingredients: updatedIngredients },
    { new: true, runValidators: true }
  );

  res.status(201).json(finalResult);
};

export default ctrlWrapper(addMyRecipe);
