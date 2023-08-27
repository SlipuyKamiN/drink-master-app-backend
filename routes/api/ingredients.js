import express from "express";
import getIngredients from "../../controllers/ingredients.js";

import { authenticate } from "../../middlewares/index.js";

const router = express.Router();

router.use(authenticate);

router.get("/list", getIngredients);

export default router;
