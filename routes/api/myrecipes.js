import express from "express";
import {
  addMyRecipe,
  deleteMyRecipe,
  getMyRecipes,
} from "../../controllers/myrecipes/index.js";
import schemas from "../../schemas/cocktailSchema.js";
import {
  validateBody,
  authenticate,
  upload,
  parseJson,
} from "../../middlewares/index.js";

const router = express.Router();

router.post(
  "/",
  validateBody(schemas.cocktailSchema),
  authenticate,
  upload.single("recipe"),
  parseJson,
  addMyRecipe
);
router.delete("/:id", authenticate, deleteMyRecipe);
router.get("/", authenticate, getMyRecipes);

export default router;
