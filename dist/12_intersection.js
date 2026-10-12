"use strict";
// ============================================================
// INTERSECTION DE TYPES en TypeScript  ( A & B )
// ============================================================
// Une intersection COMBINE plusieurs types en un seul.
// Le résultat doit respecter TOUTES les propriétés de chaque type.
// On la note avec le " & " entre les types.
Object.defineProperty(exports, "__esModule", { value: true });
const employe = {
    nom: "Alice",
    age: 30,
    email: "alice@exemple.com",
    telephone: "06 00 00 00 00",
};
console.log(employe.nom); // "Alice"
console.log(employe.email); // "alice@exemple.com"
const article = { nom: "Clavier", prix: 59.99, quantite: 150 };
console.log(`${article.nom} — stock : ${article.quantite}`); // "Clavier — stock : 150"
const doc = {
    titre: "Guide TypeScript",
    contenu: "TypeScript est un sur-ensemble de JavaScript...",
    creeLe: new Date("2024-01-01"),
    modifieLe: new Date("2024-06-15"),
};
console.log(doc.titre); // "Guide TypeScript"
console.log(doc.creeLe.toDateString()); // "Mon Jan 01 2024"
// ============================================================
// RÉSUMÉ : union vs intersection
// ============================================================
//  Union  A | B  => la variable est A OU B (l'un des deux)
//  Intersection A & B  => la variable est A ET B (les deux à la fois)
//
//  Union    : "je peux être l'un ou l'autre"   => flexibilité
//  Intersection : "je dois être les deux"       => richesse / composition
