// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    dateNaissance = new Date(dateNaissance);
    today = new Date();
    dateNaissance = today.getFullYear() - dateNaissance.getFullYear();
    return dateNaissance;
}