const assert = require("assert");
const vl = require("./1-calcul");

describe("checks sum", () => {
  it("should return rounded", () => {
    assert.equal(vl("SUM", 0.2, 1.1), 1);
    assert.equal(vl("SUM", 4, 10), 14);
    assert.equal(vl("SUM", 5.3, 3.6), 9);
  });
});
describe("checks subtract", () => {
  it("should return rounded", () => {
    assert.equal(vl("SUBTRACT", 2, 1.1), 1);
    assert.equal(vl("SUBTRACT", 10, 5), 5);
    assert.equal(vl("SUBTRACT", 5.6, 3.3), 3);
  });
});
describe("checks divide", () => {
  it("should return rounded", () => {
    assert.equal(vl("DIVIDE", 10, 2), 5);
    assert.equal(vl("DIVIDE", 10, 5), 2);
    assert.equal(vl("DIVIDE", 20.4, 4.0), 5);
    assert.equal(vl("DIVIDE", 20.6, 0), "Error");
  });
});
