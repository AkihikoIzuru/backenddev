const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/UserController.js");

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
