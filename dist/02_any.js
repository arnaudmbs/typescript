"use strict";
// ============================================================
// ANY en TypeScript — notions et bonnes pratiques
// ============================================================
// Objectif : comprendre ce que fait `any`, ses risques et
// quand (et comment) le remplacer par des alternatives plus sûres.
Object.defineProperty(exports, "__esModule", { value: true });
// ----------
// 1) Qu'est-ce que `any` ?
// ----------
// `any` désactive toute vérification statique : la variable
// accepte n'importe quelle valeur et TypeScript ne prévient pas.
// Exemple — declaration sans annotation => inference `any`
let level; // type inféré : any
level = 1; //OK
level = "a"; //OK
//avantage: flexibilité immédiate. Inconvénient : perte totale de l'utilité de typeScript :
// autocomplétion, vérification, sécurité
// ----------
// 2) `any` en paramètre de fonction (risque)
// ----------
function render(document) {
    // TypeScript n'effectue aucune vérification sur `document`.
    // Appeler document.toto() compile sans erreur, mais échouera
    // potentiellement à l'exécution si la propriété n'existe pas.
    console.log(document);
}
render(42);
render("Bonjour");
render({ nom: "Arnaud" });
// ----------
// 3) Alternatives et recommandations
// ----------
// - Favorisez `unknown` lorsque vous devez accepter plusieurs
//   types mais souhaitez vérifier avant utilisation.
// - Déclarez des types précis pour les API publiques et fonctions
//   partagées pour éviter les erreurs silencieuses.
// - Activez `noImplicitAny` dans `tsconfig.json` pour forcer
//   des annotations explicites et attraper les oublis tôt.
// Résumé : `any` = facilité rapide mais dette technique. Préférez
// `unknown` ou des types précis pour un code robuste et maintenable.
