const parseJson = async (req, res, next) => {
  let { ingredients, instructions } = req.body;

  try {
    if (typeof ingredients === "string") {
      req.body.ingredients = await JSON.parse(ingredients);
    }

    req.body.instructions = await JSON.parse(instructions);
  } catch (error) {
    req.body.instructions = instructions;
  }

  next();
};

export default parseJson;
