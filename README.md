# MatchYourTrip : maquette v1

Maquette de démonstration du futur site de MatchYourTrip (mise en relation entre voyageurs et professionnels du voyage).
Direction « Carnet de papier déchiré » : papier crème, collages du client, fuchsia et abricot, Fraunces, Figtree et Caveat.

Adresse de la maquette : https://matchyourtrip-maquette.vercel.app (non indexée par Google).

## Pages

| Page | Adresse | Ouverture |
|---|---|---|
| Accueil | `/` | Collage de la falaise en plein cadre, couches de papier déchiré, feuille avec le titre et la pastille « Match ! » |
| Comment ça marche | `/comment-ca-marche` | Titre à gauche, collage aux jumelles à droite (s'ouvre en double lentille) |
| Thèmes & destinations | `/themes-et-destinations` | Grand titre, puis bandeau panoramique en trois bandes qui glissent |
| Faire un don | `/faire-un-don` | Montgolfière en papier en plein cadre, feuille posée dessus |
| Mon projet de voyage | `/mon-projet-de-voyage` | Titre et carnet ouvert dans un cadre de billet, formulaire en 3 étapes |
| 404 | toute adresse inconnue | Volcan en papier, « hors des sentiers battus » |

## Fiche : ce que MatchYourTrip doit fournir

À compléter avant la mise en ligne définitive :
- **Mentions légales** : les mentions actuelles du site sont un modèle fictif (« 123 456 789 RCS Paris », « Jean Dupont et Marie Curie », « 123 Avenue des Voyages, 75000 Paris », e-mail en .com, hébergeur OVH) : à remplacer par les vraies informations (dénomination, forme juridique, capital, SIREN/SIRET, adresse du siège, directeur ou directrice de la publication, contact).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse publiée par Vercel, vérifiée le 17 novembre 2026).
- **Politique de confidentialité** (formulaire de projet et de don) et **politique de cookies**.
- **Conditions d'utilisation** de la plateforme.
- **Coordonnées** : aucune adresse e-mail, aucun téléphone, aucun réseau social n'est publié sur le site actuel (les icônes renvoient vers la page contact). À fournir si le client souhaite les afficher.
- **Plateforme de dons** (et statut juridique) : la page « Faire un don » simule un don à montant libre ; aucun montant ni aucune plateforme n'existent sur le site actuel. Si MatchYourTrip est une société, un don n'ouvre pas droit à une réduction d'impôt : la formulation « soutenir le projet » ou une campagne de financement participatif peut convenir mieux.
- **Immatriculation Atout France** : obligatoire pour organiser ou vendre des voyages ; une plateforme de pure mise en relation n'y est pas toujours soumise, mais la frontière est discutée. À faire vérifier.
- **Crédits des illustrations générées** : les images marquées « Illustration générée » ont été créées avec Grok pour la maquette (bien-être, occasions spéciales, saveurs, villes, route, mer, destinations, nuit de l'appel final, montgolfière, carnet de voyage, panorama des thèmes). La mention reste sur le site final.

### Retiré ou remplacé faute d'information

- Aucun prix, aucun chiffre, aucun témoignage, aucune équipe, aucun nom de professionnel : rien n'a été inventé. Les pages parlent de mise en relation, sans tarif.
- Formulaire « Mon projet de voyage » : les options des listes « participants » et « budget » du site actuel ne sont pas connues ; elles sont remplacées par un compteur et un champ libre.
- Thèmes et destinations : repris des panneaux du site actuel (44 thèmes, 40 destinations sur 8 régions), sans description inventée. Les petites phrases sous chaque famille de thèmes sont des accroches de la maquette, à relire.
- Bouton « Je suis un(e) pro du voyage » : sans page sur le site actuel ; dans la maquette, il mène au formulaire avec la case « Je suis un·e professionnel·le du voyage » cochée.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaires et dons simulés (à brancher sur un vrai envoi et une vraie plateforme de paiement), mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Modifier la maquette

- Textes : `donnees/textes/fr.json` ; thèmes : `donnees/themes.json` ; destinations : `donnees/destinations.json` ; bénéfices, étapes, formules, questions : `donnees/contenus.json`.
- Pages : `source/pages/*.mjs` ; style : `assets/css/site.css` ; effets : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les fichiers `.html` à la main).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`produire.mjs`, `partage.mjs`).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).
