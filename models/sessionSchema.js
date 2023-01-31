const mongoose = require("mongoose");


const SessionSchema = mongoose.Schema({
  name: String,
  sessionLink: String,
  department: String,
  cover: String,
});

module.exports = mongoose.model("Session", SessionSchema);
