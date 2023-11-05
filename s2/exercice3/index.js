// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    const d1 = new Date(date1).getTime() / (1000 * 60 * 60 * 24);
    const d2 = new Date(date2).getTime() / (1000 * 60 * 60 * 24);
    return "La différence est de : " + Math.abs(d2 - d1) + " jours";
}