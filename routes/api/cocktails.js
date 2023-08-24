import express from "express";
import {
  getAllCategories,
  getMainDrinks,
} from "../../controllers/recipes/index.js";
// import schemas from "../../schemas/cocktailSchema.js";
// import { validateBody, isEmptyBody, isValidId, authenticate, upload } from "../../middlewares/index.js";

const router = express.Router();

// router.use(authenticate);

router.get("/category-list", getAllCategories);

router.get("/main-page", getMainDrinks);

export default router;
