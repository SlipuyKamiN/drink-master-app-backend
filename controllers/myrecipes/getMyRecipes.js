import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getMyRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 8, ...query } = req.query;
  const skip = (page - 1) * limit;

  const result = await Cocktail.find({ owner, ...query })
    .sort({
      createdAt: -1,
    })
    .skip(skip)
    .limit(limit);

  if (!result || result.length === 0) {
    return res.status(404).json({ error: "No drinks were found" });
  }

  const totalHits = await Cocktail.countDocuments({ owner: owner });

  res.json({ totalHits, result });
};

export default ctrlWrapper(getMyRecipes);
