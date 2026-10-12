"use strict";
// ============================================================
// ENUM en TypeScript
// ============================================================
// Un enum (énumération) permet de définir un ensemble de
// constantes nommées. Il remplace les "magic numbers" ou les
// chaînes répétées dans le code, rendant celui-ci plus lisible
// et moins sujet aux fautes de frappe.
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CAS 1 : Enum numérique (le plus courant)
// ============================================================
// Par défaut, les valeurs commencent à 0 et s'incrémentent.
var Direction;
(function (Direction) {
    Direction[Direction["Haut"] = 0] = "Haut";
    Direction[Direction["Bas"] = 1] = "Bas";
    Direction[Direction["Gauche"] = 2] = "Gauche";
    Direction[Direction["Droite"] = 3] = "Droite";
})(Direction || (Direction = {}));
//On utilise le nom des constantes qui ont une valeur ar défaut comme des attributs
let deplacement = Direction.Haut;
console.log(deplacement); // affichera 0
console.log(Direction[0]); // afficher "Haut"
// Comparaison dans un if
if (deplacement === Direction.Haut) {
    console.log("On monte !"); // affiché car deplacement vaut Direction.Haut
}
// ============================================================
// CAS 2 : Enum numérique avec valeur de départ personnalisée
// ============================================================
// On peut forcer la première valeur ; les suivantes s'incrémentent.
var CodeHTTP;
(function (CodeHTTP) {
    CodeHTTP[CodeHTTP["OK"] = 200] = "OK";
    CodeHTTP[CodeHTTP["CreePar"] = 201] = "CreePar";
    CodeHTTP[CodeHTTP["NonTrouve"] = 404] = "NonTrouve";
    CodeHTTP[CodeHTTP["mystere"] = 405] = "mystere";
    CodeHTTP[CodeHTTP["Erreur"] = 500] = "Erreur";
})(CodeHTTP || (CodeHTTP = {}));
console.log(CodeHTTP.OK);
function gererCodeReponse(code) {
    switch (code) {
        case CodeHTTP.OK:
            console.log("Succès !");
            break;
        case CodeHTTP.CreePar:
            console.log("Succès !");
            break;
        case CodeHTTP.NonTrouve:
            console.log("Ressource introuvable !");
            break;
        case CodeHTTP.Erreur:
            console.log("Erreur interne du serveur !");
            break;
        default:
            console.log(`Code non géré : ${code}`);
    }
}
gererCodeReponse(CodeHTTP.OK);
gererCodeReponse(CodeHTTP.Erreur);
gererCodeReponse(404);
gererCodeReponse(405);
