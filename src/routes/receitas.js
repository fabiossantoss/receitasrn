const express = require("express");
const ReceitasController = require("../controllers/ReceitasController");

const routes = express.Router();

routes.get("/", ReceitasController.index);
routes.get("/:id", ReceitasController.show);
routes.post("/", ReceitasController.store);
routes.put("/:id", ReceitasController.update);
routes.delete("/:id", ReceitasController.destroy);

module.exports = routes;
