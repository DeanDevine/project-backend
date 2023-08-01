const request = require("supertest");
const app = require("../server");

const mongoose = require("mongoose");



afterAll(() => {
  mongoose.connection.close();
});

describe("GET /api/users/:username", () => {
  test.only("200:should return a single user by username", () => {
    return request(app)
      .get("/api/users/Dean")
      .expect(200)
      .then(({ body }) => {
        const {user} = body
        expect(user).toHaveProperty("password", expect.any(String));
        expect(user.username).toEqual("Dean");
      });
  });

  test("404:should return an error respond when username is valid, but does not exist", () => {
    return request(app)
      .get("/api/users/username_which_does_not_exist")
      .expect(404)
      .then(({ body }) => {
        expect(body.message).toBe(
          "Error: User username_which_does_not_exist not found"
        );
      });
  });
});

describe("PATCH /api/users/:username", () => {
  test("200:should update a user by username and respond with that updated user", () => {
    const updatedUser = {
      first_name: "Dean",
      last_name: "Devine",
    };
    return request(app)
      .patch("/api/users/Dean")
      .send(updatedUser)
      .expect(200)
      .then(({ body }) => {
        const { user } = body;
        expect(user.username).toEqual("Dean");
        expect(user.first_name).toEqual("Dean");
        expect(user.last_name).toEqual("Devine");
      });
  });
});
