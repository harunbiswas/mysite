const mongoose = require("mongoose");

// Define the schema for the model
const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
