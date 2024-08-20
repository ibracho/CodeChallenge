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
});

const team = mongoose.model("teams", group);
module.exports = team;
