import { ctrlWrapper, HttpError } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const deleteMyRecipe = async (req, res) => {
  
  const { id } = req.params;
  // const { _id } = req.user;

  const result = await Cocktail.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    message: "Recipe deleted",
  });
};

export default ctrlWrapper(deleteMyRecipe);
