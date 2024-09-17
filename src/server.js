require("dotenv").config();
const express = require("express");
const app = require("./app");
const connectDB = require("./config/database");
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
