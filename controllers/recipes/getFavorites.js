import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const getFavorites = async (req, res) => {
  const { _id: user } = req.user;
  const favorites = await Cocktail.find({ users: user.toString() });
  if (!favorites || favorites.length === 0) {
    return res.status(404).json({ error: "No favorite drinks" });
  }
  res.json(favorites);
};

export default ctrlWrapper(getFavorites);
