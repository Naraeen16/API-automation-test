const axios = require("axios");
const assert = require("assert");
const { expect } = require("chai");

describe("Update - PATCH", () => {
  it("should update user info and return 200", async () => {
    const headers = { "x-api-key": "reqres-free-v1" };
    const body = { name: "Rizki Nur Fathoni", job: "QA Engineering" };

    const start = Date.now();
    const response = await axios.patch("https://reqres.in/api/users/2", body, {
      headers,
    });
    const duration = Date.now() - start;

    expect(response.status).to.equal(200);
    assert.strictEqual(response.status, 200, "Status code harus 200");
    expect(duration).to.be.below(500);
  });
});
