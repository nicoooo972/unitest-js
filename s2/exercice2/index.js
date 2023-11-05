// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
    const dateFormater = new Date(date).toLocaleDateString("fr-FR");
    return dateFormater;
}