// ============================================================
// FONCTIONS FLÉCHÉES en TypeScript
// ============================================================
// Les fonctions fléchées (arrow functions) sont une syntaxe
// compacte introduite en ES6. En TypeScript, on y ajoute
// le typage des paramètres et du retour.
// Rappel syntaxe : (params) => expression  OU  (params) => { bloc }

// ============================================================
// CAS 1 : Syntaxe de base
// ============================================================
// Forme longue avec bloc et "return" explicite

function multiplier(a: number, b: number): number {
    return a*b;
}

const multiplierCourte = (a: number, b: number) => a*b;

console.log(multiplier(4,5));
console.log(multiplierCourte(4,5));

// ============================================================
// CAS 2 : Un seul paramètre => parenthèses optionnelles
// ============================================================
const doubler = (n: number) => n*2;
console.log(doubler(7));

// ============================================================
// CAS 3 : Sans paramètres
// ============================================================
const direBonjour = () => "Bonjour tout le monde";
console.log(direBonjour());

// ============================================================
// CAS 4 : Retour d'un objet littéral
// ============================================================
// ATTENTION : sans parenthèses, les accolades seraient interprétées
// comme un bloc de code, pas comme un objet. Il faut donc englober
// l'objet dans des parenthèses.
const creerUtilisateur = (nom: string, age:number): {nom: string; age: number} => ({nom,age});
console.log(creerUtilisateur("Arnaud",46));

// ============================================================
// CAS 5 : Fonctions fléchées dans les tableaux (map, filter, reduce)
// ============================================================
// C'est l'usage le plus fréquent des fonctions fléchées.
const notes: number[] = [12, 8, 17, 5, 14, 9];

// map : transforme chaque élément
const notesSur60: number[] = notes.map((n:number) => n*3);
//console.log(notesSur60);

console.log("Affichage du map :");
notesSur60.forEach(n => console.log(n));

const notesSuperieureMoyenne: number[] = notes.filter(n => n>=10);
console.log(notesSuperieureMoyenne);

const moyenneNotes: number = (notes.reduce((moyenne: number ,n: number) => moyenne+n,0)) / notes.length;
console.log(moyenneNotes);

// ============================================================
// CAS 7 : Typer une variable de type fonction fléchée
// ============================================================
// On peut annoter explicitement le type d'une variable qui
// contiendra une fonction fléchée.
const diviser: (a: number, b: number) => number = (a, b) => a / b;
const diviser2 = (a: number, b:number) => a/b;
console.log(diviser(10, 4)); // 2.5
 