const express = require("express");

const {
  getContacts,
  getContactById,
  addNewContact,
  deleteContact,
  putContact,
  patchContact,
} = require("../../controllers/index");

const { isValidId, authenticate } = require("../../middlewares/index");

const router = express.Router();

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, isValidId, getContactById);

router.post("/", authenticate, addNewContact);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put("/:contactId", authenticate, isValidId, putContact);

router.patch("/:contactId/favorite", authenticate, isValidId, patchContact);

module.exports = router;
