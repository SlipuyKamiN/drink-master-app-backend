import { ctrlWrapper, HttpError } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const deleteMyRecipe = async (req, res) => {
  const { id } = req.params;

  const result = await Cocktail.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, "Recipe with such id is not found");
  }

  res.json({
    message: "Recipe deleted",
  });
};


export default ctrlWrapper(deleteMyRecipe);
