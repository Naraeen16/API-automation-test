const axios = require("axios");
const assert = require("assert");
const { expect } = require("chai");

describe("Delete - DELETE", () => {
  it("should delete user and return 204", async () => {
    const headers = { "x-api-key": "reqres-free-v1" };
    const start = Date.now();

    const response = await axios.delete("https://reqres.in/api/users/2", {
      headers,
    });
    const duration = Date.now() - start;

    expect(response.status).to.equal(204);
    assert.strictEqual(response.status, 204, "Status code harus 204");
    expect(duration).to.be.below(500);
  });
});
