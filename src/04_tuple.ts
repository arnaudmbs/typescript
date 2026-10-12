// ============================================================
// TUPLE en TypeScript
// ============================================================
// Un tuple est un tableau dont on fixe à l'avance :
//   - le nombre d'éléments
//   - le type de chaque élément à chaque position
// Contrairement à un tableau classique (number[]), chaque
// position a son propre type.

// --Déclaration d'un tuple --
let personne : [string, number];
personne = ["Arnaud", 46];
// personne = ["Alexis"];
console.log(personne);

// Accès aux éléments : TypeScript connait déjà le type de chaque élément du tableau
console.log(personne[0].toUpperCase());
console.log(personne[1].toFixed(2));

// --- Tuple avec label (TypeScript ≥ 4.0) ---
// Les labels améliorent la lisibilité mais ne changent pas le comportement

let coordonnees: [x: number, y:number, z:number];
coordonnees = [12.5,48.8,200];
console.log(`Latitude : ${coordonnees[0]}, longitude : ${coordonnees[1]}, altitude : ${coordonnees[2]}`);

// --- Tuple optionnel ---
// le "?" rend le dernier élément facultatif 

let paire: [string, number?];
paire = ['Seule'];
paire = ['Duo', 42];

// --- Tableau de tuples (cas pratique) ---
// On peut typer un tableau dont chaque entrée est un tuple
const utilisateurs: [nom : string,age : number][] = 
[
    ["Bob",25],
    ["Carla",52],
    ["Dan",19],
];

// Parcourrir le tableau et destructurer à la volée
utilisateurs.forEach(([nom,age]) => {
    console.log(nom + " a " + age + " ans" );
})
 
let utilisateurs2 = utilisateurs.map(([nom,age]) => {
    console.log("Joyeux anniversaire " + nom + "pour tes " + (age+1) + " ans");    
    return [nom, age+1];
});

console.log(utilisateurs2);


let utilisateurs3 = utilisateurs.map(([nom,age]) => {
    console.log(`Joyeux anniversaire ${nom} pour tes ${age+1} ans`);    
    return [nom, age+1];
});

console.log(utilisateurs3);