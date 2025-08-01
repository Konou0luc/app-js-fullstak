const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000

// connexion à la DB
connectDB();

const app = express();

// Midleware qui permet de traiter les données de la request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/post", require("./routes/post.routes"));

// lancer le serveur
app.use(errorHandler);
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
