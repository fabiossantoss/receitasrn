const express = require("express");

const routes = express.Router();

routes.use("/receitas", require("./receitas"));
routes.use("/ingredientes", require("./ingredientes"));
routes.use("/tests", require("./tests"));

module.exports = routes;
