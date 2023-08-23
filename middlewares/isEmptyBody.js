import { HttpError } from "../utils/HttpError.js";

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    next(HttpError(400, "missing field favorite"));
  }
  next();
};

export { isEmptyBody };
