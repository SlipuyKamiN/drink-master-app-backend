import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getDrinksByQuery = async (req, res) => {
  const { search, category, ingredient } = req.query;

  const query = {};

  if (search) {
    query.drink = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  if (ingredient) {
    query.ingredients = {
      $elemMatch: { title: ingredient },
    };
  }

  const drinks = await Cocktail.find(query).sort({ createdAt: -1 });

  if (drinks.length === 0) {
    throw HttpError(404, "No drinks were found");
  }
  res.json(drinks);
};

export default ctrlWrapper(getDrinksByQuery);
