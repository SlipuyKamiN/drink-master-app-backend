const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/controllers");
const schemas = require("../../schemas/schema");
const { validateBody } = require("../../middlewares/validateBody");
const isEmptyBody = require("../../middlewares/isEmptyBody");
const isValidId = require("../../middlewares/isValidId");
const { authenticate } = require("../../middlewares/authenticate");

router.use(authenticate);

// router.get("/", ctrl.getAll);

module.exports = router;
