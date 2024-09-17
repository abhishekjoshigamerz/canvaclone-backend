const request = require("supertest");
const app = require("../src/app");

describe("Root Route", () => {
  it("should return Hello for GET /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("Hello CanvaBackEnd Controller");
  });
});
