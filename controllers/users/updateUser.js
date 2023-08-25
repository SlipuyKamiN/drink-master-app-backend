import { ctrlWrapper } from "../../utils/index.js";
import User from "../../models/users.js";

const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const { name } = req.body;
    if (req.file) {
      const avatarURL = req.file.path;
      await User.findByIdAndUpdate(_id, { avatarURL, name });
      res.json({ avatarURL, name });
    }
    if(!req.file){
      await User.findByIdAndUpdate(_id, { name });
      res.json({ name });
    }
  } catch (error) {
    throw error;
  }
};

export default ctrlWrapper(updateUser);
