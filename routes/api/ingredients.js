import express from "express";
import ctrl from "../../controllers/ingredients.js";
import schemas from "../../schemas/ingredientSchema.js";
import { validateBody, isEmptyBody, isValidId, authenticate, upload } from "../../middlewares/index.js";

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAll);

export default router;
