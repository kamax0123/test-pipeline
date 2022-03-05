const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("App working correctly", (done) => {
        request(app).get("/").expect("App Working", done);
    })
});
