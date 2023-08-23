import express from "express";
import ctrl from "../../controllers/ingredients.js";
import schemas from "../../schemas/ingredientSchema.js";
import { validateBody } from "../../middlewares/validateBody.js";
import { isEmptyBody } from "../../middlewares/isEmptyBody.js";
import { isValidId } from "../../middlewares/isValidId.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAll);

export default router;
