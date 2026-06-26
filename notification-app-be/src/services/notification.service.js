const api = require("../config/axios");
const Log = require("../utils/logger");

const getNotifications = async () => {
  await Log(
    "backend",
    "info",
    "service",
    "Fetching notifications"
  );

  const response = await api.get("/notifications");

  return response.data;
};

module.exports = {
  getNotifications,
};