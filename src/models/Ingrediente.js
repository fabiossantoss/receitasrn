const mongoose = require("mongoose");
const Receita = require("./Receita");

const Ingrediente = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true
    },
    measure: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

module.exports = mongoose.model("Ingrediente", Ingrediente);
