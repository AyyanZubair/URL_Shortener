const express = require("express");
const router = express.Router();
const { handleSignUp, handleLogIn } = require("../controllers/users");
const { restrictedToLoggedIn } = require("../middlewares/auth.js")

router.post("/", handleSignUp);

router.post("/login", restrictedToLoggedIn, handleLogIn);

module.exports = router;

