import fs from "fs/promises";
import path from "path";
import { ctrlWrapper } from "../../utils/index.js";

const categoriesPath = path.resolve("db", "categories.json");

const getAllCategories = async (req, res) => {
  const data = await fs.readFile(categoriesPath);
  const parsedData = JSON.parse(data).sort();
  res.json(parsedData);
};

export default ctrlWrapper(getAllCategories);