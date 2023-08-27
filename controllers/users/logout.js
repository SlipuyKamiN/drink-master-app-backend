import { ctrlWrapper } from "../../utils/index.js";
import User from "../../models/users.js";

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

export default ctrlWrapper(logout);
