const server = require("./server.js");

const jokes = require("../jokes/jokes-router.js");
const request = require("supertest");

describe("server.js", () => {
  describe("Get server", () => {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });
  });
});
