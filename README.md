# Support de cours — TypeScript

> **Formation pour adultes — Initiation à TypeScript**
> Ce support accompagne les 14 fichiers d'exemples du dossier `src/`. Chaque chapitre
> correspond à un fichier `.ts` et peut être lu, exécuté et modifié en autonomie.

---

## Sommaire

| # | Chapitre | Fichier | Notion clé |
|---|----------|---------|------------|
| 1 | [Introduction & bases](#1--introduction--bases) | `01_helloworld.ts` | Variables, types, fonctions |
| 2 | [Le type `any`](#2--le-type-any) | `02_any.ts` | Désactiver le typage (et ses risques) |
| 3 | [Les tableaux (`Array`)](#3--les-tableaux-array) | `03_array.ts` | Collections typées |
| 4 | [Les tuples](#4--les-tuples) | `04_tuple.ts` | Tableaux à structure fixe |
| 5 | [Le type `unknown`](#5--le-type-unknown) | `05_unknown.ts` | Inconnu sûr |
| 6 | [Les fonctions](#6--les-fonctions) | `06_fonction.ts` | Paramètres, retours, surcharge |
| 7 | [Les énumérations (`enum`)](#7--les-énumérations-enum) | `07_enums.ts` | Constantes nommées |
| 8 | [Les classes](#8--les-classes) | `08_classe.ts` | POO et visibilité |
| 9 | [Les objets](#9--les-objets) | `09_objet.ts` | Typage de structures |
| 10 | [Les interfaces](#10--les-interfaces) | `10_interface.ts` | Contrats |
| 11 | [Les unions (`A \| B`)](#11--les-unions-a--b) | `11_union.ts` | Un type OU un autre |
| 12 | [Les intersections (`A & B`)](#12--les-intersections-a--b) | `12_intersection.ts` | Combiner des types |
| 13 | [Le type `never`](#13--le-type-never) | `13_never.ts` | L'impossible |
| 14 | [Les fonctions fléchées](#14--les-fonctions-fléchées) | `14_fonction_flechee.ts` | Syntaxe compacte ES6 |

---

## Avant de commencer

### Qu'est-ce que TypeScript ?

TypeScript est un **sur-ensemble de JavaScript** : tout code JavaScript valide est aussi du
TypeScript. Sa valeur ajoutée est le **typage statique**, c'est-à-dire la possibilité de
décrire le type des données (texte, nombre, objet…) afin que les erreurs soient détectées
**à la compilation**, avant même d'exécuter le programme.

```text
TypeScript (.ts)  --[compilation: tsc]-->  JavaScript (.js)  --[exécution: node]-->  Résultat
```

### Pourquoi typer ?

- **Détecter les erreurs tôt** : une faute de type est signalée dans l'éditeur, pas en production.
- **Améliorer l'autocomplétion** : l'éditeur connaît la forme de vos données.
- **Documenter le code** : le type sert de documentation vivante et fiable.
- **Faciliter la maintenance** : un refactoring est plus sûr quand les types sont explicites.

### Mettre en place l'environnement

```bash
# 1. Installer TypeScript (globalement ou dans le projet)
npm install -g typescript

# 2. Compiler un fichier
tsc src/01_helloworld.ts

# 3. Exécuter le résultat JavaScript
node src/01_helloworld.js

# 4. Mode "watch" : recompile automatiquement à chaque sauvegarde
tsc -w
```

> 💡 **Astuce formateur** : ouvrez chaque fichier `.ts`, modifiez une valeur, sauvegardez et
> observez la recompilation automatique. La boucle « modifier → compiler → exécuter » est la
> meilleure façon d'ancrer les notions.

---

## 1 — Introduction & bases

📄 Fichier : `src/01_helloworld.ts`

### Objectif pédagogique
Découvrir la **syntaxe de base** : déclarer des variables typées, manipuler des chaînes et
écrire une première fonction typée.

### Les types primitifs

```typescript
let isDone: boolean = false;   // vrai / faux
let height: number = 6;        // entier ou décimal (pas de distinction)
let firstName: string = "Vincent"; // texte
```

La syntaxe d'une **annotation de type** est toujours la même :

```text
let  nomDeLaVariable  :  Type  =  valeur ;
            │           │     │      │
        identifiant   deux-points  type  affectation
```

### Concaténation vs Template String

```typescript
// Concaténation classique avec +
let phrase1: string = "Bonjour " + firstName;

// Template String avec backticks `` et ${} : plus lisible
let phrase2: string = `Au revoir ${firstName}`;
```

> ✅ **Bonne pratique** : privilégiez les *template strings* (backticks) dès qu'il y a une
> variable à insérer. Le code reste lisible et évite les erreurs de `+` et d'espaces.

### Première fonction typée

```typescript
function greeterString(person: string): string {
    return "Bonjour depuis la fonction " + person;
}
```

On type **les paramètres** (`person: string`) **et la valeur de retour** (`: string` après
les parenthèses). Si vous retournez autre chose qu'une chaîne, TypeScript le signale.

### 🧪 Exercice
1. Déclarez une variable `age` de type `number` et affichez « J'ai X ans » avec une template string.
2. Écrivez une fonction `doubler(n: number): number` qui retourne le double de `n`.

---

## 2 — Le type `any`

📄 Fichier : `src/02_any.ts`

### Objectif pédagogique
Comprendre ce que fait `any`, **pourquoi il est dangereux** et par quoi le remplacer.

### Qu'est-ce que `any` ?

`any` **désactive toute vérification** : la variable accepte n'importe quelle valeur.

```typescript
let level; // pas d'annotation => type inféré : any
level = 1;   // OK
level = 'a'; // OK aussi (aucune erreur !)
```

### Le risque en paramètre de fonction

```typescript
function render(document: any) {
    // TypeScript ne vérifie rien : document.toto() compile,
    // mais plantera à l'exécution si la propriété n'existe pas.
    console.log(document);
}

render(42);
render("Bonjour");
render({ nom: "Stéphane" });
```

### Tableau comparatif

| | Avantage | Inconvénient |
|---|----------|--------------|
| `any` | Flexibilité immédiate | Perte de l'autocomplétion, des vérifications et de la sécurité |

### Que faire à la place ?

- Utilisez **`unknown`** (voir chapitre 5) si vous devez accepter plusieurs types mais
  voulez vérifier avant utilisation.
- Déclarez des **types précis** pour les API et fonctions partagées.
- Activez **`"noImplicitAny": true`** dans `tsconfig.json` pour forcer les annotations.

> ⚠️ **À retenir** : `any` = facilité rapide mais **dette technique**. C'est une porte de
> sortie, pas une solution.

---

## 3 — Les tableaux (`Array`)

📄 Fichier : `src/03_array.ts`

### Objectif pédagogique
Manipuler des **collections typées** et découvrir les méthodes courantes.

### Deux syntaxes équivalentes

```typescript
let myNumbers: number[];              // syntaxe "type[]"
let fruits: Array<string> = ["pomme", "banane", "cerise"]; // syntaxe générique
```

Choisissez celle qui vous semble la plus lisible — **soyez cohérent** dans une équipe.

### Parcourir avec `forEach`

```typescript
myNumbers = [1, 2, 3];
myNumbers.forEach(n => console.log(n));
fruits.forEach(f => console.log("Je mange une " + f));
```

### Les méthodes essentielles

```typescript
fruits.push("poire");                          // ajoute un élément

let myDoubles = myNumbers.map(n => n * 2);     // transforme  -> [2,4,6,8]
let myBig     = myNumbers.filter(n => n > 2);  // filtre      -> [3,4]
let trouve    = myNumbers.find(n => n === 7);  // recherche   -> number | undefined
```

| Méthode | Rôle | Retour |
|---------|------|--------|
| `push` | Ajouter à la fin | nouvelle longueur |
| `map` | Transformer chaque élément | **nouveau** tableau |
| `filter` | Garder ceux qui passent le test | **nouveau** tableau |
| `find` | Trouver le premier correspondant | l'élément ou `undefined` |

> 💡 Notez le type de `find` : `number | undefined`. TypeScript vous **force à gérer** le cas
> « non trouvé ».

### Immutabilité avec `readonly`

```typescript
const jours: readonly string[] = ["lundi", "mardi", "mercredi"];
// jours.push("jeudi"); // ERREUR : readonly interdit les mutations
```

### 🧪 Exercice
À partir de `[5, 12, 8, 20, 3]`, créez un tableau des nombres supérieurs à 10, puis la somme
de tous les éléments avec `reduce`.

---

## 4 — Les tuples

📄 Fichier : `src/04_tuple.ts`

### Objectif pédagogique
Comprendre un **tableau à structure fixe** : nombre d'éléments **et** type de chaque position
connus à l'avance.

### Déclaration

```typescript
let personne: [string, number];
personne = ['Alexis', 38];
// personne = ['Alexis'];     // ERREUR : il manque le number
// personne = [38, 'Alexis']; // ERREUR : ordre incorrect
```

TypeScript connaît le type **à chaque position** :

```typescript
console.log(personne[0].toUpperCase()); // [0] est un string
console.log(personne[1].toFixed(2));    // [1] est un number
```

### Tuple avec labels (TS ≥ 4.0)

```typescript
let coordonnees: [x: number, y: number, z: number];
coordonnees = [12.5, 48.8, 200];
```

Les labels **améliorent la lisibilité** sans changer le comportement.

### Tuple optionnel

```typescript
let paire: [string, number?]; // le "?" rend le dernier élément facultatif
paire = ['Seule'];
paire = ['Duo', 42];
```

### Cas pratique : tableau de tuples

```typescript
const utilisateurs: [nom: string, age: number][] = [
    ["Bob", 25],
    ["Carla", 52],
    ["Dan", 19],
];

// Déstructuration à la volée
utilisateurs.forEach(([nom, age]) => {
    console.log(nom + " a " + age + " ans");
});
```

### 🧪 Exercice corrigé
Faire vieillir chaque utilisateur d'un an et lui souhaiter son anniversaire :

```typescript
let utilisateurs2: [string, number][] = utilisateurs.map(([n, a]) => {
    console.log("Bon anniversaire " + n + " pour tes " + (a + 1) + " ans");
    return [n, a + 1];
});
```

---

## 5 — Le type `unknown`

📄 Fichier : `src/05_unknown.ts`

### Objectif pédagogique
Découvrir l'alternative **sûre** à `any` : accepter n'importe quelle valeur mais **obliger à
vérifier** son type avant de l'utiliser.

### `any` vs `unknown` : la différence cruciale

| | `any` | `unknown` |
|---|-------|-----------|
| Accepte toute valeur | ✅ | ✅ |
| Utilisation directe sans vérifier | ✅ (dangereux) | ❌ (interdit) |
| Sécurité | ❌ | ✅ |

### Exemple

```typescript
let mystere: unknown;
mystere = 42;
mystere = "bonjour";
mystere = { nom: "Alice" };

// console.log(mystere.toUpperCase()); // ERREUR : il faut d'abord vérifier !

if (typeof mystere === "string") {
    console.log(mystere.toUpperCase()); // ici TypeScript SAIT que c'est un string
}
```

### Vérifier un objet venant d'une API

```typescript
function traiterReponseAPI(data: unknown): void {
    if (typeof data === "object" && data !== null && "nom" in data) {
        console.log(data.nom);
    } else {
        console.log("Format de données inattendu");
    }
}

traiterReponseAPI({ nom: "Alice" });   // affiche "Alice"
traiterReponseAPI({ prenom: "Alice" }); // "Format inattendu"
traiterReponseAPI(42);                  // "Format inattendu"
```

> ✅ **À retenir** : `unknown` est le choix idéal pour les données externes (API, JSON,
> entrées utilisateur). Il vous oblige à valider avant d'utiliser — c'est une protection.

---

## 6 — Les fonctions

📄 Fichier : `src/06_fonction.ts`

### Objectif pédagogique
Maîtriser toutes les variantes de paramètres et de retours d'une fonction typée.

### Cas 1 — Fonction basique

```typescript
function additionner(a: number, b: number): number {
    return a + b;
}
```

### Cas 2 — Paramètre optionnel (`?`)

```typescript
function saluer(prenom: string, titre?: string): string {
    if (titre) {
        return `Bonjour ${titre} ${prenom}`;
    }
    return `Bonjour ${prenom}`;
}
```

Un paramètre optionnel vaut `undefined` s'il est absent.

### Cas 3 — Valeur par défaut

```typescript
function puissance(base: number, exposant: number = 2): number {
    return Math.pow(base, exposant);
}
puissance(3);    // 9  (exposant = 2 par défaut)
puissance(3, 3); // 27
```

### Cas 4 — Paramètre rest (`...`)

```typescript
function somme(...nombres: number[]): number {
    return nombres.reduce((total, n) => total + n, 0);
}
somme(1, 2, 3);        // 6
somme(10, 20, 30, 40); // 100
```

### Cas 5 — Retour `void`

```typescript
function afficherMessage(message: string): void {
    console.log(`[INFO] ${message}`);
    // pas de "return valeur"
}
```

`void` = la fonction ne retourne **rien d'utile** (effets de bord : affichage, DOM…).

### Cas 6 — Surcharge (overloading)

```typescript
function formater(valeur: number): string;          // signature 1
function formater(valeur: string): string;          // signature 2
function formater(valeur: number | string): string { // implémentation
    if (typeof valeur === "number") {
        return valeur.toFixed(2);
    }
    return valeur.trim().toUpperCase();
}
```

### Cas 7 — Typer une variable « fonction »

```typescript
let operation: (x: number, y: number) => number;
operation = additionner;
```

### 🧪 Exercice
Écrivez une fonction `moyenne(...notes: number[]): number` qui calcule la moyenne d'un nombre
variable de notes.

---

## 7 — Les énumérations (`enum`)

📄 Fichier : `src/07_enums.ts`

### Objectif pédagogique
Remplacer les « nombres magiques » et chaînes répétées par des **constantes nommées**.

### Enum numérique (valeurs auto-incrémentées)

```typescript
enum Direction {
    Haut,    // 0
    Bas,     // 1
    Gauche,  // 2
    Droite,  // 3
}

let deplacement: Direction = Direction.Haut;
console.log(deplacement);    // 0
console.log(Direction[0]);   // "Haut" (lookup inverse)
```

### Enum avec valeurs personnalisées

```typescript
enum CodeHTTP {
    OK = 200,
    CreePar = 201,
    NonTrouve = 404,
    mystere = 405,
    Erreur = 500,
}
```

### Utilisation dans un `switch`

```typescript
function gereCodeReponse(code: CodeHTTP): void {
    switch (code) {
        case CodeHTTP.OK:
        case CodeHTTP.CreePar:
            console.log("Succès !");
            break;
        case CodeHTTP.Erreur:
            console.log("Erreur interne du serveur !");
            break;
        case CodeHTTP.NonTrouve:
            console.log("Ressource introuvable !");
            break;
        default:
            console.log(`Code non géré: ${code}`);
    }
}
```

> 💡 Un `enum` rend le code **plus lisible** (`CodeHTTP.NonTrouve` au lieu de `404`) et
> **moins sujet aux fautes de frappe**.

---

## 8 — Les classes

📄 Fichier : `src/08_classe.ts`

### Objectif pédagogique
Découvrir la **programmation orientée objet** en TypeScript : structure, comportement et
**modificateurs de visibilité**.

### Classe simple

```typescript
class Personne {
    nom: string;
    age: number;

    constructor(nom: string, age: number = 0) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter(): string {
        return `Je m'appelle ${this.nom}, et j'ai ${this.age} ans.`;
    }
}

let alice = new Personne("Alice", 45);
console.log(alice.sePresenter());
```

### Les modificateurs de visibilité

| Modificateur | Accès interne | Sous-classes | Extérieur |
|--------------|:-------------:|:------------:|:---------:|
| `public` (défaut) | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |
| `readonly` | lecture seule après initialisation | | |
| `static` | appartient à la **classe**, pas à l'instance | | |
| `abstract` | doit être implémenté par une sous-classe | | |

### `private` — encapsulation

```typescript
class CompteBancaire {
    private _solde: number;

    constructor(soldeInitial: number = 0) {
        this._solde = soldeInitial;
    }
    deposer(montant: number): void { this._solde += montant; }
    consulter(): number { return this._solde; }
}
// compte._solde     // ❌ ERREUR : private
```

### `protected` et héritage

```typescript
class Animal {
    protected nom: string;
    constructor(nom: string) { this.nom = nom; }
}
class Chien extends Animal {
    aboyer(): string { return `${this.nom} dit : Wouf !`; } // accès OK
}
```

### Raccourci du constructeur (parameter properties)

```typescript
class Etudiant {
    constructor(
        public nom: string,
        private note: number,
        readonly id: number
    ) {}
    bulletin(): string { return `${this.nom} (#${this.id}) : ${this.note}/20`; }
}
```

Déclarer + initialiser en une seule ligne : **moins de bruit**.

### Getter / Setter

```typescript
class Temperature {
    private _celsius: number = 0;
    get celsius(): number { return this._celsius; }
    set celsius(valeur: number) {
        if (valeur < -273.15) throw new Error("En dessous du zéro absolu !");
        this._celsius = valeur;
    }
    get fahrenheit(): number { return this._celsius * 9 / 5 + 32; }
}
```

### `static` et `abstract`

```typescript
class MathUtil {
    static readonly PI = 3.14159;
    static carre(x: number): number { return x * x; }
}
MathUtil.carre(4); // 16, sans instancier

abstract class Forme {
    constructor(public couleur: string) {}
    abstract aire(): number;            // contrat à respecter
    decrire(): string { return `Forme ${this.couleur} d'aire ${this.aire()}`; }
}
class Carre extends Forme {
    constructor(couleur: string, private cote: number) { super(couleur); }
    aire(): number { return this.cote * this.cote; }
}
```

> ✅ **Bonnes pratiques** : mettre `private` par défaut, exposer le minimum, utiliser
> `readonly` pour les identifiants, et `abstract` pour définir un contrat partagé.

---

## 9 — Les objets

📄 Fichier : `src/09_objet.ts`

### Objectif pédagogique
Typer la **structure d'un objet** : inline, via un alias `type`, avec options et clés
dynamiques.

### Typage inline

```typescript
let produit: { nom: string; prix: number; disponible: boolean };
produit = { nom: "Clavier", prix: 59.99, disponible: true };
```

### Propriétés optionnelles et `readonly`

```typescript
let article: { titre: string; description?: string };
let config: { readonly apiUrl: string; timeout: number };
config.timeout = 5000;     // OK
// config.apiUrl = "...";  // ERREUR : readonly
```

### Alias de type (`type`)

```typescript
type Coordonnees = { x: number; y: number };
type Rectangle = { origine: Coordonnees; largeur: number; hauteur: number };

function aire(r: Rectangle): number {
    return r.largeur * r.hauteur;
}
```

Un alias **nomme** une forme pour la réutiliser partout.

### Index signature (clés dynamiques)

```typescript
type Dictionnaire = { [cle: string]: string };
const traductions: Dictionnaire = { bonjour: "hello", chat: "cat" };
traductions["maison"] = "house"; // ajout dynamique autorisé
```

### Déstructuration typée

```typescript
type Employe = { nom: string; poste: string; salaire: number };
const employe: Employe = { nom: "Bob", poste: "Développeur", salaire: 3500 };
const { nom: nomEmploye, salaire } = employe; // renommage possible
```

### Spread et fusion (immutabilité)

```typescript
const base: Employe = { nom: "Carla", poste: "Designer", salaire: 3200 };
const employePromu: Employe = { ...base, poste: "Lead Designer", salaire: 4000 };
// "base" reste inchangé
```

---

## 10 — Les interfaces

📄 Fichier : `src/10_interface.ts`

### Objectif pédagogique
Définir des **contrats** : décrire la forme qu'un objet ou une classe **doit** respecter.

### Interface simple

```typescript
interface Animal {
    nom: string;
    age: number;
}
const chat: Animal = { nom: "Milo", age: 3 };
```

### Optionnel et readonly

```typescript
interface Utilisateur {
    readonly id: number;
    nom: string;
    email?: string;
}
```

### Méthodes dans une interface

```typescript
interface Forme {
    couleur: string;
    aire(): number;
    perimetre(): number;
    decrire(detail: boolean): string;
}
```

### Extension (héritage)

```typescript
interface Vehicule { marque: string; vitesseMax: number; }
interface VehiculeElectrique extends Vehicule {
    autonomieKm: number;
    recharger(): void;
}
```

### Implémentation par une classe (`implements`)

```typescript
interface Serialisable {
    id: number;
    versJSON(): string;
}
class Produit implements Serialisable {
    constructor(public id: number, public nom: string, public prix: number) {}
    versJSON(): string {
        return JSON.stringify({ id: this.id, nom: this.nom, prix: this.prix });
    }
}
```

### Fusion de déclarations

```typescript
interface Configuration { langue: string; }
interface Configuration { theme: string; } // fusionnée automatiquement
const appConfig: Configuration = { langue: "fr", theme: "sombre" };
```

### `interface` vs `type`

| Fonctionnalité | `interface` | `type` |
|----------------|:-----------:|:------:|
| Décrire un objet | ✅ | ✅ |
| Étendre (`extends`) | ✅ | ✅ |
| Fusion de déclarations | ✅ | ❌ |
| Implémenter dans une classe | ✅ | ✅ |
| Union / intersection | ❌ | ✅ |
| Types primitifs / tuples | ❌ | ✅ |

> 👉 Préférez **`interface`** pour les objets et les classes, **`type`** pour les unions,
> intersections et alias simples.

---

## 11 — Les unions (`A | B`)

📄 Fichier : `src/11_union.ts`

### Objectif pédagogique
Permettre à une variable d'être **d'un type OU d'un autre**.

### Union simple

```typescript
let identifiant: number | string;
identifiant = 42;        // OK
identifiant = "abc-123"; // OK
// identifiant = true;   // ERREUR
```

### Type guard avec `typeof`

```typescript
function afficherIdentifiant(id: number | string): void {
    if (typeof id === "string") {
        console.log(`ID texte : ${id.toUpperCase()}`);
    } else {
        console.log(`ID numérique : ${id.toFixed(0)}`);
    }
}
```

### Union de types littéraux

```typescript
type Direction = "haut" | "bas" | "gauche" | "droite";
function deplacer(direction: Direction): void { /* ... */ }
deplacer("haut");    // OK
// deplacer("nord"); // ERREUR
```

Plus léger qu'un `enum` pour restreindre des valeurs.

### Union discriminée (discriminated union)

```typescript
type Cercle    = { type: "cercle"; rayon: number };
type Rectangle = { type: "rectangle"; largeur: number; hauteur: number };
type Forme = Cercle | Rectangle;

function calculerAire(forme: Forme): number {
    if (forme.type === "cercle") {
        return Math.PI * forme.rayon ** 2;
    } else {
        return forme.largeur * forme.hauteur;
    }
}
```

La propriété commune `type` permet à TypeScript de **distinguer chaque cas**.

---

## 12 — Les intersections (`A & B`)

📄 Fichier : `src/12_intersection.ts`

### Objectif pédagogique
**Combiner** plusieurs types en un seul qui doit respecter **toutes** leurs propriétés.

### Intersection simple

```typescript
type APersonne = { nom: string; age: number };
type AContact  = { email: string; telephone: string };
type EmployeComplet = APersonne & AContact;

const employe: EmployeComplet = {
    nom: "Alice", age: 30,
    email: "alice@exemple.com", telephone: "06 00 00 00 00",
};
```

### Enrichir un type existant

```typescript
type Produit  = { nom: string; prix: number };
type AvecStock = Produit & { quantite: number };
const article: AvecStock = { nom: "Clavier", prix: 59.99, quantite: 150 };
```

### Avec des interfaces

```typescript
interface Horodatable { creeLe: Date; modifieLe: Date; }
interface Document    { titre: string; contenu: string; }
type DocumentSauvegarde = Document & Horodatable;
```

### Union vs Intersection — la synthèse

| Opérateur | Signification | Image mentale |
|-----------|---------------|---------------|
| `A \| B` (union) | A **OU** B | « je peux être l'un ou l'autre » → flexibilité |
| `A & B` (intersection) | A **ET** B | « je dois être les deux » → composition |

---

## 13 — Le type `never`

📄 Fichier : `src/13_never.ts`

### Objectif pédagogique
Comprendre le type qui **ne peut jamais avoir de valeur** et son usage pour garantir
l'exhaustivité.

### Cas 1 — Fonction qui lève toujours une erreur

```typescript
function lancerErreur(message: string): never {
    throw new Error(message); // ne retourne jamais
}

function diviser(a: number, b: number): number {
    if (b === 0) {
        lancerErreur("Division par zéro interdite !");
    }
    return a / b;
}
```

### Cas 2 — Boucle infinie

```typescript
// function boucleInfinie(): never {
//     while (true) { /* ... */ }
// }
```

### Cas 3 — Exhaustivité (le plus puissant)

```typescript
type Couleur = "rouge" | "vert" | "bleu";

function decrireCouleur(couleur: Couleur): string {
    switch (couleur) {
        case "rouge": return "La couleur rouge, chaleureuse";
        case "vert":  return "La couleur verte, naturelle";
        case "bleu":  return "La couleur bleue, apaisante";
        default:
            // Si on ajoute "jaune" à Couleur sans case, ERREUR ici !
            const casImpossible: never = couleur;
            throw new Error(`Couleur non gérée : ${casImpossible}`);
    }
}
```

> 💡 Cette technique transforme un oubli de `case` en **erreur de compilation** : un filet de
> sécurité précieux quand un type évolue.

### `never` vs `void` vs `undefined`

| Type | Signification |
|------|---------------|
| `void` | La fonction se termine mais ne retourne rien d'utile |
| `undefined` | La fonction retourne explicitement `undefined` |
| `never` | La fonction ne se termine **jamais** (throw ou boucle infinie) |

---

## 14 — Les fonctions fléchées

📄 Fichier : `src/14_fonction_flechee.ts`

### Objectif pédagogique
Maîtriser la **syntaxe compacte ES6** et comprendre son comportement particulier avec `this`.

### Syntaxe de base

```typescript
// Forme longue (bloc + return)
const multiplier = (a: number, b: number): number => {
    return a * b;
};

// Forme courte (expression unique, sans return)
const multiplierCourt = (a: number, b: number): number => a * b;
```

### Un seul paramètre / aucun paramètre

```typescript
const doubler = (n: number): number => n * 2;
const direBonjour = (): string => "Bonjour tout le monde !";
```

### Retour d'un objet littéral

```typescript
// Les parenthèses autour de {} sont OBLIGATOIRES
const creerUtilisateur = (nom: string, age: number): { nom: string; age: number } =>
    ({ nom, age });
```

### L'usage roi : `map`, `filter`, `reduce`

```typescript
const notes: number[] = [12, 8, 17, 5, 14, 9];

const notesSur20 = notes.map(n => n * 3);              // transformer
const notesSup10 = notes.filter(n => n > 10);          // filtrer
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length; // accumuler
```

### `this` et fonctions fléchées

```typescript
class Minuteur {
    secondes: number = 0;
    demarrer(): void {
        // Une arrow function capture le "this" du contexte englobant.
        // Avec function() {...}, "this" serait undefined en mode strict.
        const tick = () => {
            this.secondes++;
            console.log(`Secondes écoulées : ${this.secondes}`);
        };
        tick(); tick(); tick();
    }
}
```

> ⚠️ **Point clé** : une fonction fléchée **ne crée pas son propre `this`**. C'est ce qui la
> rend idéale dans les callbacks à l'intérieur d'une méthode de classe.

### Typer une variable « fonction fléchée »

```typescript
const diviser: (a: number, b: number) => number = (a, b) => a / b;
```

---

## Synthèse finale

### Les 7 réflexes à retenir

1. **Toujours typer** les paramètres et retours de fonction.
2. **Fuir `any`**, préférer `unknown` ou un type précis.
3. **`readonly`** pour ce qui ne doit pas changer.
4. **`interface`** pour les objets/classes, **`type`** pour unions/intersections.
5. **Type guards** (`typeof`, `in`) avant d'utiliser une union ou un `unknown`.
6. **`private` par défaut** dans les classes, exposer le minimum.
7. **`never` + `switch`** pour garantir l'exhaustivité des cas.

### Pour aller plus loin

- Documentation officielle : <https://www.typescriptlang.org/docs/>
- Playground en ligne (tester sans installation) : <https://www.typescriptlang.org/play>
- Les génériques (`<T>`), les types utilitaires (`Partial`, `Pick`, `Omit`…) et les
  décorateurs — prochaines étapes naturelles, notamment avant d'aborder **Angular**.