jest.mock("mongoose");

const mongoose = require("mongoose");
const connectDB = require("../src/config/database");

describe("Database Connection", () => {
  beforeEach(() => {
    process.env.NODE_ENV = "test";
  });

  it("should connect to the database successfully", async () => {
    mongoose.connect.mockResolvedValue(true);

    const result = await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    expect(result).toBe(true);
  });

  it("should handle connection failure", async () => {
    mongoose.connect.mockRejectedValue(new Error("Connection failed"));

    const result = await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    expect(result).toBe(false);
  });
});
