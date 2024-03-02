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
    url: "http://localhost:7865/cart/15",
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
  });
  it("should return a string", () => {
    request(options, (err, res, body) => {
      expect(body).to.contain(`Payment methods for cart 15`);
      done();
    });
  });
  it("should have wrong status code", () => {
    request(options2, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Test available_payments", () => {
  const options = {
    url: "http://localhost:7865/available_payments",
    method: "GET",
  };
  it("should return the right status code", () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("should return an object", () => {
    request(options, (err, res, body) => {
      expect(body).to.be.an("object");
      expect(body).to.contain("payment_methods");
      done();
    });
  });
});

describe("Test login", () => {
  const options = {
    url: "http://localhost:7865/login",
    method: "POST",
    body: { userName: "nandom" },
  };

  it("should have right status code", () => {
    request(options, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it("should return the corect string", () => {
    request(options, (err, response, body) => {
      expect(body).to.be.a("string");
      expect(body).to.contain("Welcome nandom");
    });
  });
});
