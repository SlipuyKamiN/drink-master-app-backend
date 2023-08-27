import express from "express";
import {getAllGlasses} from "../../controllers/glass/index.js";

const glassesRouter = express.Router();

// glassesRouter.use(authenticate);

glassesRouter.get("/", getAllGlasses);

export default glassesRouter;
