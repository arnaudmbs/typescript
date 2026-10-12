"use strict";
// ============================================================
// Unknown en TypeScript — notions et bonnes pratiques
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// à utiliser quand on ne connait pas à l'avance le type de valeur récupérée 
// Déclaration
let mystere;
// ---  Assignation : n'importe quel type est accepté ---
mystere = 42;
mystere = "bonjour";
mystere = true;
mystere = { nom: "Alice" };
mystere = "TypeScript me demande de vérifier le type avant utilisation";
// console.log(mystere.toUpperCase());
if (typeof mystere === "string") {
    console.log(mystere.toUpperCase());
}
mystere = 100;
if (typeof mystere === "number") {
    console.log(mystere * 2);
}
function traiterReponseAPI(data) {
    if (typeof data === "object" && data !== null && "nom" in data && typeof data.nom === "string") {
        console.log(data.nom);
    }
    else {
        console.log("Format de données inattendu");
    }
}
traiterReponseAPI(mystere);
traiterReponseAPI({ nom: "Alice" });
traiterReponseAPI({ prenom: "Alice" });
traiterReponseAPI({ nom: 42 });
