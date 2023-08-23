import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import User from "../../models/users.js";
import { ctrlWrapper, HttpError} from "../../utils/index.js";



// const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  // const verificationToken = nanoid();

  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    // verificationToken,
  });

  // const verifyEmail = {
  //   to: email,
  //   subject: "Verify email",
  //   html: `<a href='${BASE_URL}/api/users/verify/${verificationToken}' target='_blanc'>Click to verify email</a>`,
  // };

  // await sendEmail(verifyEmail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

export default ctrlWrapper(register);
