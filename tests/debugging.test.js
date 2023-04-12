const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("debugging", () => {
  xit("debug 1", async () => {
    const { status, body } = await request(app).get("/hello").send();

    expect(status).to.equal(200);
    expect(body).to.equal("Hello World!");
  });

  it("debug 2", async () => {
    const { status } = await request(app).delete("/goodbye").send();

    expect(status).to.equal(204);
  });
});
