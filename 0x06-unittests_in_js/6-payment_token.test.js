const vl = require("./6-payment_token");
const Utils = require("./utils");
const sinon = require("sinon");
const assert = require("assert");
const mocha = require("mocha");
// const chai = require("chai");

describe("getPaymentTokenFromAPI", () => {
  it("test promise", (done) => {
    vl(true).then((x) => {
      assert.equal(x["data"], "Successful response from the API");
      done();
    });
  });
});
