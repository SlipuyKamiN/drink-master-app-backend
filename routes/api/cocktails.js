import express from "express";
import {
  updateFavorites,
  getAllCategories,
  getDrinkById,
  getDrinksByQuery,
  getMainDrinks,
  getFavorites,
  getPopular,
} from "../../controllers/recipes/index.js";

import { isValidId, authenticate } from "../../middlewares/index.js";

const router = express.Router();

router.use(authenticate);

router.get("/category-list", getAllCategories);

router.get("/main-page", getMainDrinks);

router.get("/popular-recipes", getPopular);

router.get("/favorites", getFavorites);

router.get("/:id", isValidId, getDrinkById);

router.get("/", getDrinksByQuery);

router.patch("/favorites/:id", isValidId, updateFavorites);

export default router;
