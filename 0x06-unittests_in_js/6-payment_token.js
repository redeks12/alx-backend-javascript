const getPaymentTokenFromAPI = function (success) {
  if (success) {
    return new Promise((res, rej) => {
      res({ data: "Successful response from the API" });
    });
  }
};
module.exports = getPaymentTokenFromAPI;
