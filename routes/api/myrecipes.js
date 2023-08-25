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

router.post(
  "/",
  validateBody(schemas.cocktailSchema),
  authenticate,
  upload.single("recipe"),
  (req, res) => console.log(req.file),
  addMyRecipe
);
router.delete("/:id", deleteMyRecipe);
router.get("/", getMyRecipes);

export default router;
