const axios = require("axios");
const assert = require("assert");
const { expect } = require("chai");

describe("List User - GET", () => {
  it("should return status 200 and list of users", async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");

    expect(response.status).to.equal(200);
    assert.strictEqual(response.status, 200, "Status code harus 200");
    expect(response.data).to.have.property("data");
    expect(response.data.data).to.be.an("array");
  });
});
