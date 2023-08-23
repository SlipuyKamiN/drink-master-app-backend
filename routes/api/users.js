import express from "express";
import ctrl from "../../controllers/users.js";
import schemas from "../../schemas/userSchema.js";
import { validateBody } from "../../middlewares/validateBody.js";
import { isEmptyBody } from "../../middlewares/isEmptyBody.js";
import { isValidId } from "../../middlewares/isValidId.js";
import authenticate from "../../middlewares/authenticate.js";

console.log(ctrl);

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAll);

export default router;
