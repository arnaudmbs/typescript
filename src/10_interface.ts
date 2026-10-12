// ============================================================
// INTERFACE en TypeScript
// ============================================================
// Une interface définit un "contrat" : elle décrit la forme
// qu'un objet (ou une classe) DOIT respecter.
// Contrairement aux alias "type", les interfaces sont
// extensibles (on peut les fusionner et les étendre).

// ============================================================
// CAS 1 : Interface simple
// ============================================================
// On déclare les propriétés et leurs types.
// Toute variable de ce type DOIT avoir ces propriétés.
interface Animal {
    nom: string;
    age: number;
}

const chat: Animal = { nom: "Milo", age: 3 };
console.log(`${chat.nom} a ${chat.age} ans`); // "Milo a 3 ans"

// ============================================================
// CAS 2 : Propriété optionnelle et readonly
// ============================================================
interface Utilisateur {
    readonly id: number;     // ne peut pas être modifié après création
    nom: string;
    email?: string;          // optionnel : peut être absent
}

const user: Utilisateur = { id: 1, nom: "Alice" };
// user.id = 2; // ERREUR : id est readonly
console.log(user.email); // undefined (absent, mais autorisé)

// ============================================================
// CAS 3 : Méthodes dans une interface
// ============================================================
// On peut déclarer des méthodes en précisant les types
// des paramètres et du retour. L'objet devra les implémenter.
interface Forme {
    couleur: string;
    aire(): number;              // méthode sans paramètre
    perimetre(): number;
    decrire(detail: boolean): string; // méthode avec paramètre
}

// Implémentation concrète de l'interface Forme pour un cercle
const cercle: Forme = {
    couleur: "rouge",
    aire(): number {
        return Math.PI * 5 * 5; // rayon fixé à 5 pour l'exemple
    },
    perimetre(): number {
        return 2 * Math.PI * 5;
    },
    decrire(detail: boolean): string {
        if (detail) {
            return `Cercle ${this.couleur}, aire = ${this.aire().toFixed(2)}`;
        }
        return `Cercle ${this.couleur}`;
    },
};

console.log(cercle.decrire(true));  // "Cercle rouge, aire = 78.54"
console.log(cercle.decrire(false)); // "Cercle rouge"

// ============================================================
// CAS 4 : Extension d'interface (héritage)
// ============================================================
// Une interface peut étendre une ou plusieurs autres interfaces.
// Elle hérite de toutes leurs propriétés.
interface Vehicule {
    marque: string;
    vitesseMax: number;
}

interface VehiculeElectrique extends Vehicule {
    // hérite de marque et vitesseMax
    autonomieKm: number; // propriété supplémentaire
    recharger(): void;
}

const tesla: VehiculeElectrique = {
    marque: "Tesla",
    vitesseMax: 250,
    autonomieKm: 500,
    recharger(): void {
        console.log(`${this.marque} en charge...`);
    },
};

tesla.recharger(); // "Tesla en charge..."
console.log(`${tesla.marque} — autonomie : ${tesla.autonomieKm} km`);

// ============================================================
// CAS 5 : Implémentation d'une interface par une classe
// ============================================================
// Le mot-clé "implements" force une classe à respecter
// le contrat défini par l'interface. TypeScript vérifie que
// toutes les propriétés et méthodes requises sont présentes.
interface Serialisable {
    id: number;
    versJSON(): string; // toute classe qui implemente doit fournir cette méthode
}

class Produit implements Serialisable {
    id: number;
    nom: string;
    prix: number;

    constructor(id: number, nom: string, prix: number) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }

    versJSON(): string {
        // JSON.stringify convertit l'objet en chaîne JSON
        return JSON.stringify({ id: this.id, nom: this.nom, prix: this.prix });
    }
}

const clavier = new Produit(1, "Clavier mécanique", 89.99);
console.log(clavier.versJSON());
// {"id":1,"nom":"Clavier mécanique","prix":89.99}

// ============================================================
// CAS 6 : Fusion de déclarations (declaration merging)
// ============================================================
// Unique aux interfaces : si on redéclare une interface
// avec le même nom, TypeScript FUSIONNE les deux déclarations.
// Très utile pour étendre des types venant de bibliothèques externes.
interface Configuration {
    langue: string;
}

interface Configuration {
    theme: string; // s'ajoute à la déclaration précédente
}

// Configuration regroupe maintenant "langue" ET "theme"
const appConfig: Configuration = { langue: "fr", theme: "sombre" };
console.log(appConfig); // { langue: "fr", theme: "sombre" }

// ============================================================
// RÉSUMÉ : interface vs type
// ============================================================
// | Fonctionnalité              | interface | type  |
// |-----------------------------|-----------|-------|
// | Décrire un objet            |    ✅     |  ✅   |
// | Étendre (extends)           |    ✅     |  ✅   |
// | Fusion de déclarations      |    ✅     |  ❌   |
// | Implémenter dans une classe |    ✅     |  ✅   |
// | Union / intersection        |    ❌     |  ✅   |
// | Types primitifs / tuples    |    ❌     |  ✅   |
// => Préférer "interface" pour les objets et les classes.
// => Préférer "type" pour les unions, intersections et alias simples.
 