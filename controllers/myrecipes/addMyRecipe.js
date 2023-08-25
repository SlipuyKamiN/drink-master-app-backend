import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const addMyRecipe = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Cocktail.create({ ...req.body, owner });
  res.status(201).json(result);
};

export default ctrlWrapper(addMyRecipe);
