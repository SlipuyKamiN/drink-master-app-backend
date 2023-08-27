import { ctrlWrapper, HttpError } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const deleteMyRecipe = async (req, res) => {
  const { id } = req.params;
  const { _id: user } = req.user;

  const drink = await Cocktail.findById(id);

  if (!drink) {
    throw HttpError(404, "Drink with such id was not found");
  }

  if (drink.owner.toString() !== user.toString()) {
    throw HttpError(403, "You are not authorized to delete this recipe");
  }

  const deletedDrink = await Cocktail.findByIdAndDelete(id);

  res.json({
    message: `${deletedDrink.drink} has been deleted`,
  });
};

export default ctrlWrapper(deleteMyRecipe);
