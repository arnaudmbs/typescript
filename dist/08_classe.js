"use strict";
// ============================================================
// CLASSES & MODIFICATEURS DE VISIBILITÉ en TypeScript
// ============================================================
// Une classe est un "modèle" qui décrit la structure et le
// comportement d'un type d'objet. TypeScript ajoute à la classe
// JavaScript le typage statique et les modificateurs d'accès
// (public, private, protected, readonly...).
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CAS 1 : Déclaration d'une classe simple
// ============================================================
// - "class" déclare la classe.
// - Les propriétés sont déclarées AVANT le constructeur, avec
//   leur type. Le constructeur initialise les propriétés.
// - On crée une instance avec "new".
class Personne {
    // Attributs
    nom;
    age;
    // Constructor
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    // Méthodes spécifiques
    // condition ? résultat si vrai : résultat sinon
    sePresenter() {
        return `Je m'appelle ${this.nom}, et j'ai ${this.age > 38 ? 38 : this.age} ans.`;
    }
}
let alice = new Personne("Alice", 28);
console.log(alice.sePresenter());
// ============================================================
// CAS 2 : public (par défaut)
// ============================================================
// "public" = accessible PARTOUT : depuis l'instance, depuis
// les classes filles et depuis l'extérieur.
// C'est la visibilité par défaut si on n'écrit rien.
class Voiture {
    marque; // explicite
    modele; // implicite : public aussi
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
}
const v = new Voiture("Renault", "Clio");
console.log(v.marque, v.modele); // accès libre depuis l'extérieur
// ============================================================
// CAS 3 : private — accès interne uniquement
// ============================================================
// "private" = accessible UNIQUEMENT à l'intérieur de la classe.
// Pratique pour cacher des détails d'implémentation.
class CompteBancaire {
    _solde; // inaccessible depuis l'extérieur
    constructor(soldeInitial = 0) {
        this._solde = soldeInitial;
    }
    // Méthode publique pour interagir avec la donnée privée
    deposer(montant) {
        this._solde += montant;
    }
    consulter() {
        return this._solde;
    }
}
const compte = new CompteBancaire(100);
compte.deposer(50);
console.log(compte.consulter()); // 150
// console.log(compte.solde);    // ❌ ERREUR : 'solde' est private
// ============================================================
// CAS 4 : protected — accessible aux classes filles
// ============================================================
// "protected" = accessible dans la classe ET ses sous-classes,
// mais PAS depuis l'extérieur.
class Animal {
    nom; // visible par les enfants
    constructor(nom) {
        this.nom = nom;
    }
}
class Chien extends Animal {
    aboyer() {
        // accès autorisé à "nom" car protected
        return `${this.nom} dit : Wouf !`;
    }
}
const rex = new Chien("Rex");
console.log(rex.aboyer()); // "Rex dit : Wouf !"
//console.log(rex.nom);   // ❌ ERREUR : 'nom' est protected
// ============================================================
// CAS 5 : readonly — propriété en lecture seule
// ============================================================
// "readonly" interdit la modification APRÈS l'initialisation.
// Se combine avec public / private / protected.
class Livre {
    isbn; // ne peut être modifié après le constructeur
    titre;
    constructor(isbn, titre) {
        this.isbn = isbn;
        this.titre = titre;
    }
}
const l = new Livre("978-2-1234", "TS pour les curieux");
l.titre = "TS pour tous"; // ✅ autorisé
//l.isbn = "000";        // ❌ ERREUR : readonly
console.log(l.isbn);
// ============================================================
// CAS 6 : Raccourci du constructeur (parameter properties)
// ============================================================
// On peut DÉCLARER + INITIALISER une propriété directement dans
// les paramètres du constructeur en ajoutant un modificateur.
// Cela évite la duplication "déclaration + this.x = x".
class Etudiant {
    nom;
    note;
    id;
    constructor(nom, note, id) {
        this.nom = nom;
        this.note = note;
        this.id = id;
    }
    bulletin() {
        return `${this.nom} (#${this.id}) : ${this.note}/20`;
    }
}
const e = new Etudiant("Marc", 15, 42);
console.log(e.bulletin()); // "Marc (#42) : 15/20"
console.log(e.nom); // ✅ public
// console.log(e.note);    // ❌ private
// ============================================================
// CAS 7 : getter / setter
// ============================================================
// Les "get" et "set" permettent d'exposer une propriété tout
// en contrôlant la lecture et l'écriture (validation, calcul...).
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(valeur) {
        if (valeur < -273.15) {
            throw new Error("En dessous du zéro absolu !");
        }
        this._celsius = valeur;
    }
    // Propriété calculée en lecture seule
    get fahrenheit() {
        return this._celsius * 9 / 5 + 32;
    }
}
const t = new Temperature();
t.celsius = 25; // utilise le setter
console.log(t.celsius); // 25 (getter)
console.log(t.fahrenheit); // 77
// ============================================================
// CAS 8 : static — membre attaché à la classe, pas à l'instance
// ============================================================
// Une propriété ou méthode "static" appartient à la CLASSE.
// On y accède sans créer d'instance.
class MathUtil {
    static PI = 3.14159;
    static carre(x) {
        return x * x;
    }
}
console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.carre(4)); // 16
// ============================================================
// CAS 9 : abstract — classe / méthode à implémenter
// ============================================================
// Une classe "abstract" ne peut PAS être instanciée directement.
// Les méthodes "abstract" doivent être implémentées par les filles.
class Forme {
    couleur;
    constructor(couleur) {
        this.couleur = couleur;
    }
    decrire() {
        return `Forme ${this.couleur} d'aire ${this.aire()}`;
    }
}
class Carre extends Forme {
    cote;
    constructor(couleur, cote) {
        super(couleur);
        this.cote = cote;
    }
    aire() {
        return this.cote * this.cote;
    }
}
const c = new Carre("bleu", 5);
console.log(c.decrire()); // "Forme bleu d'aire 25"
// new Forme("rouge");             // ❌ ERREUR : classe abstraite
// ============================================================
// RÉSUMÉ : modificateurs de visibilité
// ============================================================
// | Modificateur | Accès interne | Sous-classes | Extérieur |
// |--------------|---------------|--------------|-----------|
// | public       |      ✅       |     ✅       |    ✅     |
// | protected    |      ✅       |     ✅       |    ❌     |
// | private      |      ✅       |     ❌       |    ❌     |
// | readonly     |   lecture seule après initialisation       |
// | static       |   appartient à la classe, pas à l'instance |
// | abstract     |   doit être implémenté par une sous-classe |
//
// Bonnes pratiques :
// - Mettre "private" par défaut, exposer le minimum nécessaire.
// - Préférer les "parameter properties" pour réduire le bruit.
// - Utiliser "readonly" pour les identifiants et données immuables.
// - Utiliser "abstract" pour définir un contrat partagé entre classes.
