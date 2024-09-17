const moment = require("moment")

function startDay() {
  return `ini startDay(): ${moment().startOf("day").format()}`
}

module.exports = {
  startDay
}
