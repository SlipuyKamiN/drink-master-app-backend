import jwt from "jsonwebtoken";
import "dotenv/config";
import { ctrlWrapper, HttpError } from "../utils/index.js";
import User from "../models/users.js";

const { JWT_SECRET } = process.env;

let authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401, "Not authorized");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);

    if (!user || !user.token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    throw HttpError(401, "Not authorized");
  }

  next();
};

export default authenticate = ctrlWrapper(authenticate);
