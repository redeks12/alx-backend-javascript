const expect = require("chai").expect;
const request = require("request");
const { describe, it } = require("mocha");

describe("testing api request", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };
  it("should have the correct status code", () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("should return a string", () => {
    request(options, (err, res, body) => {
      expect(body).to.be.a("string");
      done();
    });
  });
  it("should have correct length", () => {
    request(options, (err, res, body) => {
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
  it("should return particular str", () => {
    request(options, (err, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });
});
