import fs from "fs/promises";
import { ctrlWrapper, cloudinary } from "../../utils/index.js";
import User from "../../models/users.js";


const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: oldPath} = req.file;

    const {url: avatarURL} = await cloudinary.uploader.upload(oldPath, {
      folder: "avatars"
    })
    
    await fs.unlink(oldPath);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
  } 
  catch (error) {
    await fs.unlink(oldPath);
    throw error;
  }
};

export default ctrlWrapper(updateAvatar);
