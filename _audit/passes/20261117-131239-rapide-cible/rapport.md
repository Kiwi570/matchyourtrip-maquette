# Rapport d’audit

Projet : `matchyourtrip-maquette` · 17/11/2026 14:18:39 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **146 échec(s)**
- Passe : `20261117-131239-rapide-cible` · version ?v=1
- Échecs : **146**
- À regarder : **17**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (1), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `comment-ca-marche.html` — fichier introuvable : /assets/partage/comment-ca-marche-fr.jpg
- **image de partage** — `faire-un-don.html` — fichier introuvable : /assets/partage/faire-un-don-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `mon-projet-de-voyage.html` — fichier introuvable : /assets/partage/mon-projet-fr.jpg
- **image de partage** — `themes-et-destinations.html` — fichier introuvable : /assets/partage/themes-et-destinations-fr.jpg

### texte coupé (5)

- **texte coupé** — `/` — div.conteneur > div.match-table:nth-of-type(2) > div.match-carte.match-carte--envie:nth-of-type(1) > p.match-label « Votre envie » — coupé par section#match « Une envie, une destination : votre match Choisisse » _(1366×768 normal, 844×390 normal)_
- **texte coupé** — `/` — section#pourquoi > p.note-main.pourquoi-note « Je trouve mon travel planner à vos côtés, pour un  » — coupé par section#pourquoi « Pourquoi passer par un travel planner ? Son domain » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — div.match-carte.match-carte--envie:nth-of-type(1) > ul.puces > li:nth-of-type(1) > button.puce « Partir avec son chien » — coupé par section#match « Une envie, une destination : votre match Choisisse » _(844×390 normal)_
- **texte coupé** — `/` — div.match-carte.match-carte--envie:nth-of-type(1) > ul.puces > li:nth-of-type(3) > button.puce « Rencontre d’animaux sauvages éthique » — coupé par section#match « Une envie, une destination : votre match Choisisse » _(844×390 normal)_
- **texte coupé** — `/` — div.match-carte.match-carte--envie:nth-of-type(1) > ul.puces > li:nth-of-type(6) > button.puce « Road trips & itinéraires » — coupé par section#match « Une envie, une destination : votre match Choisisse » _(844×390 normal)_

### textes qui se chevauchent (123)

- **textes qui se chevauchent** — `/` — div.match-carte.match-carte--envie:nth-of-type(1) > ul.puces > li:nth-of-type(3) > button.puce « Rencontre d’animaux sauvages éthique » — avec div.match-carte.match-carte--envie:nth-of-type(1) > ul.puces > li:nth-of-type(6) > button.puce « Road trips & itinéraires » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(1) > h3 « Son domaine, son expertise » — avec section#pourquoi > ul.fiches > li.fiche:nth-of-type(1) > p « Une destination, une passion ou un type de voyage  » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(1) > p « Une destination, une passion ou un type de voyage  » — avec section#pourquoi > p.note-main.pourquoi-note « Je trouve mon travel planner à vos côtés, pour un  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(2) > h3 « Un itinéraire sur mesure » — avec section#pourquoi > ul.fiches > li.fiche:nth-of-type(2) > p « Un voyage adapté à vos envies, votre rythme, vos c » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(2) > p « Un voyage adapté à vos envies, votre rythme, vos c » — avec section#pourquoi > p.note-main.pourquoi-note « Je trouve mon travel planner à vos côtés, pour un  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(3) > h3 « Moins de charge mentale » — avec section#pourquoi > ul.fiches > li.fiche:nth-of-type(3) > p « Fini les heures de recherches et les dizaines d’on » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#pourquoi > ul.fiches > li.fiche:nth-of-type(4) > h3 « Un carnet de voyage personnalisé » — avec section#pourquoi > ul.fiches > li.fiche:nth-of-type(4) > p « Vos étapes, vos bonnes adresses, vos conseils et v » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > h3 « Afrique » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(1) « Sénégal » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > h3 « Afrique » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays « Sénégal · Maroc · Algérie · Égypte · Tanzanie · Af » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > h3 « Afrique » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(1) « Sénégal » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(4) « Égypte » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(1) « Sénégal » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(1) « Sénégal » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(2) « Maroc » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(2) « Maroc » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(3) « Algérie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(4) « Égypte » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(4) « Égypte » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(5) « Tanzanie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(8) « Ouganda » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(6) « Afrique du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(9) « Mozambique » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(7) « Côte d’Ivoire » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays > a:nth-of-type(9) « Mozambique » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(1) « Japon » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(4) « Indonésie » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(2) « Corée du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(4) « Indonésie » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(2) « Corée du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(5) « Vietnam » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(2) « Corée du Sud » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(7) « Philippines » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(3) « Chine » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(6) « Laos » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(4) « Indonésie » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(7) « Philippines » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(5) « Vietnam » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays > a:nth-of-type(8) « Malaisie » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > h3 « Europe » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(1) « France » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > h3 « Europe » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays « France · Italie & Grèce · Autriche · Écosse · Norv » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > h3 « Europe » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(2) « Italie & Grèce » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(1) « France » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(4) « Écosse » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(2) « Italie & Grèce » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(5) « Norvège » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(2) « Italie & Grèce » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(3) > p.etiquette-pays > a:nth-of-type(6) « Islande » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > h3 « Amérique du Nord » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > p.etiquette-pays > a:nth-of-type(1) « USA et Canada » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > h3 « Amérique du Nord » — avec section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > p.etiquette-pays « USA et Canada · Ouest américain » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > h3 « Amérique du Nord » — avec ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > p.etiquette-pays > a:nth-of-type(2) « Ouest américain » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- … et 83 autres (rapport.json)

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-feuille:nth-of-type(2) > p.hero-info:nth-of-type(4) « L’application est en construction : déposez votre  » _(320×568 sansJs)_

### élément recouvert (4)

- **élément recouvert** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > h3 « Afrique » — par section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(1) > p.etiquette-pays « Sénégal · Maroc · Algérie · Égypte · Tanzanie · Af » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > h3 « Asie » — par section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(2) > p.etiquette-pays « Japon · Corée du Sud · Chine · Indonésie · Vietnam » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — section#fin > div.conteneur.fin-contenu > h2.titre-section « Prêt·e à faire le premier pas ? » — par section#fin > div.conteneur.fin-contenu > svg.avion.fin-avion _(1366×768 normal)_
- **élément recouvert** — `/` — section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > h3 « Amérique du Nord » — par section#destinations > ul.conteneur.etiquettes > li.etiquette:nth-of-type(4) > p.etiquette-pays « USA et Canada · Ouest américain » _(390×844 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .tampon--match ; .ruban-statut ; .fin-note — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_

### lien profond (1)

- **lien profond** — `/ → /mon-projet-de-voyage?envie=Partir%20avec%20son%20chien&destination=Europe#formulaire` — choix « destination=Europe » non prérempli (valeur : Partir avec son chien · Europe) _(1366×768 lien profond, 390×844 lien profond)_

### effet du plan absent (6)

- **effet du plan absent** — « jumelles » : aucun élément data-effet="jumelles"
- **effet du plan absent** — « mosaique » : aucun élément data-effet="mosaique"
- **effet du plan absent** — « billet » : aucun élément data-effet="billet"
- **effet du plan absent** — « ballon » : aucun élément data-effet="ballon"
- **effet du plan absent** — « benefices » : aucun élément data-effet="benefices"
- **effet du plan absent** — « mots-papier » : aucun élément data-effet="mots-papier"

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `faire-un-don.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `mon-projet-de-voyage.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — _audit/journal.json absent (modèle : journal.exemple.json) : heure de chaque étape, attentes, modules, audit

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--1:nth-of-type(5) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vedettes-piste:nth-of-type(2) > article.vedette.vedette--2:nth-of-type(6) > figure.media.vedette-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#destinations > figure.media.destinations-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/` — section#match « Une envie, une destination : votre match Choisisse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#formules « Plusieurs façons de préparer son aventure Le trave » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#pourquoi « Pourquoi passer par un travel planner ? Son domain » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/` — footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-legal:nth-of-type(2) « Mentions légales : à compléter Politique de confid » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 69 ms (différence 20 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/comment-ca-marche` — à 64 ms (différence 21 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

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
- Ouverture / (1366×768) : 2905 ms depuis le premier octet
- Ouverture / (390×844) : 2907 ms depuis le premier octet
- Bords de l’écran : 92 images d’intro, 5 de voile et 34 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 428, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,mouvement
```
