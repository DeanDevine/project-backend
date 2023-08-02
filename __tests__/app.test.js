const request = require("supertest");
const app = require("../server");

//const mongoose = require("mongoose");

const mongoose = require("../connection.js");
const seed = require("../seed.js");

const data = require("../data/test/index.js"); //Import the test data

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return mongoose.connection.close();
});

describe("POST /api/users", () => {
  test("201:should return a new user", () => {
    const new_user = {
      username: "username_test",
      password: "abc123",
      first_name: "test",
      last_name: "user",
    };
    return request(app)
      .post("/api/users")
      .send(new_user)
      .expect(201)
      .then(({ body }) => {
        const { user } = body;
        expect(user.username).toEqual("username_test");
        expect(user.password).toEqual("abc123");
        expect(user.first_name).toEqual("test");
        expect(user.last_name).toEqual("user");
        expect(user.coins).toEqual(100);
      });
  });
});

describe("PATCH /api/users/:username", () => {
  test("200:should update a user by username and respond with that updated user", () => {
    const updatedUser = {
      first_name: "test",
      last_name: "user",
    };
    return request(app)
      .patch("/api/users/test_user1")
      .send(updatedUser)
      .expect(200)
      .then(({ body }) => {
        const { user } = body;
        expect(user.username).toEqual("test_user1");
        expect(user.password).toEqual("password1");
        expect(user.first_name).toEqual("test");
        expect(user.last_name).toEqual("user");
        expect(user.coins).toEqual(100);
      });
  });
});

describe("GET /api/users", () => {
  test("200:should return all users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        const { users } = body;
        expect(users).toHaveLength(5);
        users.forEach((user) => {
          expect(user).toHaveProperty("username", expect.any(String));
          expect(user).toHaveProperty("password", expect.any(String));
          expect(user).toHaveProperty("first_name", expect.any(String));
          expect(user).toHaveProperty("last_name", expect.any(String));
          expect(user).toHaveProperty("coins", expect.any(Number));
        });
      });
  });
});

describe("GET /api/users/:username", () => {
  test("200:should return a single user by username", () => {
    return request(app)
      .get("/api/users/test_user1")
      .expect(200)
      .then(({ body }) => {
        const { user } = body;
        expect(user).toHaveProperty("password", expect.any(String));
        expect(user.username).toEqual("test_user1");
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
