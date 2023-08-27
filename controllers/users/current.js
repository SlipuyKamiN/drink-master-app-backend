import { ctrlWrapper } from "../../utils/index.js";

const getCurrent = (req, res) => {
  const { email, name, avatarURL } = req.user;
  res.json({
    email,
    name,
    avatarURL,
  });
};

export default ctrlWrapper(getCurrent);

