require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const team = require("./schema.js");

mongoose.connect(process.env.Connection_String);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(express.json());

app.get("/teams", async (req, res) => {
  try {
    const data = await team.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000);
