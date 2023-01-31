const mongoose = require("mongoose");


const EventSchema = mongoose.Schema({
  name: String,
  eventLink: String,
  date:Date,
  cover: String,
});

module.exports = mongoose.model("Event", EventSchema);