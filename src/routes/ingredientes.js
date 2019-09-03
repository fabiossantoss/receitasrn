const express = require("express");
const IngredientesController = require("../controllers/IngredientesController");

const routes = express.Router();

routes.get("/", IngredientesController.index);
routes.get("/:id", IngredientesController.show);
routes.post("/:id_receita", IngredientesController.store);
routes.put("/:id", IngredientesController.update);
routes.delete("/:id", IngredientesController.destroy);

module.exports = routes;
