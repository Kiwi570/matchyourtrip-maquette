/* Composants du projet MatchYourTrip : titres à mot fuchsia, papier déchiré, icônes en papier, tampons, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Titre en trois parties (titre1, <em>titre2</em>, titre3 si suite: true) : la ponctuation de fin garde son espace insécable. */
export function titre(c, base, { niveau = 'h2', classe = '', attrs = 'data-anime="lignes"', suite = false } = {}) {
  const a = c.t(`${base}.titre1`), b = c.t(`${base}.titre2`);
  const fin = suite ? c.s(`${base}.titre3`) : '';
  const apres = fin ? (/^[?!:;]/.test(fin) ? html`${brut('&nbsp;')}${fin}` : html` ${c.t(`${base}.titre3`)}`) : '';
  const colle = /['’]$/.test(c.s(`${base}.titre1`)) ? '' : ' ';
  return html`${brut(`<${niveau}${classe ? ` class="${classe}"` : ''}${attrs ? ' ' + attrs : ''}>`)}${a}${colle}<em>${b}</em>${apres}${brut(`</${niveau}>`)}`;
}

/* Bord de papier déchiré (SVG) : chemin pseudo-aléatoire stable, collé en haut ou en bas d'une section. */
export function dechirure(classe = '', graine = 1, pointes = 34) {
  let x = 0, s = graine * 9301 + 49297;
  const alea = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const pts = [];
  for (let i = 0; i <= pointes; i++) { x = (i / pointes) * 1440; pts.push(`${x.toFixed(0)} ${(6 + alea() * 18).toFixed(1)}`); }
  return brut(`<svg class="dechirure ${classe}" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 L${pts.join(' L')} L1440 40 Z"/></svg>`);
}

/* Icônes « papier découpé » (trait fuchsia sur pastille crème). */
const ICONES = {
  carte: '<path d="M9 14l10-4 10 4 10-4v24l-10 4-10-4-10 4z"/><path d="M19 10v24M29 14v24"/><circle cx="34" cy="17" r="3.2"/>',
  boussole: '<circle cx="24" cy="24" r="15"/><path d="M29.5 18.5l-3.6 7.4-7.4 3.6 3.6-7.4z"/><path d="M24 6v4M24 38v4M6 24h4M38 24h4"/>',
  onglets: '<rect x="8" y="12" width="32" height="23" rx="3"/><path d="M8 18h32M13 15h4M20 15h4"/><path d="M18 41h12M24 35v6"/><circle cx="24" cy="26.5" r="4"/>',
  carnet: '<rect x="11" y="7" width="26" height="34" rx="3"/><path d="M11 13H8M11 21H8M11 29H8M11 37H8"/><circle cx="25" cy="21" r="6.5"/><path d="M18.5 21h13M25 14.5c2.4 3.6 2.4 9.4 0 13M25 14.5c-2.4 3.6-2.4 9.4 0 13"/>',
  envie: '<path d="M24 39s-13-8-13-17a7 7 0 0 1 13-3.6A7 7 0 0 1 37 22c0 9-13 17-13 17z"/>',
  pro: '<circle cx="24" cy="17" r="7"/><path d="M11 40c1.5-8 6.5-12 13-12s11.5 4 13 12"/><path d="M33 9l3-3M36 13h4"/>',
  avion: '<path d="M6 25l34-13-9 28-8-10z"/><path d="M23 30l17-18"/>',
  ballon: '<path d="M24 6c-8.3 0-14 6.2-14 13.6C10 28 18 33 21 36h6c3-3 11-8 11-16.4C38 12.2 32.3 6 24 6z"/><path d="M21 36l1 5h4l1-5M24 6v30M16 10c-2 6-1 16 5 26M32 10c2 6 1 16-5 26"/>',
  graine: '<path d="M24 41V22"/><path d="M24 25c-8 0-12-5-12-12 8 0 12 5 12 12zM24 22c0-7 4-11 11-11 0 7-4 11-11 11z"/>',
  etoile: '<path d="M24 7l4.6 10.5 11.4 1.1-8.6 7.6 2.5 11.2L24 31.6l-9.9 5.8 2.5-11.2-8.6-7.6 11.4-1.1z"/>',
  idee: '<path d="M18 30c-3.5-2.6-5-6-5-9.5a11 11 0 0 1 22 0c0 3.5-1.5 6.9-5 9.5v4H18z"/><path d="M19 39h10"/>',
  groupe: '<circle cx="17" cy="18" r="5"/><circle cx="31" cy="18" r="5"/><path d="M7 37c1-6 5-9 10-9s9 3 10 9M21 37c1-6 5-9 10-9s9 3 10 9"/>',
  valise: '<rect x="9" y="15" width="30" height="23" rx="3"/><path d="M18 15v-4h12v4M9 24h30M17 38v3M31 38v3"/>',
};
export const icone = (nom, classe = '', attrs = '') => brut(`<svg class="icone ${classe}" viewBox="0 0 48 48" aria-hidden="true" data-visuel${attrs ? ' ' + attrs : ''}><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ICONES[nom] || ICONES.envie}</g></svg>`);

/* Petit cœur dessiné. */
export const coeur = (classe = '') => brut(`<svg class="coeur ${classe}" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21s-9-5.6-9-12A5 5 0 0 1 12 6a5 5 0 0 1 9 3c0 6.4-9 12-9 12z"/></svg>`);

/* Avion en papier. */
export const avion = (classe = '', attrs = '') => brut(`<svg class="avion ${classe}" viewBox="0 0 48 40" aria-hidden="true" data-visuel${attrs ? ' ' + attrs : ''}><path d="M2 20L46 2 34 38 24 26z" fill="#F7F0E6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M24 26L46 2 18 22z" fill="#F29B4B" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`);

/* Pastille ronde (objet d'ouverture de chaque page : l'intro et le voile finissent sur elle). */
export function pastille(c, texte, { classe = '', attrs = '' } = {}) {
  return html`<div class="pastille ${classe}" data-iris-centre="disque" data-grille="fil"${brut(attrs ? ' ' + attrs : '')}>
  <svg class="pastille-bord" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="56"/></svg>
  <img src="/assets/images/logo.svg" alt="" width="46" height="46">
  <span class="pastille-texte">${texte}</span>
</div>`;
}

/* Appel final de chaque page : nuit en papier, deux actions. */
export function fin(c, { id = 'fin' } = {}) {
  return html`<section class="fin" id="${id}">
  ${dechirure('dechirure--haut dechirure--prune', 7)}
  ${c.media({ nom: 'grok/appel-nuit', alt: '', classe: 'fin-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="conteneur fin-contenu">
    <p class="note-main fin-note">${c.t('fin.note')}</p>
    ${titre(c, 'fin', { classe: 'titre-section', suite: true })}
    <p class="fin-texte" data-anime>${c.t('fin.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('mon-projet', { ancre: 'formulaire', classe: 'bouton bouton--clair', texte: c.t('fin.action'), attrs: 'data-survol="magnetique"' })}
      ${c.page.cle !== 'faire-un-don' ? c.lien('faire-un-don', { classe: 'bouton bouton--contour-clair', texte: c.t('fin.don') }) : c.lien('themes-et-destinations', { classe: 'bouton bouton--contour-clair', texte: c.t('commun.themesCourt') })}
    </p>
  </div>
</section>`;
}
