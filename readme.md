# Saucer Game

Petit jeu web (soucoupes) écrit en JavaScript et packagé avec Webpack. Ce dépôt contient le code source (`src/`) et permet de construire une version prête à être publiée (dossier `dist/`).

## Contenu
- Sources : `src/`
- Entrée : `src/index.html`
- Images : `src/images/`
- Bundle buildé : `dist/`

## Prérequis
- Node.js (LTS recommandé — >= 14)
- npm (fourni avec Node.js)

## Installation (une seule fois)
Depuis la racine du projet :

```bash
npm install
```

## Générer la version distribuable
Pour produire la version finale à déployer :

```bash
npm run build
```

Le résultat est dans `dist/`. Vous pouvez ouvrir `dist/index.html` localement pour vérifier.

Optionnel — servir `dist/` localement :

```bash
npm run serve-dist
# ou
npm run build-and-serve
```
