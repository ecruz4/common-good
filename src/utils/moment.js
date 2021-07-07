const moment = require("moment");

const expiryThreshold = moment().subtract("day", 60).valueOf(); // returns as milliseconds

const convertMsToDays = (ms) => {
  const days = Math.floor(ms / (86400 * 1000));
  return days;
};

const daysToExpiry = (createDate) => convertMsToDays(moment() - createDate);

module.exports = { expiryThreshold, convertMsToDays, daysToExpiry };
