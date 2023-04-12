const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("debugging", () => {
  it("debug 1", async () => {
    const { status, body } = await request(app).get("/hello").send();

    expect(status).to.equal(200);
    expect(body).to.equal("Hello World!");
  });
});
