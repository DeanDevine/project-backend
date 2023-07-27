const request = require("supertest");
const app = require("../server");

const mongoose = require("mongoose");

/*
const seed = require('../db/seeds/seed');
const data = require('../db/data/test-data');
beforeEach(() => {
    return seed(data);
 });
 */

afterAll(() => {
  mongoose.connection.close();
});

describe("GET /api/users/:id", () => {
  test("200:should return a single user by id", () => {
    return request(app)
      .get("/api/users/64c227233e076b66413fe7dc")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty("password", expect.any(String));
        expect(body.username).toEqual("Dean");
      });
  });

  test.only("404:should return  an error respond when user id is valid, but does not exist", () => {
    return request(app)
      .get("/api/users/64c2489aab8b5fd77884acc1")
      .expect(404) // SHOULD BE 404
      .then(({ body }) => {
        expect(body.message).toBe("User 64c2489aab8b5fd77884acc1 not found");
      });
  });
});
