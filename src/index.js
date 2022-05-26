const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// morgan es un middleware, registra las request
const morgan = require("morgan");

// Cors
app.use(cors());

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(require("./routes/index"));

// Iniciando el servidor
app.listen(3001, () => {
  console.log("server ...");
});
