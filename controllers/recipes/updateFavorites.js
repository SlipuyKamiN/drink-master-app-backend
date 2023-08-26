import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const updateFavorites = async (req, res) => {
  const { id } = req.params;
  const { _id: user } = req.user;

  const recipe = await Cocktail.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "Drink with such id is not found" });
  }

  if (!recipe.users) {
    recipe.users = [];
  }

  const isFavorite = recipe.users.includes(user);

  if (isFavorite) {
    await Cocktail.findByIdAndUpdate(recipe._id, { $pull: { users: user } });
    res.status(200).json({ message: `Removed ${recipe.drink} from favorites` });
  } else {
    await Cocktail.findByIdAndUpdate(recipe._id, { $push: { users: user } });
    res.status(200).json({ message: `Added ${recipe.drink} to favorites` });
  }
};

export default ctrlWrapper(updateFavorites);
