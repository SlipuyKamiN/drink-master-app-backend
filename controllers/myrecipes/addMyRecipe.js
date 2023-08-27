import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";
import Ingredient from "../../models/ingredients.js";

const addMyRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const drinkThumb = req.file.path;

  const { ingredients } = req.body;

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

  // const updatedIngredients = result.ingredients.map((ingredient) => {
  //   const matchingIngredient = ingredientsArray.find(
  //     (data) => data.title === ingredient.title
  //   );

  //   // this part of code doesn't work

  //   if (matchingIngredient) {
  //     return {
  //       ...ingredient,
  //       ingredientThumb: matchingIngredient.ingredientThumb,
  //       // "thumb-medium": matchingIngredient["thumb-medium"],
  //       // "thumb-small": matchingIngredient["thumb-small"],
  //     };
  //   } else {
  //     return ingredient;
  //   }
  // });

  // console.log(updatedIngredients);

  // const finalResult = await Cocktail.findByIdAndUpdate(
  //   result._id,
  //   // { ingredients: updatedIngredients },
  //   { new: true, runValidators: true }
  // );
};

export default ctrlWrapper(addMyRecipe);
