import { ctrlWrapper } from "../../utils/index.js";
import User from "../../models/users.js";

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { name } = req.body;

  let updatedFields = { name };

  if (req.file) {
    updatedFields.avatarURL = req.file.path;
  }

  await User.findByIdAndUpdate(_id, updatedFields);

  const updatedUser = await User.findById(_id);
  const { avatarURL, name: updatedName } = updatedUser;

  res.json({ avatarURL, name: updatedName });
};

export default ctrlWrapper(updateUser);
