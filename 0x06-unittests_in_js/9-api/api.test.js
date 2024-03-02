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
      expect(body).to.be.a("string");
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
});

describe("Test Cart", () => {
  const options = {
    url: "http://localhost:7865/cart/12",
    method: "GET",
  };
  const options2 = {
    url: "http://localhost:7865/cart/ama",
    method: "GET",
  };
  it("should have correct statuscodes", () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
    request(options2, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
