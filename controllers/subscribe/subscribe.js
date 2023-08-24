import { ctrlWrapper } from "../../utils/index.js";
import { sendEmail } from "../../helpers/index.js";

const subscribe = async (req, res) => {
  const { email } = req.body;

  const subscribeEmail = {
    to: email,
    subject: "DrinkMaster Subscription",
    html: `<p>Thank you for subscription!</p>`,
  };

  await sendEmail(subscribeEmail);
};

export default ctrlWrapper(subscribe);
