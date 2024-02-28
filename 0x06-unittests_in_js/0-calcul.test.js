const assert = require("assert");
const vl = require("./0-calcul");

describe("checks return value", () => {
  it("should return rounded", () => {
    assert.equal(vl(0.2, 1.1), 1);
    assert.equal(vl(4, 10), 14);
    assert.equal(vl(5.3, 3.6), 9);
  });
});
