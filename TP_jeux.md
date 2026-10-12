# TP — Gestion d'une bibliothèque de jeux vidéo


## Contexte

Vous développez un petit système de gestion d'une **bibliothèque de jeux vidéo**. Tout se fait dans un seul fichier TypeScript : `15_tp_jeux.ts`.

---

## Étape 1 — Enum : les genres de jeux

Créez un **enum** `Genre` avec les valeurs suivantes :
- `Action`
- `RPG`
- `Strategie`
- `Sport`

---

## Étape 2 — Interface : définir un jeu

Créez une **interface** `IJeu` avec les propriétés suivantes :

| Propriété | Type | Obligatoire ? |
|:----------|:-----|:--------------|
| `id` | `number` (readonly) | oui |
| `titre` | `string` | oui |
| `genre` | `Genre` (l'enum) | oui |
| `note` | `number` | oui |
| `multijoueur` | `boolean` | non (optionnel) |

---

## Étape 3 — Type & intersection : jeu avec stock

1. Créez un **type alias** `InfoStock` avec :
   - `quantite: number`
   - `magasin: string`

2. Créez un **type intersection** `JeuEnStock` = `IJeu & InfoStock`

---

## Étape 4 — Tableau : créer la bibliothèque

Créez un tableau `bibliotheque` de type `JeuEnStock[]` contenant **au moins 5 jeux**. Variez les genres, les notes (entre 0 et 20) et les quantités.

---

## Étape 5 — Tuple : le podium

Créez un **tuple** `podium` de type `[string, string, string]` qui contient les titres des 3 jeux les mieux notés de la bibliothèque.

> **Indice** : triez le tableau avec `.sort()` puis récupérez les 3 premiers titres.

---

## Étape 6 — Fonctions typées

Écrivez les **fonctions** suivantes (utilisez le mot-clé `function`) :

### a) `rechercherParGenre(jeux: JeuEnStock[], genre: Genre): JeuEnStock[]`
Retourne tous les jeux du genre donné. Utilisez `.filter()` avec une **fonction fléchée**.

### b) `calculerMoyenne(jeux: JeuEnStock[]): number`
Retourne la note moyenne de tous les jeux. Utilisez `.reduce()` avec une **fonction fléchée**.

### c) `afficherJeu(jeu: JeuEnStock): void`
Affiche dans la console : `"[ACTION] Zelda — Note: 18/20 — Stock: 5 (Fnac)"`

---

## Étape 7 — Union de types

Créez une fonction :

```typescript
function rechercherJeu(critere: string | number): JeuEnStock | undefined
```

- Si `critere` est un **string** → chercher par titre (`.find()`)
- Si `critere` est un **number** → chercher par id (`.find()`)

Utilisez un **type guard** (`typeof`) pour distinguer les deux cas.

---

## Étape 8 — Unknown : données externes

Simulez la réception de données d'une API avec cette fonction :

```typescript
function traiterDonneesExternes(data: unknown): string
```

- Si `data` est un **string**, retournez-le en majuscules
- Si `data` est un **object** non null avec une propriété `titre`, retournez le titre
- Sinon, retournez `"Format inconnu"`

Testez avec :
```typescript
traiterDonneesExternes("zelda")
traiterDonneesExternes({ titre: "Mario" })
traiterDonneesExternes(42)
```

---

## Étape 9 — Never : exhaustivité

Créez une fonction :

```typescript
function decrireGenre(genre: Genre): string
```

Utilisez un `switch` pour retourner une description pour chaque genre. Dans le `default`, utilisez le pattern `never` (comme dans `06_never.ts`) pour garantir l'exhaustivité.

---

## Étape 10 — Fonctions fléchées & enchaînement

En une seule chaîne d'appels (avec des fonctions fléchées), réalisez :

1. Filtrer les jeux avec une note **≥ 15**
2. Trier par note **décroissante**
3. Afficher chaque jeu avec `afficherJeu`

```typescript
bibliotheque
    .filter(...)
    .sort(...)
    .forEach(...)
```

---

## Bonus — Paramètre par défaut & rest

Créez une fonction :

```typescript
function resumeBibliotheque(titre: string = "Ma bibliothèque", ...jeux: JeuEnStock[]): void
```

Elle affiche :
```
=== Ma bibliothèque ===
5 jeux — Moyenne : 14.60/20
```

 