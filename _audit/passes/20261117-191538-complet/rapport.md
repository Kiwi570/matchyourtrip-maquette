# Rapport d’audit

Projet : `matchyourtrip-maquette` · 17/11/2026 20:38:41 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261117-191538-complet` · version ?v=2
- Échecs : **9**
- À regarder : **34**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (17), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur / ; absent sur /comment-ca-marche, /faire-un-don, /mon-projet-de-voyage, /themes-et-destinations |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur /comment-ca-marche |
| 7. L’action principale a un retour physique | ✓ présent | sur /, /mon-projet-de-voyage |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-feuille:nth-of-type(2) > p.hero-info:nth-of-type(4) « L’application est en construction : déposez votre  » _(1000×560 normal, 1000×560 sansJs, 1280×720 sansJs, 1000×560 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(2) « ✓ Étapes et itinéraire » — coupé par section#benefices > div.benefices-grille > div.onglets-scene > div.navigateur « Vols Hôtel Visa Météo Avis Train Budget Forum Voit » _(320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl)_
- **texte coupé** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(3) « ✓ Bonnes adresses » — coupé par section#benefices > div.benefices-grille > div.onglets-scene > div.navigateur « Vols Hôtel Visa Météo Avis Train Budget Forum Voit » _(390×844 normal, 768×1024 normal, 390×844 sansWebgl, 768×1024 sansWebgl)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(3) « ✓ Bonnes adresses » — avec section#benefices > div.benefices-grille > div.onglets-scene > p.onglets-compteur « 14 onglets ouverts » _(320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl)_
- **textes qui se chevauchent** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(4) « ✓ Réservations et conseils » — avec section#benefices > div.benefices-grille > div.onglets-scene > p.onglets-compteur « 14 onglets ouverts » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansWebgl, 375×667 sansWebgl, +3)_
- **textes qui se chevauchent** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(4) « ✓ Réservations et conseils » — avec li.benefice:nth-of-type(1) > div > h3 > span.benefice-num « 1. » _(320×568 normal, 320×568 sansWebgl)_
- **textes qui se chevauchent** — `/comment-ca-marche` — div.navigateur > div.nav-page:nth-of-type(2) > div.carnet-mini > p:nth-of-type(4) « ✓ Réservations et conseils » — avec ol.benefices-liste > li.benefice:nth-of-type(1) > div > h3 « 1. Son domaine, son expertise » _(320×568 normal, 320×568 sansWebgl)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/comment-ca-marche` — .carnet-mini > p:nth-child(5) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### retour avant : image isolée différente (flash) (1)

- **retour avant : image isolée différente (flash)** — `/comment-ca-marche` — à 92 ms (films/retour-avant-1366.png) _(1366×768 retour avant)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `faire-un-don.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `mon-projet-de-voyage.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/comment-ca-marche` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/faire-un-don` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/mon-projet-de-voyage` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/themes-et-destinations` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (10)

- **section sans visuel** — `/` — section#match « Une envie, une destination : votre match Choisisse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/` — section#pourquoi « Pourquoi passer par un travel planner ? Son domain » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#etapes « Comment ça marche ? 1 Vous partagez vos envies Des » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/` — section#formules « Plusieurs façons de préparer son aventure Le trave » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/comment-ca-marche` — section#etapes « Trois étapes, du rêve au trip 1 Vous partagez vos  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/comment-ca-marche` — section#formules « Plusieurs façons de préparer son aventure Travel p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/faire-un-don` — section#utilite « À quoi sert votre don Développer MatchYourTrip Fai » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/mon-projet-de-voyage` — section#formulaire « Mon projet de voyage Votre envie Votre voyage Vous » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/mon-projet-de-voyage` — section#ensuite « Et ensuite ? On lit votre projet L’équipe regarde  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/themes-et-destinations` — section#autre « Votre envie n’est pas dans la liste ? Racontez-la- » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (16)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--1:nth-of-type(5) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--2:nth-of-type(6) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/comment-ca-marche` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/faire-un-don` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/faire-un-don` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/mon-projet-de-voyage` — section#debut > div.ouv-visuel.billet-cadre:nth-of-type(2) > figure.media.billet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — section#debut > div.mosaique:nth-of-type(2) > figure.media.mosaique-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-bien-etre > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-occasions > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-mer > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-cultures > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-saveurs > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — li#famille-facons > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/themes-et-destinations` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 82 ms (différence 29 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2895 ms depuis le premier octet
- Ouverture /comment-ca-marche (1366×768) : 2895 ms depuis le premier octet
- Ouverture /faire-un-don (1366×768) : 2898 ms depuis le premier octet
- film de l'ouverture /faire-un-don 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /mon-projet-de-voyage (1366×768) : 2902 ms depuis le premier octet
- Ouverture /themes-et-destinations (1366×768) : 2895 ms depuis le premier octet
- Ouverture / (390×844) : 2893 ms depuis le premier octet
- Ouverture /comment-ca-marche (390×844) : 2910 ms depuis le premier octet
- Ouverture /faire-un-don (390×844) : 2904 ms depuis le premier octet
- Ouverture /mon-projet-de-voyage (390×844) : 2908 ms depuis le premier octet
- Ouverture /themes-et-destinations (390×844) : 2906 ms depuis le premier octet
- Bords de l’écran : 522 images d’intro, 35 de voile et 206 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /comment-ca-marche : aucune section épinglée ou plein écran.
- Tient dans l'écran /faire-un-don : aucune section épinglée ou plein écran.
- Tient dans l'écran /mon-projet-de-voyage : aucune section épinglée ou plein écran.
- Tient dans l'écran /themes-et-destinations : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 417, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /faire-un-don 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 1366×768 (molette) : 0 % d'images lentes sur 189, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 1366×768 (molette) : 0 % d'images lentes sur 314, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /faire-un-don 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /comment-ca-marche : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /faire-un-don : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /mon-projet-de-voyage : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /themes-et-destinations : 0.42 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/comment-ca-marche --seulement=fichiers,mesures,films
```
