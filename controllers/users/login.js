import bcrypt from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "../../models/users.js";
import { HttpError, ctrlWrapper } from "../../utils/index.js";

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  const userData = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true, select: "avatarURL name email token" }
  );

  const currentTime = Date.now();
  const createdAt = user.createdAt.getTime();
  const sinceSignUp = currentTime - createdAt;

  res.json({ userData, sinceSignUp });
};

export default ctrlWrapper(login);
