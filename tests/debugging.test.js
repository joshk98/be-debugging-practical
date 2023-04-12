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

  xit("debug 3(a)", async () => {
    const { status, body } = await request(app)
      .post("/pokemon")
      .send({ pokemon: "Pikachu" });

    expect(status).to.equal(201);
    expect(body).to.equal("Pikachu");
  });

  xit("debug 3(b)", async () => {
    const { status, body } = await request(app)
      .post("/pokemon")
      .send({ pokemon: "Squirtle" });

    expect(status).to.equal(201);
    expect(body).to.equal("Squirtle");
  });

  xit("debug 4", async () => {
    const { status, body } = await request(app).get("/pokemon").send();

    expect(status).to.equal(200);
    expect(body).to.equal("Catch them all!");
  });

  xit("debug 5", async () => {
    const { status } = await request(app).delete("/pokemon").send();

    expect(status).to.equal(204);
  });

  xit("debug 6", async () => {
    const { status, body } = await request(app)
      .patch("/greeting/Bilbo/Baggins")
      .send({ age: 111});

    expect(status).to.equal(200);
    expect(body).to.equal("Happy 111th birthday, Bilbo Baggins!");
  });
});
