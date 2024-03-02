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
    json: true,
    method: "GET",
  };
  it("should return the right status code", () => {
    request(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
      done();
    });
  });
  it("should return an object", () => {
    request(options, (err, res, body) => {
      //   expect(body).to.be.an("object");
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe("Test login", () => {
  const options = {
    url: "http://localhost:7865/login",
    method: "POST",
    json: true,
    body: { userName: "nandom" },
  };
  const options2 = {
    url: "http://localhost:7865/login",
    method: "POST",
    json: true,
    body: { use: "nandom" },
  };

  it("should have right status code", (done) => {
    request(options, (err, response, body) => {
      if (err) {
        expect(response.statusCode).to.not.equal(200);
      } else {
        expect(response.statusCode).to.equal(200);
      }
      done();
    });
  });

  it("should return the corect string", (done) => {
    request(options, (err, response, body) => {
      expect(body).to.contain("Welcome nandom");
      done();
    });
  });

  it("get 404 error", (done) => {
    request(options2, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
