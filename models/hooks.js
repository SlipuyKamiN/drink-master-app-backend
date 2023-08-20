const handleSaveError = (error, data, next) => {
  error.status = error.code === 11000 ? 409 : 400;
  next();
};

const handleUpdateValidate = (next) => {
  this.options.runValidators = true;
  next();
};

module.exports = {
  handleSaveError,
  handleUpdateValidate,
};
