# Rapport d’audit

Projet : `matchyourtrip-maquette` · 17/11/2026 14:27:40 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **25 échec(s)**
- Passe : `20261117-132141-rapide-cible` · version ?v=1
- Échecs : **25**
- À regarder : **16**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (16), souris immobile (1), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur / ; absent sur /comment-ca-marche, /faire-un-don, /mon-projet-de-voyage, /themes-et-destinations |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-131239-rapide-cible | rapide | / | toutes | 146 | 17 | 1 | échecs |
| **20261117-132141-rapide-cible** (celle-ci) | rapide | / | toutes | 25 | 16 | 1 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `comment-ca-marche.html` — fichier introuvable : /assets/partage/comment-ca-marche-fr.jpg
- **image de partage** — `faire-un-don.html` — fichier introuvable : /assets/partage/faire-un-don-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `mon-projet-de-voyage.html` — fichier introuvable : /assets/partage/mon-projet-fr.jpg
- **image de partage** — `themes-et-destinations.html` — fichier introuvable : /assets/partage/themes-et-destinations-fr.jpg

### textes qui se chevauchent (17)

- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(4) « Égypte » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(8) « Ouganda » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(1) « Sri Lanka » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(2) « Île Maurice » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(4) « Rodrigues » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(5) « Nosy Be » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(1) > h3 « Son domaine, son expertise » — avec section#pourquoi > ul.fiches > li.fiche:nth-of-type(1) > p « Une destination, une passion ou un type de voyage  » _(390×844 sansWebgl, 390×844 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > h3 « Afrique » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays « Sénégal · Maroc · Algérie · Égypte · Tanzanie · Af » _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(1) « Mexique » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(3) « Guadeloupe & Martinique » _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(2) « Costa Rica » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(3) « Guadeloupe & Martinique » _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(1) « Colombie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(2) « Pérou » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(3) « Brésil » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > h3 « Océan Indien » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays « Sri Lanka · Île Maurice · Île de la Réunion · Rodr » _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-feuille:nth-of-type(2) > div.pastille.hero-pastille > span.pastille-texte « Match ! » — avec div.hero-feuille:nth-of-type(2) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Du rêve au trip, » _(844×390 normal)_

### texte coupé (1)

- **texte coupé** — `/` — section#pourquoi > p.note-main.pourquoi-note « Je trouve mon travel planner à vos côtés, pour un  » — coupé par section#pourquoi « Pourquoi passer par un travel planner ? Son domain » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .fin-note ; .fin-contenu > h2 ; .fin-contenu > h2 > em — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_

### retour arrière : image isolée différente (flash) (1)

- **retour arrière : image isolée différente (flash)** — `/` — à 56 ms (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `faire-un-don.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `mon-projet-de-voyage.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — _audit/journal.json absent (modèle : journal.exemple.json) : heure de chaque étape, attentes, modules, audit

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/comment-ca-marche` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/faire-un-don` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/mon-projet-de-voyage` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/themes-et-destinations` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--1:nth-of-type(5) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--2:nth-of-type(6) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (4)

- **section sans visuel** — `/` — section#formules « Plusieurs façons de préparer son aventure Le trave » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#match « Une envie, une destination : votre match Choisisse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#etapes « Comment ça marche ? 1 Vous partagez vos envies Des » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#pourquoi « Pourquoi passer par un travel planner ? Son domain » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/comment-ca-marche` — à 68 ms (différence 21 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2901 ms depuis le premier octet
- Ouverture / (390×844) : 2911 ms depuis le premier octet
- Bords de l’écran : 89 images d’intro, 6 de voile et 33 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 423, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Vitesse / : 0.51 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films
```
