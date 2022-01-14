const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { registerValidation, loginValidation } = require("../validation");

// -------------------------------- INSCRIPTIONS --------------------------------
router.post("/register", async (req, res) => {
  // --------------------------------Vérification et validation de la donnée avant de la traité--------------------------------
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // --------------------------------Vérification si l'utilisateur est déjà dans la base de donnée--------------------------------
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send("Cette adresse email existe déjà !");

  //--------------------------------Cryptage du mot de passe avant de l'enregistrez dans la base de donnée--------------------------------
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // --------------------------------Création d'un nouvelle utilisateur--------------------------------
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//-------------------------------- LOGIN --------------------------------
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // --------------------------------Vérification si l'utilisateur existe dans la base de donnée--------------------------------
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Adresse email incorrect !");
  // --------------------------------Vérification du mot de passe--------------------------------
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Mot de passe incorrect !");

  //Création et assignation d'un token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("ALBERT", { token: token });
  res.header("auth-token", token).send({ token: token });
  //res.json({ _id: user._id });
});

module.exports = router;
