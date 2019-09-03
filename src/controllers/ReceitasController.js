const Receita = require("../models/Receita");
const Ingrediente = require("../models/Ingrediente");

class ReceitasController {
  async index(req, res) {
    const receitas = await Receita.find().populate("ingredientes");

    return res.send(receitas);
  }
  async show(req, res) {
    const receita = await Receita.findById(req.params.id).populate(
      "ingredientes"
    );

    return res.send(receita);
  }
  async store(req, res) {
    const receita = await Receita.create(req.body);

    return res.send(receita);
  }
  async update(req, res) {
    const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).populate("ingredientes");

    return res.send(receita);
  }
  async destroy(req, res) {
    await Receita.findByIdAndDelete(req.params.id);
    return res.send();
  }
}

module.exports = new ReceitasController();
