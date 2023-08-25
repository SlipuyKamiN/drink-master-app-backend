import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getDrinkById = async (req, res) => {
  const { id } = req.params;

  const drinkById = await Cocktail.findById(id);

  if (!drinkById) {
    throw HttpError(404, "Sorry, there is no drink with such id");
  }

  res.json(drinkById);
};

export default ctrlWrapper(getDrinkById);
