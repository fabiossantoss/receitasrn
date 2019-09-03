const Ingrediente = require("../models/Ingrediente");
const Receita = require("../models/Receita");

class IngredientesController {
  async index(req, res) {
    const ingredientes = await Ingrediente.find();

    return res.send(ingredientes);
  }
  async show(req, res) {
    const ingrediente = await Ingrediente.findById(req.params.id);

    return res.send(ingrediente);
  }
  async store(req, res) {
    const receita = await Receita.findById(req.params.id_receita);
    var ingrediente = null;
    if (receita) {
      ingrediente = await Ingrediente.create(req.body);

      if (ingrediente) {
        receita.ingredientes.push(ingrediente);
        await receita.save();
        await receita.populate("Ingredientes");
      }
    } else {
      return res.send("receita não existe");
    }

    return res.send(ingrediente);
  }
  async update(req, res) {
    const ingrediente = await Ingrediente.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.send(ingrediente);
  }
  async destroy(req, res) {
    const receita = await Receita.findById(req.body.id_receita);

    await receita.ingredientes.remove(req.params.id);
    await receita.save();

    const ingrediente = await Ingrediente.findById(req.params.id);
    await ingrediente.remove();

    return res.send(receita);
  }
}

module.exports = new IngredientesController();
