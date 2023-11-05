const express = require("express");
const app = express();
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formaterDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const isLettre = /[a-zA-Z]/;

const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.status(200).json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === undefined || n2 === undefined) {
    return res.status(400).json([{ reponse: "Les nombres ne sont pas définis" }]);
  }

  if (n1 == null || n2 == null) {
    return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice2", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === undefined || n2 === undefined) {
    return res.status(400).json([{ reponse: "Les nombres ne sont pas définis" }]);
  }

  if (n1 == null || n2 == null) {
    return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = soustraction(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === undefined || n2 === undefined) {
    return res.status(400).json([{ reponse: "Les nombres ne sont pas définis" }]);
  }

  if (n1 == null || n2 == null) {
    return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = multiplication(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === undefined || n2 === undefined) {
    return res.status(400).json([{ reponse: "Les nombres ne sont pas définis" }]);
  }

  if (n1 == null || n2 == null) {
    return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = division(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice5", (req, res) => {
  const n1 = req.body.n1;

  if (n1 === undefined || n1 === null) {
    return res.status(400).json([{ reponse: "Le nombre n'est pas défini" }]);
  }

  if (isNaN(n1)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  if (n1 < 0) {
    return res.status(400).json([{ reponse: "Le nombre ne peut pas être négatif" }]);
  }

  let a = factorielle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
  const n1 = req.body.n1;

  if (n1 === undefined || n1 === null ) {
    return res.status(400).json([{ reponse: "Le nombre n'est pas défini" }]);
  }

  if (isNaN(n1)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = estPairOuImpair(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
  const n1 = req.body.n1;

  if (n1 === undefined || n1 === null) {
    return res.status(400).json([{ reponse: "Le nombre n'est pas défini" }]);
  }

  if (isNaN(n1)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = celsiusEnFahrenheit(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
  const n1 = req.body.n1;

  if (n1 === undefined || n1 === null) {
    return res.status(400).json([{ reponse: "Le nombre n'est pas défini" }]);
  }

  if (isNaN(n1)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = aireCercle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
  const n1 = req.body.n1;
 
  if (n1 === undefined || n1 === null) {
    return res.status(400).json([{ reponse: "Entrée incorecte" }]);
  }

  if (isLettre.test(n1) === false) {
    return res.status(400).json([{ reponse: "Lettre non valide" }]);
  }

  let a = estPalindrome(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice10", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 === null || n2 === null) {
    return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json([{ reponse: "Veuillez entrez des nombres" }]);
  }

  let a = pgcd(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice1", (req, res) => {
  let a = dateIlYADixAns();
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice2", (req, res) => {
  const date = req.body.date;

  if (date === undefined || date === null) {
    return res.status(400).json([{ reponse: "Aucune date trouvée" }]);
  }
  if (isNaN(new Date(date).getTime())) {
    return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  let a = formaterDate(date);

  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice3", (req, res) => {
  const date1 = req.body.date1;
  const date2 = req.body.date2;

  if (
    date1 === undefined ||
    date2 === undefined ||
    date1 === null ||
    date2 === null
  ) {
    return res.status(400).json([{ reponse: "Les dates ne sont pas définis" }]);
  }

  if (isNaN(new Date(date1).getTime()) || isNaN(new Date(date2).getTime())) {
    return res
      .status(400)
      .json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  if (new Date(date1).getTime() > new Date(date2).getTime()) {
    return res
      .status(400)
      .json([{ reponse: "La date 1 doit être inférieur à la date 2" }]);
  }

  let a = differenceEnJours(date1, date2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice4", (req, res) => {
  const date = req.body.date;
  const nbJours = req.body.nbJours;

  if (
    date === undefined ||
    nbJours === undefined ||
    date === null ||
    nbJours === null
  ) {
    return res.status(400).json([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  }

  if (isNaN(new Date(date).getTime()) || isNaN(nbJours)) {
    return res.status(400).json([
      { reponse: "Veuillez entrer une date et un nombre de jours valides" },
    ]);
  }

  let a = ajouterJours(date, nbJours);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice5", (req, res) => {
  const annee = req.body.annee;

  if (annee === undefined || annee === null) {
    return res.status(400).json([{ reponse: "Veuillez entrer une année valide" }]);
  }

  if (isNaN(new Date(annee).getTime())) {
    return res.status(400).json([{ reponse: "Veuillez entrer une année valide" }]);
  }

  let a = estAnneeBissextile(annee);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice6", (req, res) => {
  date = req.body.date;

  if (date === undefined || date === null) {
    return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  if (isNaN(new Date(date).getTime())) {
    return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  let a = premierJourDuMois(date);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice7", (req, res) => {
  date = req.body.date;

  if (date === undefined || date === null) {
    return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  if (isNaN(new Date(date).getTime())) {
    return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  let a = dernierJourDuMois(date);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice8", (req, res) => {
  const heures = req.body.heures;
  const minutes = req.body.minutes;

  if (heures === null || minutes === null || heures === undefined || minutes === undefined) {
    return res.status(400).json([
      {
        reponse: "Les heures ou les minutes ne sont pas définis",
      },
    ]);
  }

  if (isNaN(heures) || isNaN(minutes)) {
    return res.status(400).json([
      { reponse: "Veuillez entrer deux heures et des minutes valides" },
    ]);
  }

  if (heures < 0 || minutes < 0) {
    return res.status(400).json([
      { reponse: "Veuillez entrer deux heures et des minutes valides" },
    ]);
  }

  let a = formaterDuree(heures, minutes);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice9", (req, res) => {
  const debut1 = req.body.debut1;
  const debut2 = req.body.debut2;
  const fin1 = req.body.fin1;
  const fin2 = req.body.fin2;

  if (
    debut1 === undefined ||
    debut2 === undefined ||
    fin1 === undefined ||
    fin2 === undefined
  ) {
    return res.status(400).json([{ reponse: "Les dates ne sont pas définis" }]);
  }

  if (debut1 === null || debut2 === null || fin1 === null || fin2 === null) {
    return res.status(400).json([{ reponse: "Les dates ne sont pas définis" }]);
  }

  if (
    isNaN(new Date(debut1).getTime()) ||
    isNaN(
      new Date(debut2).getTime() ||
      isNaN(new Date(fin1).getTime()) ||
      isNaN(new Date(fin2).getTime)
    )
  ) {
    return res.status(400).json([{ reponse: "Veuillez entrer des dates valide" }]);
  }

  let a = chevauchementDates(debut1, debut2, fin1, fin2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice10", (req, res) => {
  const dateDeNaissance = req.body.dateDeNaissance;

  if (dateDeNaissance === null || dateDeNaissance === undefined) {
    return res.status(400).json([
      { reponse: "Veuillez entrer une date de naissance valide" },
    ]);
  }
  if (isNaN(new Date(dateDeNaissance).getTime())) {
    return res.status(400).json([
      { reponse: "Veuillez entrer une date de naissance valide" },
    ]);
  }

  let a = calculerAge(dateDeNaissance);
  return res.json([{ reponse: a }]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
