import Cocktail from "../models/cocktails.js";

import { HttpError } from "../utils/HttpError.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const getAll = async (req, res) => {
  const data = "some Cocktail data";
  res.json(data);
};

export default {
  getAll: ctrlWrapper(getAll),
};
