const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares/index");
const { schemas } = require("../../schemas/index");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/users/logout", authenticate, ctrl.logout);

router.get("/users/current", authenticate, ctrl.getCurrent);

module.exports = router;
