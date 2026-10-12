"use strict";
// ============================================================
// INTERFACE en TypeScript
// ============================================================
// Une interface définit un "contrat" : elle décrit la forme
// qu'un objet (ou une classe) DOIT respecter.
// Contrairement aux alias "type", les interfaces sont
// extensibles (on peut les fusionner et les étendre).
Object.defineProperty(exports, "__esModule", { value: true });
const chat = { nom: "Milo", age: 3 };
console.log(`${chat.nom} a ${chat.age} ans`); // "Milo a 3 ans"
const user = { id: 1, nom: "Alice" };
// user.id = 2; // ERREUR : id est readonly
console.log(user.email); // undefined (absent, mais autorisé)
// Implémentation concrète de l'interface Forme pour un cercle
const cercle = {
    couleur: "rouge",
    aire() {
        return Math.PI * 5 * 5; // rayon fixé à 5 pour l'exemple
    },
    perimetre() {
        return 2 * Math.PI * 5;
    },
    decrire(detail) {
        if (detail) {
            return `Cercle ${this.couleur}, aire = ${this.aire().toFixed(2)}`;
        }
        return `Cercle ${this.couleur}`;
    },
};
console.log(cercle.decrire(true)); // "Cercle rouge, aire = 78.54"
console.log(cercle.decrire(false)); // "Cercle rouge"
const tesla = {
    marque: "Tesla",
    vitesseMax: 250,
    autonomieKm: 500,
    recharger() {
        console.log(`${this.marque} en charge...`);
    },
};
tesla.recharger(); // "Tesla en charge..."
console.log(`${tesla.marque} — autonomie : ${tesla.autonomieKm} km`);
class Produit {
    id;
    nom;
    prix;
    constructor(id, nom, prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }
    versJSON() {
        // JSON.stringify convertit l'objet en chaîne JSON
        return JSON.stringify({ id: this.id, nom: this.nom, prix: this.prix });
    }
}
const clavier = new Produit(1, "Clavier mécanique", 89.99);
console.log(clavier.versJSON());
// Configuration regroupe maintenant "langue" ET "theme"
const appConfig = { langue: "fr", theme: "sombre" };
console.log(appConfig); // { langue: "fr", theme: "sombre" }
// ============================================================
// RÉSUMÉ : interface vs type
// ============================================================
// | Fonctionnalité              | interface | type  |
// |-----------------------------|-----------|-------|
// | Décrire un objet            |    ✅     |  ✅   |
// | Étendre (extends)           |    ✅     |  ✅   |
// | Fusion de déclarations      |    ✅     |  ❌   |
// | Implémenter dans une classe |    ✅     |  ✅   |
// | Union / intersection        |    ❌     |  ✅   |
// | Types primitifs / tuples    |    ❌     |  ✅   |
// => Préférer "interface" pour les objets et les classes.
// => Préférer "type" pour les unions, intersections et alias simples.
