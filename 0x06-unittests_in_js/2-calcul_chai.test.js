const vl = require("./2-calcul_chai");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("main checks", () => {
  describe("checks sum", () => {
    it("should return rounded", () => {
      expect(vl("SUM", 0.2, 1.1)).to.equal(1);
      expect(vl("SUM", 4, 10)).to.equal(14);
      expect(vl("SUM", 5.3, 3.6)).to.equal(9);
    });
  });
  describe("checks subtract", () => {
    it("should return rounded", () => {
      expect(vl("SUBTRACT", 2, 1.1)).to.equal(1);
      expect(vl("SUBTRACT", 10, 5)).to.equal(5);
      expect(vl("SUBTRACT", 5.6, 3.3)).to.equal(3);
    });
  });
  describe("checks divide", () => {
    it("should return rounded", () => {
      expect(vl("DIVIDE", 10, 2)).to.equal(5);
      expect(vl("DIVIDE", 10, 5)).to.equal(2);
      expect(vl("DIVIDE", 20.4), 5).to.equal(5);
      expect(vl("DIVIDE", 20.6, 0)).to.equal("Error");
    });
  });
});
