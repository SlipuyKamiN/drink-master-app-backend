import express from "express";
import { validateBody } from "../../middlewares/index.js";
import schemas from "../../schemas/userSchema.js";
import { subscribe } from "../../controllers/subscribe/index.js";

const subscribeRouter = express.Router();

subscribeRouter.post("/", validateBody(schemas.userEmailSchema), subscribe);

export default subscribeRouter;
