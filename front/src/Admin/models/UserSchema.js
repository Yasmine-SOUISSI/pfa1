const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  phoneNumber: { type: String, required: true },
  department: { type: String, required: true },
  privilege: { type: Number },
  type: { type: String }
});


module.exports = User = model("user", userSchema);