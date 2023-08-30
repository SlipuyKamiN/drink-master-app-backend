import { ctrlWrapper } from "../../utils/index.js";

const getCurrent = (req, res) => {
  const { _id, email, name, avatarURL, token } = req.user;
  res.json({
    _id,
    email,
    name,
    avatarURL,
    token,
  });
};

export default ctrlWrapper(getCurrent);
