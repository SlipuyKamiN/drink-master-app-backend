import { ctrlWrapper } from "../../utils/index.js";
import User from "../../models/users.js";

const updateAvatar = async (req, res) => {
  try {
    const { _id} = req.user;
    const avatarURL = req.file.path;
    
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    throw error;
  }
};

export default ctrlWrapper(updateAvatar);
