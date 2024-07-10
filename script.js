function calculer() {
    // Obtenir les valeurs des entrées
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    
    // Faire le calcul (par exemple, une addition)
    const result = input1 + input2;
    
    // Afficher le résultat
    document.getElementById('result').value = result;
}
