const request = require('supertest');
require('jest-sorted');
const app = require('../app');
const db = require('../db/connection');

/*
const seed = require('../db/seeds/seed');
const data = require('../db/data/test-data');
beforeEach(() => {
    return seed(data);
 });
 */

 
 afterAll(() => {
    return  db.connection.close();
 })


 describe ('GET /api/users/:username',() => {
    test('200:should return a single user by username',() => {
    return request(app)
    .get('/api/users/tomli2004')
    .expect(200)
    .then (({body}) => {
        const {user} = body;
        expect(user).toHaveProperty("username", expect.any(String));
        expect(user).toHaveProperty("firstname", expect.any(String));
        expect(user).toHaveProperty("lastname", expect.any(String));
        expect(user.username).toEqual("tomli2004");
  
    })
  })

  test("404:should return  an error respond when username is valid,but does not exist", () => {
    return request(app)
        .get('/api/users/tomli500')
        .expect(404)
        .then(( {body} ) => {
            expect(body.msg).toBe("Not found");
        });
   });

})
