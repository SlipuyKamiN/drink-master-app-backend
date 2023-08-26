import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getPopular = async (req, res) => {
  const cocktails = await Cocktail.find({});

  if (!cocktails || cocktails.length === 0) {
    throw HttpError(404, "No popular drinks so far");
  }

  const popular = cocktails
    .sort((a, b) => b.users.length - a.users.length)
    .slice(0, 4);

  res.json(popular);
};

export default ctrlWrapper(getPopular);
