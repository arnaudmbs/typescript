// ============================================================
// OBJETS en TypeScript
// ============================================================
// En TypeScript, on peut typer la structure d'un objet
// directement en ligne, via un alias (type) ou via une interface.
// Ici on se concentre sur le typage inline et les alias "type".

// ============================================================
// CAS 1 : Typage inline d'un objet
// ============================================================
// On décrit la forme de l'objet directement après le ":"

let produit: {nom: string, prix: number, disponible: boolean};

produit = {nom: "clavier", prix: 59.99, disponible: true};

console.log(produit.nom + " est au prix de : " + produit.prix);

// ============================================================
// CAS 2 : Propriété optionnelle
// ============================================================
// Le "?" rend une propriété facultative dans l'objet.
let article: { titre: string; description?: string };

article = { titre: "TypeScript avancé" };             // OK sans description
article = { titre: "TypeScript avancé", description: "Un super livre" }; // OK aussi

// ============================================================
// CAS 3 : Propriété en lecture seule (readonly)
// ============================================================
// "readonly" empêche la modification d'une propriété après création.
let config: { readonly apiUrl: string; timeout: number };
config = { apiUrl: "https://api.exemple.com", timeout: 3000 };

config.timeout = 5000;  // OK : timeout n'est pas readonly
// config.apiUrl = "autre"; // ERREUR : apiUrl est readonly

// ============================================================
// CAS 4 : Alias de type (type alias)
// ============================================================
// "type" permet de nommer une forme d'objet et de la réutiliser.
// Pratique pour éviter de réécrire la même structure partout.
type Coordonnees = {
    x: number;
    y: number;
}

type Rectangle = {
    origine: Coordonnees;
    largeur: number;
    hauteur: number;
}

let rect: Rectangle = {
    origine: {x: 0, y: 0},
    largeur : 100,
    hauteur: 50
}

function aire(r: Rectangle): number {
    return r.largeur*r.hauteur;
}

console.log(aire(rect));

// ============================================================
// CAS 5 : Index signature (objet à clés dynamiques)
// ============================================================
// Quand les clés ne sont pas connues à l'avance, on utilise
// une "index signature" : [cle: string]: type
type Dictionnaire = {
    [cle: string]: string; // toutes les valeurs doivent être des strings
};

const traductions: Dictionnaire = {
    bonjour: "hello",
    chat: "cat",
    voiture: "car",
};

traductions["maison"] = "house"; // OK : on peut ajouter dynamiquement
console.log(traductions["chat"]); // "cat"

// ============================================================
// CAS 6 : Déstructuration d'objet typée
// ============================================================
type Employe = {
    nom: string;
    poste: string;
    salaire: number;
};

const employe: Employe = { nom: "Bob", poste: "Développeur", salaire: 3500 };

// Déstructuration avec renommage de variable
const { nom: nomEmploye, salaire } = employe;
console.log(`${nomEmploye} gagne ${salaire} €/mois`); // "Bob gagne 3500 €/mois"

// ============================================================
// CAS 7 : Spread et fusion d'objets
// ============================================================
// L'opérateur spread (...) copie les propriétés d'un objet.
const base: Employe = { nom: "Carla", poste: "Designer", salaire: 3200 };

// On crée un nouvel objet en fusionnant base avec des modifications.
// "base" n'est PAS modifié (immutabilité).
const employePromu: Employe = { ...base, poste: "Lead Designer", salaire: 4000 };

console.log(base.poste);          // "Designer"    (inchangé)
console.log(employePromu.poste);  // "Lead Designer"