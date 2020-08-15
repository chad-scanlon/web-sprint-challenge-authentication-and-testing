require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./config/database/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./config/database/migrations",
    },
    seeds: {
      directory: "./config/database/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./config/database/auth.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "../config/database/migrations",
    },
    seeds: {
      directory: "../config/database/seeds",
    },
  },
  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./config/database/migrations",
    },
    seeds: {
      directory: "./config/database/seeds",
    },
  },
};
