import Ingredient from "../models/ingredients.js";
import { HttpError, ctrlWrapper } from "../utils/index.js";

const getAll = async (req, res) => {
  const data = "some Ingredient data";
  res.json(data);
};

export default {
  getAll: ctrlWrapper(getAll),
};
