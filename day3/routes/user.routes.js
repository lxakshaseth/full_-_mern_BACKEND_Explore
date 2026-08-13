const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controllers");

// CREATE
router.post("/", userController.createUser);

// READ ALL
router.get("/", userController.getUsers);

// READ ONE
router.get("/:id", userController.getUserById);

// UPDATE
router.put("/:id", userController.updateUser);

// DELETE
router.delete("/:id", userController.deleteUser);

module.exports = router;