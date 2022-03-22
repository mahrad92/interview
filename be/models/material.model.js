const { Schema, model } = require("mongoose");

const materialSchema = new Schema({
  title: String,
  description: String,
});

module.exports = model("Material", materialSchema);
