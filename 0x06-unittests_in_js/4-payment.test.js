const sinon = require("sinon");
const vl = require("./4-payment");
const Utils = require("./utils");
const { describe, it } = require("mocha");
const assert = require("assert");

const stub = sinon.stub(Utils, "calculateNumber");
stub.withArgs(10, 20);
stub.onFirstCall().returns(100);
stub.onSecondCall().returns(59);
describe("check if function was called", () => {
  it("should check if it used rounded", () => {
    vl(20, 39);
    assert.ok(stub.calledOnce);
  });
  it("should check if it was called rounded", () => {
    vl(20, 39);

    vl(2, 0);
    assert.ok(stub.calledThrice);
  });
});
