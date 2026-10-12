"use strict";
// ============================================================
// UNION DE TYPES en TypeScript  ( A | B )
// ============================================================
// Une union permet à une variable d'accepter PLUSIEURS types.
// On la note avec le pipe " | " entre les types.
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CAS 1 : Union simple
// ============================================================
// "identifiant" peut être un number OU un string
let identifiant;
identifiant = 42; // OK
identifiant = "abc-123"; // OK aussi
// identifiant = true;   // ERREUR : boolean n'est pas dans l'union
// ============================================================
// CAS 2 : Utilisation avec un type guard
// ============================================================
// Quand on a une union, TypeScript ne sait pas quel type est actif.
// On doit vérifier avec "typeof" avant d'utiliser les méthodes.
function afficherIdentifiant(id) {
    if (typeof id === "string") {
        // Ici TypeScript SAIT que id est un string
        console.log(`ID texte : ${id.toUpperCase()}`);
    }
    else {
        // Ici TypeScript SAIT que id est un number
        console.log(`ID numérique : ${id.toFixed(0)}`);
    }
}
afficherIdentifiant("abc-123"); // "ID texte : ABC-123"
afficherIdentifiant(42); // "ID numérique : 42"
function deplacer(direction) {
    console.log(`Déplacement vers ${direction}`);
}
deplacer("haut");
function calculerAire(forme) {
    if (forme.type === "cercle") {
        // TypeScript sait que "forme" est un Cercle ici
        return Math.PI * forme.rayon ** 2;
    }
    else {
        // TypeScript sait que "forme" est un Rectangle ici
        return forme.largeur * forme.hauteur;
    }
}
console.log(calculerAire({ type: "cercle", rayon: 5 }).toFixed(2)); // "78.54"
console.log(calculerAire({ type: "rectangle", largeur: 4, hauteur: 6 })); // 24
