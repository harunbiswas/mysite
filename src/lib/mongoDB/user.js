const mongoose = require("mongoose");

// Define the schema for the model
const userSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
  },
  { timestamps: true }
);

// Create the model
let User;
try {
  User = mongoose.model("User");
} catch (e) {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
