const express = require("express");
const router = express.Router();
const { genreateShortId } = require("../controllers/url");

router.post("/", genreateShortId);

module.exports = router;