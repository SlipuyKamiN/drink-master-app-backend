import express from "express";
import ctrl from "../../controllers/categories.js";

const router = express.Router();

router.get("/", ctrl.getAll);

export default router;
