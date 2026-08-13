const express = require("express");

const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

module.exports = app;