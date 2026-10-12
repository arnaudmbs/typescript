"use strict";
// ============================================================
// INTRODUCTION & BASES de TypeScript
// ============================================================
// Objectif : présenter rapidement la syntaxe de base et les
// annotations de type utiles pour démarrer un projet.
Object.defineProperty(exports, "__esModule", { value: true });
// Exécutez ce fichier après compilation pour voir les exemples.
console.log("helloworld depuis TypeScript !");
// --------------------
// Variables et types
// --------------------
// Ajoutez des annotations pour bénéficier de la vérification statique
// et d'une meilleure autocomplétion dans l'éditeur.
let isDone = false;
console.log(isDone);
let height = 6;
height = 12;
let firstName = "Arnaud";
let lastName = "Fortier";
//Concaténation classique
let phrase1 = "Bonjour " + firstName;
//Template String (meilleure lisibilité)
let phrase2 = `Au revoir ${firstName}`;
console.log(phrase1);
console.log(phrase2);
// --------------------
// Fonctions simples
// --------------------
// Typage des paramètres et du retour : utile pour détecter
// les erreurs dès la compilation.
function greeterString(person) {
    return "Bonjour depuis la fonction " + person;
}
console.log(greeterString(firstName));
