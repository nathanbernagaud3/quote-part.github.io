function calculer() {
    // Obtenir les valeurs des entrées
    const conjointSurvivant = document.getElementById('conjointSurvivant').value;
    const nombreEnfants = parseInt(document.getElementById('nombreEnfants').value);
    
    let result;

    // Exemple de conversion de la formule C12 sans la valeur du bien immobilier
    if (conjointSurvivant === "100% Usufruit") {
        result = "0%";
    } else if (conjointSurvivant === "100% Pleine Propriété") {
        result = "100%";
    } else if (conjointSurvivant === "1/4 Usufruit") {
        result = "0%";
    } else if (conjointSurvivant === "1/4 Pleine Propriété") {
        result = "25%";
    } else if (conjointSurvivant === "1/4 Pleine Propriété et 3/4 Usufruit") {
        result = "25%";
    } else if (conjointSurvivant === "Pas de Conjoint Survivant") {
        result = "0%";
    } else {
        result = "Erreur : Option non reconnue";
    }

    // Afficher le résultat
    document.getElementById('result').value = result;
}
