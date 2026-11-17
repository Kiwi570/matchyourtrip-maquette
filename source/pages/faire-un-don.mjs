/* Faire un don : ouverture plein cadre (montgolfière), mission en trois mots, utilité du don,
   formulaire de don simulé à montant libre (la montgolfière gonfle), appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, icone, pastille, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'faire-un-don', fichier: 'faire-un-don', imagePartage: 'grok/don-ouverture-1280.webp' };

const ballon = (classe) => `<svg class="ballon ${classe}" viewBox="0 0 120 170" aria-hidden="true">
  <g class="ballon-enveloppe"><path d="M60 6C29 6 8 29 8 57c0 30 28 50 40 66h24c12-16 40-36 40-66C112 29 91 6 60 6z" fill="#C42A7E"/>
  <path d="M60 6C45 6 36 29 36 57c0 30 12 50 16 66h16c4-16 16-36 16-66C84 29 75 6 60 6z" fill="#F29B4B"/>
  <path d="M60 6c-5 0-8 23-8 51 0 30 4 50 5 66h6c1-16 5-36 5-66 0-28-3-51-8-51z" fill="#F7F0E6"/></g>
  <path d="M50 123l3 18M70 123l-3 18" stroke="#2B1F24" stroke-width="2"/>
  <rect x="49" y="141" width="22" height="16" rx="3" fill="#B0805A" stroke="#2B1F24" stroke-width="2"/>
</svg>`;

export default (c) => html`
<section class="ouv ouv--plein" id="debut">
  ${c.media({ nom: 'grok/don-ouverture', alt: "Montgolfière en papier fuchsia et abricot qui s’élève au-dessus de collines en papier", priorite: true, classe: 'ouv-fond', sizes: '100vw', attrs: 'data-effet="envol"' })}
  <div class="conteneur ouv-plein-contenu">
    <div class="feuille ouv-feuille">
      ${pastille(c, 'Merci !', { classe: 'ouv-pastille ouv-pastille--feuille' })}
      ${titre(c, 'don.hero', { niveau: 'h1', classe: 'ouv-titre ouv-titre--moyen titre-colle', attrs: 'data-anime="gsap" data-grille="typo"' })}
      <p class="ouv-intro" data-anime="gsap">${c.t('don.hero.texte')}</p>
      <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#don" data-action-principale data-survol="magnetique">${c.t('don.hero.action')}</a></p>
      <p class="ouv-info" data-info-cle><span class="point-vivant" aria-hidden="true"></span>${c.t('don.hero.info')}</p>
    </div>
  </div>
</section>

<section class="mission conteneur" id="mission">
  <h2 class="titre-section mission-titre" data-anime="lignes">${c.t('don.mission.titre1')}</h2>
  <ul class="mission-mots" role="list" data-visuel>
    <li style="--r:-4deg" data-effet="mots-papier">${c.t('don.mission.mot1')}</li>
    <li style="--r:3deg" data-effet="mots-papier">${c.t('don.mission.mot2')}</li>
    <li style="--r:-2deg" data-effet="mots-papier">${c.t('don.mission.mot3')}</li>
  </ul>
  <p class="mission-texte" data-anime>${c.t('don.mission.texte')}</p>
</section>

<section class="utilite" id="utilite">
  <div class="conteneur">
    ${titre(c, 'don.utilite', { classe: 'titre-section' })}
    <ul class="utilite-liste" role="list" data-anime="cascade">
      ${[['ballon', 1], ['etoile', 2], ['graine', 3]].map(([ic, n]) => html`<li class="fiche fiche--simple">${icone(ic, 'fiche-icone')}<h3>${c.t(`don.utilite.u${n}t`)}</h3><p>${c.t(`don.utilite.u${n}`)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="don conteneur" id="don">
  <div class="don-visuel" data-visuel>
    <div class="don-ciel" aria-hidden="true"><span class="nuage nuage--1"></span><span class="nuage nuage--2"></span><span class="nuage nuage--3"></span><span class="soleil"></span></div>
    <svg class="don-collines" viewBox="0 0 400 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 L30 48 L62 58 L96 40 L130 54 L166 36 L204 52 L240 34 L276 50 L312 38 L350 54 L400 42 L400 140 L0 140Z" fill="#E9A6C6"/><path d="M0 84 L40 72 L80 86 L120 70 L160 84 L200 68 L240 82 L280 70 L320 86 L360 74 L400 82 L400 140 L0 140Z" fill="#F5BE8C"/><path d="M0 108 L44 98 L88 110 L132 96 L176 108 L220 98 L264 110 L308 98 L352 108 L400 100 L400 140 L0 140Z" fill="#EFE2CF"/></svg>
    ${brut(ballon('don-ballon').replace('<svg class=', '<svg data-effet="ballon" class='))}
    <p class="don-montant-affiche" aria-hidden="true"><span data-don-affiche>20</span>&nbsp;€</p>
  </div>
  <form class="don-form feuille" data-formulaire data-don novalidate>
    ${titre(c, 'don.form', { classe: 'titre-section titre-section--moyen' })}
    <div class="champ champ--montant">
      <label for="don-montant">${c.t('don.form.montant')}</label>
      <div class="pas-a-pas">
        <button type="button" class="pas" data-pas="-5" aria-label="${c.s('don.form.moins')}">−</button>
        <input id="don-montant" name="montant" type="number" inputmode="numeric" min="1" step="1" value="20" required>
        <button type="button" class="pas" data-pas="5" aria-label="${c.s('don.form.plus')}">+</button>
      </div>
      <p class="champ-aide">${c.t('don.form.ballon')}</p>
    </div>
    <div class="champ"><label for="don-prenom">${c.t('don.form.prenom')}</label><input id="don-prenom" name="prenom" autocomplete="given-name"></div>
    <div class="champ"><label for="don-email">${c.t('don.form.email')} <span class="requis">(obligatoire)</span></label><input id="don-email" name="email" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="don-mot">${c.t('don.form.mot')}</label><textarea id="don-mot" name="mot" rows="3"></textarea></div>
    <p class="mention-donnees">${c.t('don.form.donnees')} ${c.t('commun.confidentialiteBientot')}</p>
    <button type="submit" class="bouton">${c.t('don.form.envoyer')}</button>
    <p data-message-envoi data-texte="${c.s('don.form.simule')}" role="status" tabindex="-1" hidden></p>
  </form>
</section>

${fin(c)}
`;

export { ballon };
