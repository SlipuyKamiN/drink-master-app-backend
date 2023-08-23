import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const getAll = async (req, res) => {
  const data = "some categories data";
  res.json(data);
};

export default {
  getAll: ctrlWrapper(getAll),
};
