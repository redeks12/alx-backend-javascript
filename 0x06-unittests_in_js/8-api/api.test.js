const expect = require("chai").expect;
const request = require("request");
const { describe, it } = require("mocha");
const port = 7865;
// const url = `http://localhost:${port}/`;
// const vl = require("./api");
describe("testing api request", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };
  it("should have the correct status code, headers and body", () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.a("string");
      expect(res.headers["content-length"]).to.equal("29");
      //   console.log(res);
      //   console.log(body);
      //   console.log(err);
      done();
    });
  });
});
