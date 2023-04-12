const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("debugging", () => {
  xit("debug 1", async () => {
    const { status, body } = await request(app).get("/hello").send();

    expect(status).to.equal(200);
    expect(body).to.equal("Hello World!");
  });

  xit("debug 2", async () => {
    const { status } = await request(app).delete("/goodbye").send();

    expect(status).to.equal(204);
  });

  xit("debug 3", async () => {
    const { status, body } = await request(app)
      .post("/pokemon")
      .send({ pokemon: "Pikachu" });

    expect(status).to.equal(201);
    expect(body).to.equal("Pikachu");
  });

  it("debug 4", async () => {
    const { status, body } = await request(app).get("/pokemon").send();

    expect(status).to.equal(200);
    expect(body).to.equal("Catch them all!");
  });
});
