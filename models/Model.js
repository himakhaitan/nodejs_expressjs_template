// Imports
const { Schema, model } = require("mongoose");

// Creating a Schema
const modelSchema = new Schema({
  testName: {
    type: String,
    required: true,
  },
  testEmail: {
    type: String,
    required: true,
  }
});

// Creating Data Model
const Model = model("Model", modelSchema);

module.exports = Model;
