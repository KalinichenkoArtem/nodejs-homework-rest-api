const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody } = require("../../middlewares/index");
const { schemas } = require("../../schemas/index");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
