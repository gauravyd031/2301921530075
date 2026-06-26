require("dotenv").config();

const Log = require("./index");

(async () => {
  try {
    const res = await Log(
      "backend",
      "info",
      "service",
      "Logging middleware working successfully"
    );

    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
})();