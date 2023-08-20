const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../utils/HttpError.js");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(HttpError(404, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
