// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
    const heuresFormatees = ("0" + heures).slice(-2);
    const minutesFormatees = ("0" + minutes).slice(-2);
    return `${heuresFormatees}:${minutesFormatees}`;
}