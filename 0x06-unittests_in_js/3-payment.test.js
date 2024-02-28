const sinon = require("sinon");
const vl = require("./3-payment");
const Utils = require("./utils");
const { describe, it } = require("mocha");
const assert = require("assert");

const spy = sinon.spy(Utils, "calculateNumber");
describe("check if function was called", () => {
  it("should check if it used rounded", () => {
    vl(20, 39);
    assert.ok(spy.calledOnce);
  });
  it("should check if it used rounded", () => {
    vl(20, 39);
    vl(2, 0);
    vl(1.7, 2);
    assert.ok(spy.called);
  });
});
