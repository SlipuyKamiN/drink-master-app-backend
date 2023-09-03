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
  await User.findByIdAndUpdate(user._id, { token }, { new: true });

  const currentTime = Date.now();
  const createdAt = user.createdAt.getTime();
  const sinceSignUp = currentTime - createdAt;

  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatarURL: user.avatarURL,
    token,
    sinceSignUp,
  };

  res.json(userData);
};

export default ctrlWrapper(login);
