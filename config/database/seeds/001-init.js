exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  return knex("users")
    .insert({
      username: "dwigt", // will get id 1
      password: "beets",
    })
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
