import express from "express";
import {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
  } from "../../controllers/users/index.js";
import schemas from "../../schemas/userSchema.js";
import { validateBody, authenticate, upload } from "../../middlewares/index.js";


const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.userSignupSchema),
  register
);

router.post("/signin", validateBody(schemas.userSigninSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  // resizeImage,
  updateAvatar
);

export default router;
