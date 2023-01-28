const { Router } = require("express");

const usersRouter = require("./users.routes");

const userRoutes = Router();

userRoutes.use("/users", usersRouter);

module.exports = userRoutes;
