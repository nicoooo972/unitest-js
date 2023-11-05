// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    date = new Date(date);
    date.setDate(date.getDate() + jours);
    return date.toISOString().split("T")[0];
}
