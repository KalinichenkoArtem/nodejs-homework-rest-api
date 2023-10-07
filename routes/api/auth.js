const express = require("express");

const ctrl = require("../../controllers/auth");
const {
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares/index");
const { schemas } = require("../../schemas/index");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.get("/users/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/users/verify/",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/users/logout", authenticate, ctrl.logout);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
