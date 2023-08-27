import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getDrinksByQuery = async (req, res) => {
  const { search, category, ingredient, page = 1, limit = 8 } = req.query;

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

  const totalHits = await Cocktail.countDocuments(query);
  const pageNumber = parseInt(page);
  const skip = (pageNumber - 1) * limit;

  const drinks = await Cocktail.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  if (drinks.length === 0) {
    throw HttpError(404, "No drinks were found");
  }

  res.json({ totalHits, drinks });
};

export default ctrlWrapper(getDrinksByQuery);
