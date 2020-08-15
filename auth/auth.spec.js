const db = require("../config/database/dbConfig");
const Auth = require("../users/users-model.js");
const request = require("supertest");

describe("authorization", () => {
  describe("add", () => {
    it("should add a user", async () => {
      //   await Auth.add({ username: "tobyfl", password: "ilovehr" });
      //   await Auth.add({ username: "robcalifornia", password: "lizardking" });
      const users = await db("users");
      //   expect(users).toHaveLength(7);
    });
    // it("should return what was inserted", async () => {
    //   let user = await Auth.add({
    //     username: "gabe",
    //     password: "gabewad",
    //   });
    //   expect(user.username).toBe("gabe");
    // });
  });
  describe("get /", () => {
    it("should get the array of office chars", async () => {
      let charArray = await Auth.find();
      expect(charArray).toHaveLength(8);
    });
  });
});

// describe("Login", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(Auth).post("/login");
//     expect(res.status).toBe(200);
//   });
// });
