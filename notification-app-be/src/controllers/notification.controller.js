const {
  getNotifications,
} = require("../services/notification.service");

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await getNotifications();

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllNotifications,
};