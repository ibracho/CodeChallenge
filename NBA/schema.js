const mongoose = require("mongoose");

const group = new mongoose.Schema({
  name: {
    type: String,
  },
  wins: {
    type: String,
  },
  loses: {
    type: String,
  },
  imagePath: {
    type: String,
  },
});

const team = mongoose.model("Teams", group);
module.exports = team;
