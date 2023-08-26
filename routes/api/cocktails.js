import express from "express";
import {
  updateFavorites,
  getAllCategories,
  getDrinkById,
  getDrinksByQuery,
  getMainDrinks,
} from "../../controllers/recipes/index.js";

import { isValidId, authenticate } from "../../middlewares/index.js";

const router = express.Router();

router.use(authenticate);

router.get("/category-list", getAllCategories);

router.get("/main-page", getMainDrinks);

router.get("/:id", isValidId, getDrinkById);

router.get("/", getDrinksByQuery);

router.patch("/favorites/:id", isValidId, updateFavorites);

// router.patch("/favorites/:id", deleteFavorites);

export default router;
