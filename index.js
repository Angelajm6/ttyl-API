const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = 3001;

const mongoose = require ("mongoose");
const dotenv = require ("dotenv");

dotenv.config();

app.listen(1300, () => {
    console.log("App is now running")
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
