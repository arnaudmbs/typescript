// ============================================================
// INTERSECTION DE TYPES en TypeScript  ( A & B )
// ============================================================
// Une intersection COMBINE plusieurs types en un seul.
// Le résultat doit respecter TOUTES les propriétés de chaque type.
// On la note avec le " & " entre les types.

// ============================================================
// CAS 1 : Intersection simple
// ============================================================
type APersonne = { nom: string; age: number };
type AContact = { email: string; telephone: string };

// "EmployeComplet" doit avoir nom + age + email + telephone
type EmployeComplet = APersonne & AContact;

const employe: EmployeComplet = {
    nom: "Alice",
    age: 30,
    email: "alice@exemple.com",
    telephone: "06 00 00 00 00",
};

console.log(employe.nom);   // "Alice"
console.log(employe.email); // "alice@exemple.com"

// ============================================================
// CAS 2 : Intersection pour enrichir un type existant
// ============================================================
// Cas courant : on a un type de base et on lui ajoute des
// propriétés supplémentaires sans modifier l'original.
type Produit = { nom: string; prix: number };
type AvecStock = Produit & { quantite: number };

const article: AvecStock = { nom: "Clavier", prix: 59.99, quantite: 150 };
console.log(`${article.nom} — stock : ${article.quantite}`); // "Clavier — stock : 150"

// ============================================================
// CAS 3 : Intersection avec des interfaces
// ============================================================
// L'intersection fonctionne aussi avec des interfaces.
interface Horodatable {
    creeLe: Date;
    modifieLe: Date;
}

interface Document {
    titre: string;
    contenu: string;
}

// DocumentSauvegarde doit avoir les propriétés des deux interfaces
type DocumentSauvegarde = Document & Horodatable;

const doc: DocumentSauvegarde = {
    titre: "Guide TypeScript",
    contenu: "TypeScript est un sur-ensemble de JavaScript...",
    creeLe: new Date("2024-01-01"),
    modifieLe: new Date("2024-06-15"),
};

console.log(doc.titre);                  // "Guide TypeScript"
console.log(doc.creeLe.toDateString());  // "Mon Jan 01 2024"

// ============================================================
// RÉSUMÉ : union vs intersection
// ============================================================
//  Union  A | B  => la variable est A OU B (l'un des deux)
//  Intersection A & B  => la variable est A ET B (les deux à la fois)
//
//  Union    : "je peux être l'un ou l'autre"   => flexibilité
//  Intersection : "je dois être les deux"       => richesse / composition
 