require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const linksRouter = require("./routes/links");
const socialRouter = require("./routes/socialMedia");
const mongoose = require("mongoose");
const dbConnection = require("./config/DbConn");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(linksRouter);
app.use(socialRouter);

app.all("*", notFound);
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to db");
  app.listen(PORT, () => {
    console.log("Running");
  });
});
