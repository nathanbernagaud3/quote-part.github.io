function calculer() {
    // Obtenir les valeurs des entrées
    const bienImmo = parseFloat(document.getElementById('bienImmo').value);
    const conjointSurvivant = document.getElementById('conjointSurvivant').value;
    const nombreEnfants = parseInt(document.getElementById('nombreEnfants').value);
    
    let result;

    // Exemple de conversion de la formule C12
    if (conjointSurvivant === "100% Usufruit") {
        result = 0;
    } else if (conjointSurvivant === "100% Pleine Propriété") {
        result = bienImmo;
    } else if (conjointSurvivant === "1/4 Usufruit") {
        result = 0;
    } else if (conjointSurvivant === "1/4 Pleine Propriété") {
        result = (1/4) * bienImmo;
    } else if (conjointSurvivant === "1/4 Pleine Propriété et 3/4 Usufruit") {
        result = (1/4) * bienImmo;
    } else if (conjointSurvivant === "Pas de Conjoint Survivant") {
        result = 0;
    } else {
        // Ajoutez les autres conditions ici
    }

    // Afficher le résultat
    document.getElementById('result').value = result;
}
