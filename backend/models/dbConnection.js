// backend/models/dbConnection.js
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("mongodb is conected...");
  })
  .catch((err) => {
    console.log('error while mongodb connection ',err);
  });
