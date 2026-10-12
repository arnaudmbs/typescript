"use strict";
// ============================================================
// NEVER en TypeScript
// ============================================================
// "never" représente un type qui ne peut JAMAIS avoir de valeur.
// Il est utilisé dans deux situations principales :
//   1. Une fonction qui ne se termine JAMAIS (throw ou boucle infinie)
//   2. Un cas qui est théoriquement impossible (exhaustivité)
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CAS 1 : Fonction qui lance toujours une erreur
// ============================================================
// Cette fonction ne retourne rien car elle lève toujours une exception.
// TypeScript infère automatiquement le type de retour "never".
function lancerErreur(message) {
    throw new Error(message); // L'exécution s'arrête ici, pas de retour possible
}
// Utilisation : on appelle lancerErreur quand une situation est impossible
function diviser(a, b) {
    if (b === 0) {
        lancerErreur("Division par zéro interdite !"); // never => interrompt le flux
    }
    return a / b; // TypeScript sait qu'on arrive ici seulement si b !== 0
}
console.log(diviser(10, 2)); // 5
function decrireCouleur(couleur) {
    switch (couleur) {
        case "rouge":
            return "La couleur rouge, chaleureuse";
        case "vert":
            return "La couleur verte, naturelle";
        case "bleu":
            return "La couleur bleue, apaisante";
        default:
            // Si tous les cas sont traités, TypeScript infère que
            // "couleur" est de type "never" ici => impossible d'arriver là.
            // Si on ajoute "jaune" au type Couleur sans mettre de case,
            // TypeScript signalera une erreur sur la ligne suivante !
            const casImpossible = couleur;
            throw new Error(`Couleur non gérée : ${casImpossible}`);
    }
}
console.log(decrireCouleur("rouge")); // "La couleur rouge, chaleureuse"
console.log(decrireCouleur("bleu")); // "La couleur bleue, apaisante"
// ============================================================
// RÉSUMÉ : never vs void vs undefined
// ============================================================
// void       => la fonction se termine mais ne retourne rien d'utile
// undefined  => la fonction retourne explicitement undefined
// never      => la fonction ne se termine JAMAIS (throw ou boucle infinie)
function rien() {
    console.log("Je termine normalement, sans valeur de retour");
}
// function jamais(): never {
//     throw new Error("Je ne retourne jamais");
// }
