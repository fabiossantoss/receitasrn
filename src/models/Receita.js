const mongoose = require("mongoose");

const Receita = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      uppercase: true
    },
    tempoPreparo: {
      type: Number,
      required: true
    },
    ingredientes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingrediente"
      }
    ]
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

module.exports = mongoose.model("Receita", Receita);
