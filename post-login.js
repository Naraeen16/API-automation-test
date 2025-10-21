const axios = require("axios");
const assert = require("assert");
const { expect } = require("chai");

describe("Login - POST", () => {
  it("should return 200 and token when login success", async () => {
    const headers = { "x-api-key": "reqres-free-v1" };
    const body = { email: "eve.holt@reqres.in", password: "cityslicka" };

    const response = await axios.post("https://reqres.in/api/login", body, {
      headers,
    });

    expect(response.status).to.equal(200);
    assert.strictEqual(response.status, 200, "Status code harus 200");
    expect(response.data).to.have.property("token");
  });
});
