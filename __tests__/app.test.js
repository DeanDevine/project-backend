const request = require("supertest");
const app = require("../server");

const mongoose = require("mongoose");


const seed = require('../db/seeds/seed');
const data = require('../db/data/test-data');
beforeEach(() => {
    return seed(data);
 });
 



afterAll(() => {
  mongoose.connection.close();
});

describe ('POST /api/users',() => {
  test ('201:should return a new user', () => {
      const new_user = {username:'username_test',password:"abc123",
                         first_name:'test',last_name:'user'};
      return request(app)
      .post('/api/users')
      .send(new_user)
      .expect(201)
      .then (({body}) => {
          const {user} = body;
          expect(user.username).toEqual("username_test");
          expect(user.password).toEqual("abc123");
          expect(user.first_name).toEqual("test");
          expect(user.last_name).toEqual("user");
          expect(user.coins).toEqual(100);
      })
  });
})

describe ('PATCH /api/users/:username',() => {
  test ('201:should return a updated user', () => {
      const updatedUser = {password:"cpass001"};
      return request(app)
      .patch('/api/users/username_test')
      .send(updatedUser)
      .expect(200)
      .then (({body}) => {
          const {user} = body;
          expect(user.username).toEqual("username_test");
          expect(user.password).toEqual("cpass001");
          expect(user.first_name).toEqual("test");
          expect(user.last_name).toEqual("user");
          expect(user.coins).toEqual(100);
      })
  });
})

describe ("GET /api/users", () => {
  test ("200:should return all users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        const {users} = body
        expect(users).toHaveLength(5);
        users.forEach(user => { 
            expect(user).toHaveProperty("username",expect.any(String));
            expect(user).toHaveProperty("password",expect.any(String));
            expect(user).toHaveProperty("first_name",expect.any(String));
            expect(user).toHaveProperty("last_name",expect.any(String));
            expect(user).toHaveProperty("coins",expect.any(Number));
        });
      });
  });
})

describe("GET /api/users/:username", () => {
  test ("200:should return a single user by username", () => {
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
