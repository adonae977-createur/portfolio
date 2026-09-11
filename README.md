# Portfolio — Rodrigue Donatien Sawadogo

Portfolio professionnel : entrepreneur, développeur web & PWA, gestion de projets, sport & technologie, menuiserie & agencement.

**Production :** https://rodrigue-sawadogo-portfolio.web.app
**Repository :** https://github.com/adonae977-createur/portfolio

## Stack

- React 18 + Vite 5
- Tailwind CSS v4 (via `@tailwindcss/vite`, config dans `src/index.css` avec `@theme`)
- React Router v6
- Firebase Hosting (déploiement statique, pas de backend nécessaire pour l'instant)

Aucune base de données/backend requis pour le contenu actuel — le site est 100% statique (contenu dans `src/data/`). Le formulaire de contact ouvre le client email de l'utilisateur (`mailto:`), sans serveur.

## Architecture

```
src/
  components/      Navbar, Footer, Layout, StatusBadge (réutilisables)
  data/            profile.js (identité, expertise, timeline), projects.js (tous les projets + études de cas)
  hooks/           useDocumentMeta.js (title/description dynamiques par page)
  pages/           une page par route
public/
  favicon.svg, robots.txt, sitemap.xml
firebase.json      config Hosting (target "portfolio", rewrites SPA)
.firebaserc        alias de projet Firebase + target hosting
```

### Hébergement Firebase — particularité

Ce portfolio est hébergé comme **site secondaire** dans le projet Firebase `my-pro-jet-b7c8c` (project ID historique, sans rapport avec le nom "portfolio" — c'était un projet de test réutilisé pour éviter un nouveau projet, le compte ayant atteint son quota de projets Google Cloud). Le site s'appelle `rodrigue-sawadogo-portfolio` et est isolé de tout autre projet Firebase (pas de partage de Firestore/Auth). Le target hosting `portfolio` (voir `.firebaserc`) pointe vers ce site — c'est pour ça que `firebase deploy --only hosting` déploie automatiquement au bon endroit sans rien préciser d'autre.

## Développement local

```powershell
npm install
npm run dev
```

Ouvre `http://localhost:5173`.

## Build de production

```powershell
npm run build
npm run preview   # pour tester le build localement avant de déployer
```

## Déploiement

```powershell
npm run build
npx firebase deploy --only hosting
```

Déploiement manuel uniquement (pas de CI/CD automatique) — build puis vérification locale avant chaque déploiement.

## Mettre à jour le contenu

- **Profil, coordonnées, timeline, domaines d'expertise** → `src/data/profile.js`
- **Ajouter/modifier un projet** → `src/data/projects.js`. Statuts possibles : `PRODUCTION`, `DEVELOPPEMENT`, `PROTOTYPE`, `CONCEPT`, `A_VERIFIER`. Ne jamais mettre un projet en `PRODUCTION` sans certitude.
- **Ajouter une étude de cas détaillée** → ajouter un objet `caseStudy` au projet (voir les 4 exemples existants : `sirba-live-score`, `bovacs-2026`, `wbst`, `nrc-bogande`) avec les clés `contexte`, `besoin`, `solution`, `role`, `resultats`, `preuves`.
- **Photos/visuels** → à ajouter dans `src/pages/Gallery.jsx` et dans les fiches projets une fois disponibles. Compresser les images avant import (WebP recommandé).
- **CV téléchargeable** → déposer le PDF dans `public/cv.pdf` puis ajouter un lien `<a href="/cv.pdf" download>` (Hero ou Navbar).

Après toute modification de contenu : `npm run dev` pour vérifier visuellement, puis `npm run build && npx firebase deploy --only hosting` pour publier.

## Variables d'environnement

Aucune pour l'instant (site statique, pas de clé Firebase Web SDK nécessaire tant qu'il n'y a pas de backend).

## Statut du projet

En construction progressive — voir `src/data/projects.js` pour le statut réel de chaque réalisation présentée. Informations encore manquantes : photo professionnelle, CV, confirmation des coordonnées de contact, visuels de réalisations, statuts réels de plusieurs projets secondaires.
