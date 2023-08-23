import { ctrlWrapper, HttpError } from "../../utils/index.js";
import User from "../../models/users.js";

const updateUserData = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  const {email, name } = result;
  res.json({ email, subscription });
};

export default ctrlWrapper(updateUserData);
