import User from "../models/users.js";

import { HttpError } from "../utils/HttpError.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const getAll = async (req, res) => {
  const data = "some User data";
  res.json(data);
};

export default {
  getAll: ctrlWrapper(getAll),
};
