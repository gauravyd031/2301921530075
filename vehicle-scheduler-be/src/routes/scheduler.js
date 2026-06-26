const express = require("express");
const router = express.Router();

const {
  getScheduler,
} = require("../controllers/schedulerC");

router.get("/", getScheduler);

module.exports = router;