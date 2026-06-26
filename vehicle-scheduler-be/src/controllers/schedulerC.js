const {
  generateSchedule,
} = require("../services/service");

const getScheduler = async (req, res) => {
  try {
    const schedule = await generateSchedule();

    res.status(200).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getScheduler,
};