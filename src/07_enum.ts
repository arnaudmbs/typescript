// ============================================================
// ENUM en TypeScript
// ============================================================
// Un enum (énumération) permet de définir un ensemble de
// constantes nommées. Il remplace les "magic numbers" ou les
// chaînes répétées dans le code, rendant celui-ci plus lisible
// et moins sujet aux fautes de frappe.

// ============================================================
// CAS 1 : Enum numérique (le plus courant)
// ============================================================
// Par défaut, les valeurs commencent à 0 et s'incrémentent.
enum Direction {
    Haut,    // 0
    Bas,     // 1
    Gauche,  // 2
    Droite,  // 3
}

//On utilise le nom des constantes qui ont une valeur ar défaut comme des attributs

let deplacement: Direction = Direction.Haut;
console.log(deplacement) ; // affichera 0
console.log(Direction[0]); // afficher "Haut"

// Comparaison dans un if
if (deplacement === Direction.Haut) {
    console.log("On monte !");     // affiché car deplacement vaut Direction.Haut
}

// ============================================================
// CAS 2 : Enum numérique avec valeur de départ personnalisée
// ============================================================
// On peut forcer la première valeur ; les suivantes s'incrémentent.
enum CodeHTTP {
    OK = 200,
    CreePar = 201,
    NonTrouve = 404,
    mystere = 405,
    Erreur = 500
}

console.log(CodeHTTP.OK);

function gererCodeReponse (code: CodeHTTP): void {
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