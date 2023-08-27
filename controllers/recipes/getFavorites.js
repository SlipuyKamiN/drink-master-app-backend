import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getFavorites = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const { _id: user } = req.user;

  const skip = (page - 1) * limit;

  const favorites = await Cocktail.find({ users: user })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .exec();

  if (!favorites || favorites.length === 0) {
    return res.status(404).json({ error: "No favorite drinks" });
  }

  const totalHits = await Cocktail.countDocuments({ users: user });

  res.json({ totalHits, favorites });
};

export default ctrlWrapper(getFavorites);
