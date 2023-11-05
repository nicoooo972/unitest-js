// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const dateReçu = new Date(date);
    //afin d'éviter les erreurs
    const premierJourMoisSuivant = new Date(dateReçu.getFullYear(), dateReçu.getMonth() + 1, 1);
    const dernierJourMoisActuel = new Date(premierJourMoisSuivant - 1);
    return dernierJourMoisActuel.toISOString().split('T')[0];
}
