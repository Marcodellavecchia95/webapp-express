const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController");

router.get("/", movieController.index);
router.get("/:id", movieController.show);
router.post("/:id", movieController.store);

module.exports = router;
