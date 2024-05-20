const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { makeConnection } = require("./connections/dbConnection");
const mongoose = require("mongoose");
require("./services/travelServices");
const PORT = process.env.PORT || 3000;
const destinationRoutes = require("./routes/routes");
makeConnection();

app.use(bodyParser.json());
bodyParser.json();
app.use(express.json());
app.use("/destinations", destinationRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Assignment-14- Travelite APIs");
});
app.listen(PORT, () => {
  console.log(`Server is running for travelite on port ${PORT}`);
});
