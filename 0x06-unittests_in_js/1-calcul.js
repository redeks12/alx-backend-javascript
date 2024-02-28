const calculateNumber = function (type, a, b) {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  } else if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  }
  if (type === "DIVIDE") {
    const bv = Math.round(b);
    const av = Math.round(a);
    if (bv === 0) {
      return "Error";
    }
    return av / bv;
  }
};

module.exports = calculateNumber;
