const vl = require("./5-payment");
const Utils = require("./utils");
const sinon = require("sinon");
const assert = require("assert");
let spy;
describe("Test Suit", () => {
  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });
  afterEach(() => {
    spy.restore();
  });
  it("sendPaymentRequestToAPI", () => {
    vl(100, 20);
    const logged = spy.getCall(0).args[0];
    assert.equal(logged, "The total is: 120");
    assert(spy.calledOnce);
  });
  it("sendPaymentRequestToAPI", () => {
    vl(10, 10);
    const logged = spy.getCall(0).args[0];
    assert.equal(logged, "The total is: 20");
    assert(spy.calledOnce);
  });
});
