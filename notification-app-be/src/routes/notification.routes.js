const express = require("express");

const router = express.Router();

const {
  getAllNotifications,
} = require("../controllers/notification.controller");

router.get("/", getAllNotifications);

module.exports = router;