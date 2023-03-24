const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");

dotenv.config();

app.listen(1300, () => {
    console.log("App is now running")
})