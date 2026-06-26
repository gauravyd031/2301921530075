const api = require("./config/axios");
const validate = require("./utils/validate");

async function Log(stack, level, pkg, message) {
  try {
    validate(stack, level, pkg, message);

    const response = await api.post("/logs", {
      stack,
      level,
      package: pkg,
      message,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Logging API Error"
      );
    }

    throw error;
  }
}

module.exports = Log;