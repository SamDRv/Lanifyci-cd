const request = require("supertest");
const app = require("../app");

describe('GET /', function () {
    it('should respond with Hello World', function (done) {
        request(app).get("/").expect('Hello World', done);
    })
})