// From date-fns package
const format = require("date-fns/format")
const addHours = require("date-fns/addHours")
const addDays = require("date-fns/addDays")

module.exports = {
  current_date: () => {
    return format(new Date(), "MM/dd/yyyy")
  },
  session_time: () => {
    return `${format(new Date(2023,0,10,9,15), "h:mmaaa")} - ${format(addHours(new Date(2023,0,10,9,15), 1), "h:mmaaa")}`
  },
  session_date: () => {
    return `${format(new Date(2023,0,10,9,15), "MM/dd/yyyy")}`
  },
  max_date: () => {
    return format(addDays(new Date(), 31), "MM/dd/yyyy")
  }
};
