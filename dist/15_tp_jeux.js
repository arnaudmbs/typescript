"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Étape 1 — Enum : les genres de jeux
var Genre;
(function (Genre) {
    Genre[Genre["Action"] = 0] = "Action";
    Genre[Genre["RPG"] = 1] = "RPG";
    Genre[Genre["Strategie"] = 2] = "Strategie";
    Genre[Genre["Sport"] = 3] = "Sport";
})(Genre || (Genre = {}));
// Étape 4 — Tableau : créer la bibliothèque
let bibliotheque = [
    { id: 1, titre: "The Watcher 3", genre: Genre.Action, note: 18, quantite: 120, magasin: "Fnac" },
    { id: 2, titre: "Water Emblem", genre: Genre.RPG, note: 10, quantite: 110, magasin: "Cultura" },
    { id: 3, titre: "Sim School", genre: Genre.Strategie, note: 8, quantite: 80, magasin: "Micromania" },
    { id: 4, titre: "FIFA 2027", genre: Genre.Sport, note: 14, multijoueur: true, quantite: 150, magasin: "Fnac" },
    { id: 5, titre: "GTA 8", genre: Genre.Action, note: 19, quantite: 200, magasin: "Cultura" },
    { id: 6, titre: "Last Fantasy", genre: Genre.RPG, note: 16, quantite: 130, magasin: "Micromania" },
    { id: 7, titre: "Theme City", genre: Genre.Strategie, note: 12, quantite: 100, magasin: "Fnac" },
    { id: 8, titre: "NBA 2027", genre: Genre.Sport, note: 15, multijoueur: true, quantite: 90, magasin: "Cultura" }
];
// Étape 5 — Tuple : le podium
let bibliothequeTriee = [...bibliotheque].sort((a, b) => b.note - a.note);
let podium = ["", "", ""];
bibliothequeTriee.forEach((jeu, index) => {
    if (index >= 0 && index <= 2) {
        podium[index] = jeu.titre;
    }
});
// Étape 6 — Fonctions typées
function rechercherParGenre(jeux, genre) {
    return jeux.filter(jeu => jeu.genre === genre);
}
console.log("Etape 6 : recherche par genre :");
console.log(rechercherParGenre(bibliotheque, Genre.Action));
function calculerMoyenne(jeux) {
    return (jeux.reduce((moyenne, jeu) => moyenne + jeu.note, 0)) / jeux.length;
}
console.log("Etape 6 : moyenne :");
console.log(calculerMoyenne(bibliotheque));
function afficherJeu(jeu) {
    let genreNom = Genre[jeu.genre].toUpperCase();
    console.log(`[${genreNom}] ${jeu.titre} - Note: ${jeu.note}/20 - Stock: ${jeu.quantite} (${jeu.magasin})`);
}
let jeu = bibliotheque[0];
if (jeu) {
    console.log("Etape 6 : afficher jeu :");
    afficherJeu(jeu);
}
//Étape 7 — Union de types
function rechercherJeu(critere) {
    if (typeof critere === "string") {
        return bibliotheque.find(jeu => jeu.titre === critere);
    }
    else {
        return bibliotheque.find(jeu => jeu.id === critere);
    }
}
console.log("Etape 7 :");
console.log(rechercherJeu("Sim School"));
console.log(rechercherJeu(6));
// ## Étape 8 — Unknown : données externes
function traiterDonneesExternes(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    else if (typeof data === "object" && data !== null && "titre" in data && typeof data.titre === "string") {
        return data.titre;
    }
    else {
        return "Format inconnu";
    }
}
console.log("Etape 8 :");
console.log(traiterDonneesExternes("zelda"));
console.log(traiterDonneesExternes({ titre: "Mario" }));
console.log(traiterDonneesExternes(42));
// Étape 9 — Never : exhaustivité
function decrireGenre(genre) {
    switch (genre) {
        case 0:
            return "Jeu d'action et d'aventure";
        case 1:
            return "Jeu de rôle";
        case 2:
            return "Jeu de stratégie en temps réel";
        case 3:
            return "Jeu de simulation de sport";
        default:
            const casImpossible = genre;
            throw new Error(`Genre non géré : ${casImpossible}`);
    }
}
console.log("Etape 9 :");
console.log(decrireGenre(Genre.Action));
// Étape 10 — Fonctions fléchées & enchaînement
console.log("Etape 10 :");
console.log(bibliotheque.filter(jeu => jeu.note >= 15).sort((a, b) => b.note - a.note).forEach(jeu => afficherJeu(jeu)));
// ## Bonus — Paramètre par défaut & rest
function resumeBibliotheque(titre = "Ma bibliothèque", ...jeux) {
    let nombreDeJeux = jeux.length;
    let moyenne = calculerMoyenne(jeux);
    console.log(`=== ${titre} ===\n${nombreDeJeux} jeu${nombreDeJeux > 1 ? "x" : ""} - Moyenne ${moyenne}/20`);
}
console.log("Bonus :");
resumeBibliotheque(undefined, ...bibliotheque);
