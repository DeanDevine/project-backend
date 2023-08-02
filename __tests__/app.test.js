const request = require("supertest");
const app = require("../server");
const seed = require("../seed.js");
const mongoose = require("../connection.js");

const testData = require("../data/test/index.js");

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  mongoose.connection.close();
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

describe("POST /api/users", () => {
  test("201:should return a new user", () => {
    const new_user = {
      username: "test_user",
      password: "test_password",
      first_name: "test",
      last_name: "user",
    };
    return request(app)
      .post("/api/users")
      .send(new_user)
      .expect(201)
      .then(({ body }) => {
        const { user } = body;
        expect(user.username).toEqual("test_user");
        expect(user.password).toEqual("test_password");
        expect(user.first_name).toEqual("test");
        expect(user.last_name).toEqual("user");
        expect(user.coins).toEqual(100);
      });
  });
});

describe("PATCH /api/users/:username", () => {
  test("200:should update a user by username and respond with that updated user", () => {
    const updatedUser = {
      first_name: "test_new",
      last_name: "user_new",
    };
    return request(app)
      .patch("/api/users/test_user3")
      .send(updatedUser)
      .expect(200)
      .then(({ body }) => {
        const { user } = body;
        expect(user.username).toEqual("test_user3");
        expect(user.password).toEqual("password3");
        expect(user.first_name).toEqual("test_new");
        expect(user.last_name).toEqual("user_new");
        expect(user.coins).toEqual(100);
      });
  });
});

describe("DELETE /api/users/:username", () => {
  test("status:204, deletes user and responds with no content", () => {
    return request(app)
      .delete("/api/users/test_user5")
      .expect(204)
      .then(({ res }) => {
        const { statusMessage } = res;
        expect(statusMessage).toBe("No Content");
      });
  });
});

describe("GET /api/useritems", () => {
  test("200: returns all user items in useritems collection", () => {
    return request(app)
      .get("/api/useritems")
      .expect(200)
      .then(({ body }) => {
        const { items } = body;
        expect(items).toHaveLength(25);
        items.forEach((item) => {
          expect(item).toHaveProperty("item_name", expect.any(String));
          expect(item).toHaveProperty("description", expect.any(String));
          expect(item).toHaveProperty("price", expect.any(Number));
          expect(item).toHaveProperty("quantity", expect.any(Number));
          expect(item).toHaveProperty("username", expect.any(String));
        });
      });
  });
});

describe("GET /api/useritems/users/:username", () => {
  test("200: returns all user items for user", () => {
    return request(app)
      .get("/api/useritems/users/test_user1")
      .expect(200)
      .then(({ body }) => {
        const { items } = body;
        expect(items).toHaveLength(5);
        items.forEach((item) => {
          expect(item).toHaveProperty("item_name", expect.any(String));
          expect(item).toHaveProperty("description", expect.any(String));
          expect(item).toHaveProperty("price", expect.any(Number));
          expect(item).toHaveProperty("quantity", expect.any(Number));
          expect(item.username).toEqual("test_user1");
        });
      });
  });
});

// describe("GET /api/useritems/:id", () => {
//   test("200: return user item specified by id", () => {
//     return request(app)
//       .get("/api/useritems/64c980efbc180b1743260213")
//       .expect(200)
//       .then(({ body }) => {
//         const { item } = body;
//         expect(item._id).toEqual("64c980efbc180b1743260213");
//         expect(item.item_name).toEqual("ITEM 1");
//         expect(item.description).toEqual("item description 1");
//         expect(item.price).toEqual(0);
//         expect(item.quantity).toEqual(0);
//       });
//   });
// });

describe("POST /api/useritems", () => {
  test("201: should create a new user item and return that item", () => {
    const newItem = {
      item_name: "new_test_item",
      description: "test_description",
      price: 10,
      quantity: 20,
      username: "test_user",
    };
    return request(app)
      .post("/api/useritems")
      .send(newItem)
      .expect(201)
      .then(({ body }) => {
        const { item } = body;
        expect(item.item_name).toEqual("new_test_item");
        expect(item.description).toEqual("test_description");
        expect(item.price).toBe(10);
        expect(item.quantity).toBe(20);
        expect(item.username).toEqual("test_user");
      });
  });
});

// describe("PATCH /api/usersitems/:id", () => {
//   test("201:should update a user item and return that updated item", () => {
//     const updatedItem = {
//       item_name: "updated_item",
//       description: "updated_description",
//       price: 5,
//       quantity: 19,
//     };
//     return request(app)
//       .patch("/api/useritems/123")
//       .send(updatedItem)
//       .expect(200)
//       .then(({ body }) => {
//         const { item } = body;
//         expect(item._id).toEqual("123");
//         expect(item.item_name).toEqual("updated_item");
//         expect(item.description).toEqual("updated_description");
//         expect(item.price).toBe(5);
//         expect(item.quantity).toBe(19);
//       });
//   });
// });

// describe("DELETE /api/useritems/:id", () => {
//   test("status:204, deletes user item and responds with no content", () => {
//     return request(app)
//       .delete("/api/useritems/123")
//       .expect(204)
//       .then(({ res }) => {
//         const { statusMessage } = res;
//         expect(statusMessage).toBe("No Content");
//       });
//   });
// });
