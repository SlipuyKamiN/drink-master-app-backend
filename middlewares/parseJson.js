const parseJson = (req, res, next) => {
  let { ingredients, instructions } = req.body;

  if (typeof ingredients === "string") {
    ingredients = JSON.parse(ingredients);
  }

  if (typeof instructions === "string") {
    instructions = JSON.parse(instructions);
  }

  next();
};

export default parseJson;
