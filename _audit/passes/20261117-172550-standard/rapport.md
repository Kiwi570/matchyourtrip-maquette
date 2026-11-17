# Rapport d’audit

Projet : `matchyourtrip-maquette` · 17/11/2026 18:45:24 · 20 min · 6 page(s) · audit standard

## Résumé

- Statut : **45 échec(s)**
- Passe : `20261117-172550-standard` · version ?v=1
- Échecs : **45**
- À regarder : **44**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (15), souris immobile (5), vitesse (5), captures (1)

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
| 20261117-132141-rapide-cible | rapide | / | toutes | 25 | 16 | 1 | échecs |
| **20261117-172550-standard** (celle-ci) | standard | toutes | toutes | 45 | 44 | 1 | échecs |

## Échecs

### textes qui se chevauchent (22)

- **textes qui se chevauchent** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays « Japon · Corée du Sud · Chine · Indonésie · Vietnam » _(768×1024 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(3) « Chine » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(768×1024 normal, 320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(8) « Ouganda » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(9) « Mozambique » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(1) « Mexique » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(3) « Guadeloupe & Martinique » _(768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(2) « Costa Rica » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(5) > p.etiquette-pays > a:nth-of-type(3) « Guadeloupe & Martinique » _(768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(1) « Colombie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(768×1024 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(2) « Pérou » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(768×1024 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(3) « Brésil » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(6) > p.etiquette-pays > a:nth-of-type(4) « Argentine & Chili » _(768×1024 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(1) « Sri Lanka » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » _(768×1024 normal, 320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(2) « Île Maurice » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » _(768×1024 normal, 320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(4) « Rodrigues » _(768×1024 normal, 320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(3) « Île de la Réunion » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(7) > p.etiquette-pays > a:nth-of-type(5) « Nosy Be » _(768×1024 normal, 320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(4) « Égypte » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(8) « Ouganda » _(320×568 normal, 1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(4) « Indonésie » _(844×390 normal)_
- **textes qui se chevauchent** — `/404` — div.conteneur.ouv-plein-contenu > div.feuille.ouv-feuille > div.pastille.ouv-pastille > span.pastille-texte « Oups ! » — avec section#debut > div.conteneur.ouv-plein-contenu > div.feuille.ouv-feuille > h1.ouv-titre.ouv-titre--moyen « Là, vous êtes vraiment hors des sentiers battus » _(844×390 normal)_
- **textes qui se chevauchent** — `/faire-un-don` — div.conteneur.ouv-plein-contenu > div.feuille.ouv-feuille > div.pastille.ouv-pastille > span.pastille-texte « Merci ! » — avec section#debut > div.conteneur.ouv-plein-contenu > div.feuille.ouv-feuille > h1.ouv-titre.ouv-titre--moyen « Un petit geste peut aider un grand projet à prendr » _(844×390 normal)_
- **textes qui se chevauchent** — `/themes-et-destinations` — div.mosaique:nth-of-type(2) > div.mosaique-bande.mosaique-bande--2:nth-of-type(3) > figure.media.mosaique-media > figcaption.mention-ia « Illustration générée » — avec section#debut > div.mosaique:nth-of-type(2) > div.pastille.mosaique-pastille:nth-of-type(4) > span.pastille-texte « Bon voyage » _(844×390 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/comment-ca-marche` — section#debut > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « En attendant l’application : un formulaire, et l’é » _(320×568 normal, 320×568 sansJs)_

### texte coupé (5)

- **texte coupé** — `/faire-un-don` — form.don-form.feuille > div.champ.champ--montant:nth-of-type(1) > div.pas-a-pas > button.pas:nth-of-type(2) « + » — coupé par section#don « 20 € Je soutiens MatchYourTrip Montant de votre do » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/faire-un-don` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « Illustration générée » — coupé par section#debut « Illustration générée Merci ! Un petit geste peut a » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte coupé** — `/mon-projet-de-voyage` — section#debut > div.ouv-visuel.billet-cadre:nth-of-type(2) > div.pastille.ouv-pastille > span.pastille-texte « C’est parti ! » — coupé par section#debut « Votre prochaine aventure commence ici L’applicatio » _(768×1024 normal)_
- **texte coupé** — `/mon-projet-de-voyage` — section#debut > div.ouv-visuel.billet-cadre:nth-of-type(2) > div.pastille.ouv-pastille > span.pastille-texte « C’est parti ! » — coupé par section#debut « Votre prochaine aventure commence ici Commencer 3  » _(844×390 normal)_
- **texte coupé** — `/themes-et-destinations` — section#debut > div.mosaique:nth-of-type(2) > div.pastille.mosaique-pastille:nth-of-type(4) > span.pastille-texte « Bon voyage » — coupé par section#debut « Des thèmes de voyage inédits et des destinations d » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### mention « Illustration générée » absente (6)

- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--0:nth-of-type(1) > figure.media.mosaique-media > picture > img « Panorama en papier déchiré mêlant lagon, collines, » — themes-ouverture-1280.webp _(768×1024 normal, 844×390 normal)_
- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--1:nth-of-type(2) > figure.media.mosaique-media > picture > img — themes-ouverture-1280.webp _(768×1024 normal, 844×390 normal)_
- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--0:nth-of-type(1) > figure.media.mosaique-media > picture > img « Panorama en papier déchiré mêlant lagon, collines, » — themes-ouverture-mobile-640.webp _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--1:nth-of-type(2) > figure.media.mosaique-media > picture > img — themes-ouverture-mobile-640.webp _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--0:nth-of-type(1) > figure.media.mosaique-media > picture > img « Panorama en papier déchiré mêlant lagon, collines, » — themes-ouverture-1920.webp _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **mention « Illustration générée » absente** — `/themes-et-destinations` — div.mosaique-bande.mosaique-bande--1:nth-of-type(2) > figure.media.mosaique-media > picture > img — themes-ouverture-1920.webp _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### élément recouvert (1)

- **élément recouvert** — `/themes-et-destinations` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > div.ouv-ligne > p.ouv-info:nth-of-type(3) « 9 familles · 44 thèmes · 40 destinations » — par section#debut > div.mosaique:nth-of-type(2) > div.pastille.mosaique-pastille:nth-of-type(4) > svg.pastille-bord _(768×1024 normal)_

### accessibilité (axe) : aria-valid-attr-value (1)

- **accessibilité (axe) : aria-valid-attr-value** — `/themes-et-destinations` — .mosaique-bande--1 ; .mosaique-bande--2 — ARIA attributes must conform to valid values _(390×844 normal, 1366×768 normal)_

### clavier (1)

- **clavier** — `/mon-projet-de-voyage` — input «  » — le focus arrive sur un élément caché _(1366×768)_

### section sans effet au défilement (8)

- **section sans effet au défilement** — `/themes-et-destinations` — section#afrique.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#asie.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#europe.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#amerique-nord.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#amerique-centrale.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#amerique-sud.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#ocean-indien.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/themes-et-destinations` — section#oceanie.zone — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `faire-un-don.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `mon-projet-de-voyage.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/comment-ca-marche` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/faire-un-don` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/mon-projet-de-voyage` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/themes-et-destinations` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (19)

- **section sans visuel** — `/` — section#match « Une envie, une destination : votre match Choisisse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/` — section#pourquoi « Pourquoi passer par un travel planner ? Son domain » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#formules « Plusieurs façons de préparer son aventure Le trave » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#etapes « Comment ça marche ? 1 Vous partagez vos envies Des » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/comment-ca-marche` — section#benefices « Ce que votre pro change à votre voyage 1. Son doma » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/comment-ca-marche` — section#etapes « Trois étapes, du rêve au trip 1 Vous partagez vos  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/comment-ca-marche` — section#formules « Plusieurs façons de préparer son aventure Travel p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/faire-un-don` — section#utilite « À quoi sert votre don Développer MatchYourTrip Fai » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/mon-projet-de-voyage` — section#formulaire « Mon projet de voyage Votre envie Votre voyage Vous » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/mon-projet-de-voyage` — section#ensuite « Et ensuite ? On lit votre projet L’équipe regarde  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#afrique « Afrique Sénégal Maroc Algérie Égypte Tanzanie Afri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#asie « Asie Japon Corée du Sud Chine Indonésie Vietnam La » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#europe « Europe France Italie & Grèce Autriche Écosse Norvè » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#amerique-nord « Amérique du Nord USA et Canada Ouest américain » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#amerique-centrale « Amérique centrale & Caraïbes Mexique Costa Rica Gu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#amerique-sud « Amérique du Sud Colombie Pérou Brésil Argentine &  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#ocean-indien « Océan Indien Sri Lanka Île Maurice Île de la Réuni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#oceanie « Océanie Nouvelle-Zélande Australie Polynésie franç » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/themes-et-destinations` — section#autre « Votre envie n’est pas dans la liste ? Racontez-la- » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (16)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--1:nth-of-type(5) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--2:nth-of-type(6) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/comment-ca-marche` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/faire-un-don` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/faire-un-don` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/mon-projet-de-voyage` — section#debut > div.ouv-visuel.billet-cadre:nth-of-type(2) > figure.media.billet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — div.mosaique:nth-of-type(2) > div.mosaique-bande.mosaique-bande--2:nth-of-type(3) > figure.media.mosaique-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-bien-etre > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-occasions > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-mer > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-cultures > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-saveurs > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-facons > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 72 ms (différence 29 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 44 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/comment-ca-marche` — à 78 ms (différence 21 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

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
- Journal v1 : 2 étape(s) notée(s), 13 min de travail pour 30 min de budget, 1 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /comment-ca-marche, /faire-un-don, /mon-projet-de-voyage, /themes-et-destinations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2899 ms depuis le premier octet
- film de l'ouverture / 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /comment-ca-marche (1366×768) : 2901 ms depuis le premier octet
- film de l'ouverture /comment-ca-marche 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /faire-un-don (1366×768) : 2901 ms depuis le premier octet
- Ouverture /mon-projet-de-voyage (1366×768) : 2904 ms depuis le premier octet
- Ouverture /themes-et-destinations (1366×768) : 2889 ms depuis le premier octet
- film de l'ouverture /themes-et-destinations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2904 ms depuis le premier octet
- Ouverture /comment-ca-marche (390×844) : 2896 ms depuis le premier octet
- Ouverture /faire-un-don (390×844) : 2890 ms depuis le premier octet
- film de l'ouverture /faire-un-don 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /mon-projet-de-voyage (390×844) : 2891 ms depuis le premier octet
- Ouverture /themes-et-destinations (390×844) : 2895 ms depuis le premier octet
- bords de l’écran /mon-projet-de-voyage 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /themes-et-destinations 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 493 images d’intro, 30 de voile et 206 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /comment-ca-marche : aucune section épinglée ou plein écran.
- Tient dans l'écran /faire-un-don : aucune section épinglée ou plein écran.
- Tient dans l'écran /mon-projet-de-voyage : aucune section épinglée ou plein écran.
- Tient dans l'écran /themes-et-destinations : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 429, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 1366×768 (molette) : 0 % d'images lentes sur 281, tâche la plus longue 0 ms
- Fluidité /faire-un-don 1366×768 (molette) : 0 % d'images lentes sur 221, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 1366×768 (molette) : 0 % d'images lentes sur 332, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /faire-un-don 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.57 s de calcul au chargement (téléphone ralenti).
- Vitesse /comment-ca-marche : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /faire-un-don : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /mon-projet-de-voyage : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /themes-et-destinations : 0.47 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/comment-ca-marche,/faire-un-don,/mon-projet-de-voyage,/themes-et-destinations --seulement=fichiers,mesures,parcours,mouvement
```
