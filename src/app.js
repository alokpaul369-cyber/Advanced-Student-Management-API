const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const { sendSuccess } = require("./views/responseView");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  sendSuccess(res, 200, { message: "Student Management API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

module.exports = app;
