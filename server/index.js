// Importation des modules et librairies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
// Import des Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connexion à la BDD
mongoose.connect(`${process.env.DB_CONNECT}`, () => {
  console.log("Connecté à la base de donnée !");
});

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5050, () => console.log("Le serveur est en route sur le port 5050"));
