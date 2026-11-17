/* Page 404 : volcan en papier découpé, « hors des sentiers battus ». */
import { html } from '../../outils/gabarit.mjs';
import { titre, pastille } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv ouv--plein ouv--nuit introuvable" id="debut">
  ${c.media({ nom: 'page-404', alt: 'Collage en papier découpé : un volcan dans la nuit', priorite: true, classe: 'ouv-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur ouv-plein-contenu">
    <div class="feuille ouv-feuille">
      ${pastille(c, 'Oups !', { classe: 'ouv-pastille ouv-pastille--feuille' })}
      ${titre(c, 'introuvable', { niveau: 'h1', classe: 'ouv-titre ouv-titre--moyen', attrs: 'data-anime="gsap"' })}
      <p class="ouv-intro" data-anime="gsap">${c.t('introuvable.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">
        ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
        ${c.lien('themes-et-destinations', { classe: 'bouton bouton--contour', texte: c.t('introuvable.themes') })}
      </p>
      <p class="ouv-info" data-info-cle>${c.t('commun.slogan')}</p>
    </div>
  </div>
</section>
`;
