const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = 3001;

const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

app.listen(1300, () => {
    console.log("App is now running")
})

mongoose.connect('mongodb://127.0.0.1:27017/myapp'); {
    console.log ("connected to MondoDB")
};


// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(routes);



// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
