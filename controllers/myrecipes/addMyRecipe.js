import { ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const addMyRecipe = async (req, res) => {
  try {
    const { _id: owner } = req.user;

    const drinkThumb = req.file.path;

    const result = await Cocktail.create({ ...req.body, owner, drinkThumb});

    res.status(201).json(result);
  } catch (error) {
    throw error;
  }
};

export default ctrlWrapper(addMyRecipe);
