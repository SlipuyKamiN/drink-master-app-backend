import express from "express";
import {
  addMyRecipe,
  deleteMyRecipe,
  getMyRecipes,
} from "../../controllers/myrecipes/index.js";
import schemas from "../../schemas/userSchema.js";
import { validateBody, authenticate, upload } from "../../middlewares/index.js";

const router = express.Router();

// router.use(authenticate);

router.post("/", validateBody(schemas.cocktailSchema), addMyRecipe);
router.delete("/", deleteMyRecipe);
router.get("/", getMyRecipes);

export default router;
