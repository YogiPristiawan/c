const moment = require("moment")

function startDay() {
  return moment().startOf("day").format()
}

module.exports = {
  startDay
}
