import express from "express";
import ctrl from "../../controllers/glasses.js";

const router = express.Router();

router.get("/", ctrl.getAll);

export default router;
