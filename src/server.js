const express = require("express");
const mongoose = require("mongoose");

const app = express();
const config = require("./config/app");

app.use(express.json());

mongoose.connect(config.database_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use("/", require("./routes/"));

app.listen(process.env.PORT || 3000);
