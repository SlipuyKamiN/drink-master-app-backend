import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getMyRecipes = async (req, res) => {

  const { _id: owner } = req.user;
  const { page = 1, limit = 9, ...query } = req.query;
  const skip = (page - 1) * limit;

  const result = await Cocktail.find({ owner, ...query }, "-createdAt", {
    skip,
    limit,
  });
  res.json(result);
};

export default ctrlWrapper(getMyRecipes);
