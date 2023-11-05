// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    const dateReçu = new Date(date);
    const premierJourDuMois = new Date(Date.UTC(dateReçu.getFullYear(), dateReçu.getMonth(), 1));
    return premierJourDuMois.toISOString().split('T')[0];
}


