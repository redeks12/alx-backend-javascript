const vl = require("./utils");

const sendPaymentRequestToApi = function (totalAmount, totalShipping) {
  const completeAmount = vl.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${completeAmount}`);
};

module.exports = sendPaymentRequestToApi;
