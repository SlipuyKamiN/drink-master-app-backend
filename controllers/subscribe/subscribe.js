import { HttpError, ctrlWrapper } from "../../utils/index.js";
import { sendEmail } from "../../helpers/index.js";
import User from "../../models/users.js";

const subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(404, "User not found");
    }

    await User.findByIdAndUpdate(
      user._id,
      {
        subscription: true,
      },
      {
        new: true,
      }
    );
  } catch (error) {
    throw error;
  }

  const subscribeEmail = {
    to: email,
    subject: "DrinkMaster Subscription",
    html: `<div
    style="
      background-color: #0a0a11;
      width: 75%;
      height: 90%;
      background-image: url(https://res.cloudinary.com/dbvxfxxjv/image/upload/v1692960806/avatars/mae-mu-T7heq8rawkc-unsplash_1_xixcax.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50% 50%;
    "
  >
    <img
      src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1692959363/avatars/logo_crexcv.png"
      alt="Logo"
      width="150"
    />
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td>
          <p style="color: #f3f3f3">Thank you for subscription!</p>
        </td>
        <td>Column 2</td>
      </tr>
    </table>
  </div>`,
  };

  await sendEmail(subscribeEmail);

  res.json({
    message: "Successful subscription",
  });
};

export default ctrlWrapper(subscribe);
