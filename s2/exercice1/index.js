// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const today = new Date('2023-11-03');
    return dateIlYADixAns = new Date(today.getFullYear() - 10).toISOString().split("T")[0];
}