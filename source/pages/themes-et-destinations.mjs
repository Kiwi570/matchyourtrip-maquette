/* Thèmes & destinations : grand titre puis bandeau en mosaïque, catalogue filtrable (familles, recherche, filtres dans l'adresse),
   tableau des destinations, appel « votre envie n'est pas dans la liste ? », appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, icone, pastille, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'themes-et-destinations', fichier: 'themes-et-destinations', imagePartage: 'grok/themes-ouverture-1280.webp' };

export default (c) => {
  const themes = c.donnees.themes, dest = c.donnees.destinations;
  const nbThemes = themes.reduce((n, t) => n + t.items.length, 0);
  return html`
<section class="ouv ouv--bandeau" id="debut">
  <div class="conteneur ouv-texte ouv-texte--large">
    ${titre(c, 'themes.hero', { niveau: 'h1', classe: 'ouv-titre', attrs: 'data-anime="gsap"', suite: true })}
    <div class="ouv-ligne">
      <p class="ouv-intro" data-anime="gsap">${c.t('themes.hero.texte')}</p>
      <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#catalogue" data-action-principale>${c.t('themes.hero.action')}</a></p>
      <p class="ouv-info" data-info-cle><span class="point-vivant" aria-hidden="true"></span>${c.t('themes.hero.info', { f: themes.length, t: nbThemes, d: dest.reduce((n, z) => n + z.pays.length, 0) })}</p>
    </div>
  </div>
  <div class="mosaique">
    ${c.media({ nom: 'grok/themes-ouverture', alt: 'Panorama en papier déchiré mêlant lagon, collines, dunes et sommets enneigés', priorite: true, classe: 'mosaique-photo', sizes: '100vw' })}
    ${[0, 1].map((i) => html`<div class="mosaique-bande mosaique-bande--${i}" data-effet="mosaique" aria-hidden="true" data-visuel><div class="mosaique-fond" style="--fond-o:url(/assets/images/grok/themes-ouverture-1920.webp);--fond-m:url(/assets/images/grok/themes-ouverture-mobile-1080.webp)"></div></div>`)}
    ${pastille(c, 'Bon voyage', { classe: 'mosaique-pastille' })}
  </div>
</section>

<section class="catalogue conteneur" id="catalogue">
  <div class="catalogue-tete">
    ${titre(c, 'themes.catalogue', { classe: 'titre-section' })}
    <form class="filtres" data-filtres role="search" onsubmit="return false">
      <div class="filtres-familles" role="group" aria-label="Familles de thèmes">
        <button type="button" class="puce puce--claire" data-famille="" aria-pressed="true">${c.t('themes.catalogue.toutes')}</button>
        ${themes.map((t) => html`<button type="button" class="puce puce--claire" data-famille="${t.id}" aria-pressed="false">${t.nom}</button>`)}
      </div>
      <div class="filtres-recherche champ">
        <label for="recherche-theme">${c.t('themes.catalogue.recherche')}</label>
        <input id="recherche-theme" name="q" type="search" placeholder="${c.s('themes.catalogue.placeholder')}" autocomplete="off">
      </div>
      <p class="filtres-compte" data-filtres-compte aria-live="polite">${c.t('themes.catalogue.resultats', { n: nbThemes })}</p>
    </form>
  </div>
  <ul class="familles" role="list" data-catalogue data-anime="cascade">
    ${themes.map((t) => html`<li class="famille" id="famille-${t.id}" data-famille-id="${t.id}">
      ${c.media({ nom: t.image, alt: t.alt, classe: 'famille-media', sizes: '(max-width: 760px) 92vw, 30vw' })}
      <div class="famille-texte">
        <h3>${t.nom}</h3>
        <p class="famille-phrase">${t.phrase}</p>
        <ul class="famille-items" role="list">${t.items.map((x) => html`<li data-item="${x}"><a href="${c.url('mon-projet', 'formulaire', `envie=${encodeURIComponent(x)}`)}" data-libelle="${c.libelle('mon-projet')}">${x}</a></li>`)}</ul>
      </div>
    </li>`)}
  </ul>
  <div class="catalogue-vide" data-catalogue-vide hidden>
    <p>${c.t('themes.catalogue.aucun')}</p>
    <p>${c.lien('mon-projet', { ancre: 'formulaire', classe: 'bouton', texte: c.t('themes.catalogue.aucunLien') })}</p>
  </div>
</section>

<section class="tableau" id="destinations">
  <div class="conteneur">
    <div class="tableau-tete">
      ${titre(c, 'themes.destinations', { classe: 'titre-section' })}
      <p data-anime>${c.t('themes.destinations.texte')}</p>
    </div>
    ${c.media({ nom: 'tableau-volcan', alt: 'Collage en papier découpé : un volcan dans la nuit', classe: 'tableau-bande', sizes: '(max-width: 1240px) 100vw, 1240px', attrs: 'data-anime="rideau"' })}
    <div class="zones" data-anime="cascade">
      ${dest.map((z) => html`<div class="zone" id="${z.id}">
        <h3>${icone('carte', 'zone-icone')}${z.nom}</h3>
        <ul class="zone-pays" role="list">${z.pays.map((p) => html`<li><a class="puce puce--lien" href="${c.url('mon-projet', 'formulaire', `destination=${encodeURIComponent(p)}`)}" data-libelle="${c.libelle('mon-projet')}">${p}</a></li>`)}</ul>
      </div>`)}
    </div>
  </div>
</section>

<section class="autre conteneur" id="autre">
  <div class="feuille autre-feuille">
    ${icone('envie', 'autre-icone')}
    ${titre(c, 'themes.autre', { classe: 'titre-section', suite: true })}
    <p data-anime>${c.t('themes.autre.texte')}</p>
    <p data-anime>${c.lien('mon-projet', { ancre: 'formulaire', classe: 'bouton', texte: c.t('themes.autre.action') })}</p>
  </div>
</section>

${fin(c)}
`;
};
