// ============================================================
// ARRAY (tableaux) en TypeScript
// ============================================================
// Objectif : comprendre les différentes syntaxes, opérations
// courantes et pièges pour manipuler des tableaux typés.

// Deux syntaxes : `type[]` ou `Array<type>` — choisissez celle
// qui vous semble la plus lisible pour votre équipe.

// --------------------
// Déclaration et affectation
// --------------------

let myNumbers: number[];
myNumbers = [1,2,3];
// myNumbers = [1, "deux"]

console.log(myNumbers);

myNumbers.forEach(n => console.log(n));

let fruits: Array<string> = ["pomme","banane","cerise"];
fruits.forEach(f => console.log("Je mange une "+f));

//Méthodes courantes
fruits.push("poire");
myNumbers.push(4);

let myDoubles: number[] = myNumbers.map(n => n*2);
console.log(myDoubles);

let myBigNumbers: number[] = myNumbers.filter(n => n>2);
console.log(myBigNumbers);

let trouve: number | undefined = myNumbers.find(n => n===7);
console.log(trouve);

// --------------------
// Immutabilité et readonly
// --------------------
// Pour éviter les modifications accidentelles, utilisez `readonly`.
const jours: readonly string[] = ["lundi", "mardi", "mercredi"];
// jours.push("jeudi"); // ERREUR : readonly interdit les mutations

// --------------------
// Astuces pédagogiques
// --------------------
// - Préférez des types précis pour les tableaux publics.
// - Utilisez `ReadonlyArray<T>` si vous souhaitez exposer sans
//   permettre la modification.
// - Pour des collections hétérogènes, envisagez les tuples plutôt
//   que `Array<any>` pour garder de la sécurité de type.

let jour2 : string[] = [...jours];
jour2.push("Jeudi");
console.log(jour2);
