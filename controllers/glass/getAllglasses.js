import fs from "fs/promises";
import path from "path";
import { ctrlWrapper } from "../../utils/index.js";

const glassesPath = path.resolve("db", "glasses.json");

const getAllGlasses = async (req, res) => {
  const data = await fs.readFile(glassesPath);
  const parsedData = JSON.parse(data).sort();
  res.json(parsedData);
};

export default ctrlWrapper(getAllGlasses);
