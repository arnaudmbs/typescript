// ============================================================
// UNION DE TYPES en TypeScript  ( A | B )
// ============================================================
// Une union permet à une variable d'accepter PLUSIEURS types.
// On la note avec le pipe " | " entre les types.

// ============================================================
// CAS 1 : Union simple
// ============================================================
// "identifiant" peut être un number OU un string
let identifiant: number | string;

identifiant = 42;        // OK
identifiant = "abc-123"; // OK aussi
// identifiant = true;   // ERREUR : boolean n'est pas dans l'union

// ============================================================
// CAS 2 : Utilisation avec un type guard
// ============================================================
// Quand on a une union, TypeScript ne sait pas quel type est actif.
// On doit vérifier avec "typeof" avant d'utiliser les méthodes.
function afficherIdentifiant(id: number | string): void {
    if (typeof id === "string") {
        // Ici TypeScript SAIT que id est un string
        console.log(`ID texte : ${id.toUpperCase()}`);
    } else {
        // Ici TypeScript SAIT que id est un number
        console.log(`ID numérique : ${id.toFixed(0)}`);
    }
}

afficherIdentifiant("abc-123"); // "ID texte : ABC-123"
afficherIdentifiant(42);        // "ID numérique : 42"

// ============================================================
// CAS 3 : Union de types littéraux (valeurs exactes)
// ============================================================
// Très utile pour restreindre les valeurs possibles.
// Similaire à un enum, mais plus léger.

type chiffre = 0 | 1 | 2 | 3;
type Direction = "haut" | "bas" | "gauche" | "droite";

function deplacer(direction: Direction): void {
    console.log(`Déplacement vers ${direction}`);   
}

deplacer("haut");

// ============================================================
// CAS 4 : Union d'objets (discriminated union)
// ============================================================
// Chaque membre de l'union partage une propriété "discriminante"
// (ici "type") qui permet de distinguer les cas.
type Cercle    = { type: "cercle";    rayon: number };
type Rectangle = { type: "rectangle"; largeur: number; hauteur: number };

type Forme = Cercle | Rectangle; // union des deux

function calculerAire(forme: Forme): number {
    if (forme.type === "cercle") {
        // TypeScript sait que "forme" est un Cercle ici
        return Math.PI * forme.rayon ** 2;
    } else {
        // TypeScript sait que "forme" est un Rectangle ici
        return forme.largeur * forme.hauteur;
    }
}

console.log(calculerAire({ type: "cercle", rayon: 5 }).toFixed(2));      // "78.54"
console.log(calculerAire({ type: "rectangle", largeur: 4, hauteur: 6 })); // 24
 