import fs from "fs/promises";
import path from "path";
import { HttpError, ctrlWrapper } from "../../utils/index.js";
import Cocktail from "../../models/cocktails.js";

const categoriesPath = path.resolve("db", "categories.json");

function getRandomCategories(categories, numCategories) {
  const shuffledCategories = [...categories];
  for (let i = shuffledCategories.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCategories[i], shuffledCategories[j]] = [
      shuffledCategories[j],
      shuffledCategories[i],
    ];
  }
  return shuffledCategories.slice(0, numCategories);
}

async function getDrinksInCategory(category) {
  const drinksInCategory = await Cocktail.find({ category }).sort({
    createdAt: -1,
  });
  return drinksInCategory;
}

const getMainDrinks = async (req, res) => {
  try {
    const data = await fs.readFile(categoriesPath);
    const allCategories = JSON.parse(data);
    const numRandomCategories = 4;
    const randomCategories = getRandomCategories(
      allCategories,
      numRandomCategories
    );

    const result = [];

    for (const category of randomCategories) {
      const drinksInCategory = await getDrinksInCategory(category);
      if (!drinksInCategory) {
        throw HttpError(404, "Sorry, no drinks were found");
      }
      result.push({
        category,
        drinks: drinksInCategory.slice(0, 3),
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving main drink categories." });
  }
};

export default ctrlWrapper(getMainDrinks);
