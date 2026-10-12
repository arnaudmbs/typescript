"use strict";
// ============================================================
// OBJETS en TypeScript
// ============================================================
// En TypeScript, on peut typer la structure d'un objet
// directement en ligne, via un alias (type) ou via une interface.
// Ici on se concentre sur le typage inline et les alias "type".
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CAS 1 : Typage inline d'un objet
// ============================================================
// On décrit la forme de l'objet directement après le ":"
let produit;
produit = { nom: "clavier", prix: 59.99, disponible: true };
console.log(produit.nom + " est au prix de : " + produit.prix);
// ============================================================
// CAS 2 : Propriété optionnelle
// ============================================================
// Le "?" rend une propriété facultative dans l'objet.
let article;
article = { titre: "TypeScript avancé" }; // OK sans description
article = { titre: "TypeScript avancé", description: "Un super livre" }; // OK aussi
// ============================================================
// CAS 3 : Propriété en lecture seule (readonly)
// ============================================================
// "readonly" empêche la modification d'une propriété après création.
let config;
config = { apiUrl: "https://api.exemple.com", timeout: 3000 };
config.timeout = 5000; // OK : timeout n'est pas readonly
let rect = {
    origine: { x: 0, y: 0 },
    largeur: 100,
    hauteur: 50
};
function aire(r) {
    return r.largeur * r.hauteur;
}
console.log(aire(rect));
const traductions = {
    bonjour: "hello",
    chat: "cat",
    voiture: "car",
};
traductions["maison"] = "house"; // OK : on peut ajouter dynamiquement
console.log(traductions["chat"]); // "cat"
const employe = { nom: "Bob", poste: "Développeur", salaire: 3500 };
// Déstructuration avec renommage de variable
const { nom: nomEmploye, salaire } = employe;
console.log(`${nomEmploye} gagne ${salaire} €/mois`); // "Bob gagne 3500 €/mois"
// ============================================================
// CAS 7 : Spread et fusion d'objets
// ============================================================
// L'opérateur spread (...) copie les propriétés d'un objet.
const base = { nom: "Carla", poste: "Designer", salaire: 3200 };
// On crée un nouvel objet en fusionnant base avec des modifications.
// "base" n'est PAS modifié (immutabilité).
const employePromu = { ...base, poste: "Lead Designer", salaire: 4000 };
console.log(base.poste); // "Designer"    (inchangé)
console.log(employePromu.poste); // "Lead Designer"
