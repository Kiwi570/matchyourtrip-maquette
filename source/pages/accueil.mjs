/* Accueil MatchYourTrip : carnet de papier déchiré.
   Ouverture (collage du client, couches de papier), le match (outil), 4 bénéfices, thèmes, destinations,
   étapes (avion), formules (tampons), citation rencontres, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, dechirure, icone, coeur, avion, pastille, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-mobile-1080.webp' };

const VEDETTES = [
  { famille: 'engage', titre: "Rencontre d’animaux sauvages éthique", image: 'theme-animaux', items: ['Écotourisme & voyages responsables', 'Nature préservée'] },
  { famille: 'styles', titre: 'Partir avec son chien', image: 'theme-chien', items: ['En couple', 'En famille', 'Solo'] },
  { famille: 'nature', titre: "Voyages sportifs et d’aventures", image: 'theme-aventure', items: ['Montagne & nature', 'Sports extrêmes'] },
  { famille: 'cultures', titre: 'Partir hors des sentiers battus', image: 'theme-rencontres', items: ['Rencontres & expériences locales', 'Voyage authentique et immersif'] },
  { famille: 'bien-etre', titre: 'Bien-être', image: 'grok/theme-bien-etre', items: ['Introspection', 'Séjour spirituel'] },
  { famille: 'facons', titre: 'Road trips & itinéraires', image: 'grok/theme-route', items: ['Vanlife & camping-car', 'Escapades en voiture'] },
];

export default (c) => {
  const D = c.donnees.contenus;
  const themes = c.donnees.themes;
  const dest = c.donnees.destinations;
  const imageDe = (id) => themes.find((t) => t.id === id) || {};
  const defaut = D.matchDefaut;
  const envieDe = (v) => `envie=${encodeURIComponent(v)}`;
  return html`
<section class="hero" id="debut">
  ${c.media({ nom: 'accueil-ouverture', alt: "Collage en papier découpé : une silhouette regarde l’horizon depuis une falaise", priorite: true, classe: 'hero-media', sizes: '100vw', cadrage: '0% 46%', cadrageMobile: '14% 28%', attrs: 'data-effet="papier-couches"' })}
  <div class="hero-couches" aria-hidden="true" data-visuel>
    <svg class="couche couche--1" viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 70 L60 52 L140 74 L230 46 L320 70 L410 40 L520 66 L620 44 L720 72 L830 48 L930 70 L1040 42 L1150 68 L1250 50 L1350 74 L1440 56 L1440 160 L0 160Z"/></svg>
    <svg class="couche couche--2" viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 92 L90 78 L170 98 L260 74 L370 96 L470 80 L560 102 L660 76 L760 98 L860 82 L970 104 L1070 78 L1170 98 L1270 84 L1370 100 L1440 86 L1440 160 L0 160Z"/></svg>
    <svg class="couche couche--3" viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 122 L70 112 L160 128 L250 108 L350 126 L450 114 L550 130 L650 110 L750 128 L850 116 L950 132 L1050 112 L1150 128 L1250 116 L1350 130 L1440 118 L1440 160 L0 160Z"/></svg>
  </div>
  <svg class="hero-reve" aria-hidden="true" data-visuel><path class="hero-reve-trait" d=""/></svg>
  ${avion('hero-avion', 'data-effet="reve"')}
  <div class="hero-feuille">
    ${pastille(c, c.t('accueil.hero.pastille'), { classe: 'hero-pastille' })}
    <p class="note-main hero-note">${c.t('accueil.hero.note')}</p>
    <h1 class="hero-titre" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span><span class="ligne-masque ligne-masque--match"><span class="hero-ligne"><em class="mot-match">${c.t('accueil.hero.titre3')}</em></span></span></h1>
    <p class="hero-intro">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions">
      ${c.lien('mon-projet', { ancre: 'formulaire', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('comment-ca-marche', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.secondaire') })}
    </p>
    <p class="hero-info" data-info-cle><span class="point-vivant" aria-hidden="true"></span>${c.t('accueil.hero.info')}</p>
  </div>
</section>

<section class="match" id="match">
  ${dechirure('dechirure--haut dechirure--prune dechirure--telephone', 3)}
  <div class="conteneur">
    <div class="match-tete">
      ${titre(c, 'accueil.match', { classe: 'titre-section' })}
      <p data-anime>${c.t('accueil.match.texte')}</p>
    </div>
    <div class="match-table" data-match data-grille="manipuler retour">
      <div class="match-carte match-carte--envie" data-match-carte="g" data-effet="match">
        <p class="match-label">${icone('envie')}${c.t('accueil.match.envie')}</p>
        <ul class="puces" role="list">${D.envies.map((e) => html`<li><button type="button" class="puce" data-match-envie="${e}" aria-pressed="${e === defaut.envie ? 'true' : 'false'}">${e}</button></li>`)}</ul>
      </div>
      <div class="match-centre" aria-hidden="true" data-visuel>
        <span class="tampon tampon--match" data-match-tampon data-effet="match">${c.t('accueil.match.tampon')}</span>
        ${coeur('match-coeur')}
      </div>
      <div class="match-carte match-carte--dest" data-match-carte="d" data-effet="match">
        <p class="match-label">${icone('carte')}${c.t('accueil.match.destination')}</p>
        <ul class="puces" role="list">${dest.map((z) => html`<li><button type="button" class="puce" data-match-dest="${z.nom}" aria-pressed="${z.nom === defaut.destination ? 'true' : 'false'}">${z.nom}</button></li>`)}</ul>
      </div>
    </div>
    <div class="match-resultat">
      <p class="match-phrase" data-match-texte aria-live="polite">${c.t('accueil.match.resultat', { envie: `« ${defaut.envie} »`, destination: defaut.destination })}</p>
      <p class="match-actions">
        <a class="bouton bouton--clair" data-match-lien href="${c.url('mon-projet', 'formulaire', `${envieDe(defaut.envie)}&destination=${encodeURIComponent(defaut.destination)}`)}" data-libelle="${c.libelle('mon-projet')}">${c.t('accueil.match.action')}</a>
        ${c.lien('themes-et-destinations', { classe: 'lien-fleche lien-fleche--clair', texte: c.t('accueil.match.tous') })}
      </p>
      <p class="match-aide"><span class="aide-tactile">${c.t('accueil.match.aide')}</span><span class="aide-souris">${c.t('accueil.match.aideSouris')}</span></p>
    </div>
  </div>
  ${dechirure('dechirure--bas dechirure--prune', 5)}
</section>

<section class="pourquoi conteneur" id="pourquoi">
  ${titre(c, 'accueil.pourquoi', { classe: 'titre-section', suite: true })}
  <ul class="fiches" role="list">
    ${D.benefices.map((b, i) => html`<li class="fiche" style="--r:${[-0.8, 0.6, -0.5, 0.8][i]}deg" data-effet="fiches">
      <span class="scotch" aria-hidden="true"></span>
      ${icone(b.icone, 'fiche-icone')}
      <h3>${b.titre}</h3>
      <p>${b.texte}</p>
    </li>`)}
  </ul>
  <p class="note-main pourquoi-note" data-anime>${c.t('accueil.pourquoi.note')} ${coeur('note-coeur')}</p>
</section>

<section class="vedettes" id="themes">
  <div class="conteneur vedettes-tete">
    ${titre(c, 'accueil.themes', { classe: 'titre-section' })}
    <p data-anime>${c.t('accueil.themes.texte')}</p>
    <p class="vedettes-glisser" aria-hidden="true">${c.t('accueil.themes.glisser')} →</p>
  </div>
  <div class="vedettes-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.themes.titre1')} ${c.s('accueil.themes.titre2')}">
    ${VEDETTES.map((v, i) => html`<article class="vedette vedette--${i % 3}" data-effet="colonnes">
      ${c.media({ nom: v.image, alt: (imageDe(v.famille).image === v.image && imageDe(v.famille).alt) || v.titre, classe: 'vedette-media', sizes: '(max-width: 760px) 78vw, 30vw', ratio: '4 / 5' })}
      <div class="vedette-texte">
        <p class="vedette-famille">${(imageDe(v.famille).nom) || ''}</p>
        <h3>${v.titre}</h3>
        <p class="vedette-items">${v.items.join(' · ')}</p>
        ${c.lien('mon-projet', { ancre: 'formulaire', params: envieDe(v.titre), classe: 'lien-fleche', texte: html`${c.s('themes.catalogue.choisir')}` })}
      </div>
    </article>`)}
  </div>
  <p class="conteneur vedettes-tous" data-anime>${c.lien('themes-et-destinations', { classe: 'bouton bouton--contour', texte: c.t('accueil.themes.tous') })}</p>
</section>

<section class="destinations" id="destinations">
  <div class="conteneur destinations-tete">
    ${titre(c, 'accueil.destinations', { classe: 'titre-section' })}
    <p data-anime>${c.t('accueil.destinations.texte')}</p>
  </div>
  ${c.media({ nom: 'grok/themes-ouverture', alt: 'Panorama en papier déchiré : lagon, collines, dunes et sommets enneigés', classe: 'destinations-bande', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <ul class="conteneur etiquettes" role="list">
    ${dest.map((z, i) => html`<li class="etiquette" style="--r:${[-3, 2, -1.5, 2.5, -2, 1.5, -2.5, 2][i]}deg" data-effet="etiquettes">
      <span class="etiquette-trou" aria-hidden="true"></span>
      <h3>${z.nom}</h3>
      <p class="etiquette-pays">${z.pays.map((p, j) => html`${j ? ' · ' : ''}<a href="${c.url('mon-projet', 'formulaire', `destination=${encodeURIComponent(p)}`)}" data-libelle="${c.libelle('mon-projet')}">${p}</a>`)}</p>
    </li>`)}
  </ul>
</section>

<section class="etapes" id="etapes">
  <div class="conteneur">
    ${titre(c, 'accueil.etapes', { classe: 'titre-section', suite: true })}
    <div class="etapes-parcours">
      <svg class="etapes-trace" aria-hidden="true" data-visuel><path class="etapes-trace-fond" d=""/><path class="etapes-trace-plein" d=""/></svg>
      ${avion('etapes-avion', 'data-effet="avion"')}
      <ol class="etapes-liste" role="list">
        ${D.etapes.map((e, i) => html`<li class="etape"><span class="etape-num" aria-hidden="true">${i + 1}</span><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
      </ol>
    </div>
    <p class="etapes-action" data-anime>${c.lien('comment-ca-marche', { classe: 'bouton', texte: c.t('accueil.etapes.action') })}</p>
  </div>
</section>

<section class="formules conteneur" id="formules">
  <div class="formules-tete">
    ${titre(c, 'accueil.formules', { classe: 'titre-section' })}
    <p data-anime>${c.t('accueil.formules.texte')}</p>
  </div>
  <ul class="formules-liste" role="list">
    ${D.formules.map((f) => html`<li class="formule formule--${f.statut}">
      ${icone({ planner: 'pro', existants: 'valise', compagnons: 'groupe', idee: 'idee' }[f.id], 'formule-icone')}
      <h3>${f.titre}</h3>
      <p>${f.texte}</p>
      ${f.statut === 'disponible'
        ? html`<span class="ruban-statut">${c.t('accueil.formules.disponible')}</span>${c.lien('mon-projet', { ancre: 'formulaire', classe: 'lien-fleche', texte: c.t('accueil.formules.lien') })}`
        : html`<span class="tampon tampon--bientot" data-tampon data-effet="tampons">${c.t('accueil.formules.bientot')}</span>`}
    </li>`)}
  </ul>
</section>

<section class="rencontres" id="rencontres">
  ${c.media({ nom: 'accueil-rencontres', alt: 'Quatre amies dans la mer au coucher du soleil, les mains en cœur', classe: 'rencontres-media', sizes: '100vw', cadrage: '53% 54%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur rencontres-contenu">
    <blockquote class="feuille rencontres-feuille" data-anime>
      <p class="rencontres-titre">${c.t('accueil.rencontres.titre')}</p>
      <p>${c.t('accueil.rencontres.texte')}</p>
    </blockquote>
  </div>
</section>

${fin(c)}
`;
};
