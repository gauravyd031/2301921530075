const {
  STACKS,
  LEVELS,
  PACKAGES,
} = require("../constants/validation");

function validate(stack, level, pkg, message) {
  if (!STACKS.includes(stack))
    throw new Error(`Invalid stack: ${stack}`);

  if (!LEVELS.includes(level))
    throw new Error(`Invalid level: ${level}`);

  if (!PACKAGES.includes(pkg))
    throw new Error(`Invalid package: ${pkg}`);

  if (!message || typeof message !== "string")
    throw new Error("Message must be a non-empty string");
}

module.exports = validate;