# Rapport d’audit

Projet : `matchyourtrip-maquette` · 17/11/2026 21:16:41 · 15 min · 6 page(s) · audit complet (étapes : grille, bords, parcours, ecran, fluidite, mouvement, vitesse, captures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-200142-complet-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : grille wouahou (7), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (17), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur /comment-ca-marche |
| 7. L’action principale a un retour physique | ✓ présent | sur /, /mon-projet-de-voyage |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-191538-complet | complet | toutes | toutes | 9 | 34 | 1 | échecs |
| 20261117-194837-complet-partiel | complet | toutes | fichiers, mesures, films | 1 | 12 | 0 | échecs |
| 20261117-195801-complet-cible-partiel | complet | /,/comment-ca-marche | fichiers, mesures | 0 | 6 | 0 | complet |
| **20261117-200142-complet-partiel** (celle-ci) | complet | toutes | grille, bords, parcours, ecran, fluidite, mouvement, vitesse, captures | 0 | 0 | 0 | complet |

## Échecs

Aucun.

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 493 images d’intro, 26 de voile et 207 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /comment-ca-marche : aucune section épinglée ou plein écran.
- Tient dans l'écran /faire-un-don : aucune section épinglée ou plein écran.
- Tient dans l'écran /mon-projet-de-voyage : aucune section épinglée ou plein écran.
- Tient dans l'écran /themes-et-destinations : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 425, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité /faire-un-don 1366×768 (molette) : 0 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 1366×768 (molette) : 0 % d'images lentes sur 329, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /comment-ca-marche 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /faire-un-don 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /mon-projet-de-voyage 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /themes-et-destinations 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /comment-ca-marche : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /faire-un-don : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /mon-projet-de-voyage : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /themes-et-destinations : 0.50 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
