/* Mon projet de voyage : ouverture (billet qui sort), formulaire en 3 étapes avec billet récapitulatif collant,
   préremplissage par l'adresse (?envie=…&destination=…&profil=pro), « et ensuite ? ». */
import { html } from '../../outils/gabarit.mjs';
import { titre, icone, pastille } from '../gabarits/composants.mjs';

export const page = { cle: 'mon-projet', fichier: 'mon-projet-de-voyage', imagePartage: 'grok/projet-ouverture-1280.webp' };

export default (c) => {
  const D = c.donnees.contenus;
  const familles = c.donnees.themes;
  return html`
<section class="ouv ouv--billet" id="debut">
  <div class="ouv-texte">
    ${titre(c, 'projet.hero', { niveau: 'h1', classe: 'ouv-titre titre-colle', attrs: 'data-anime="gsap" data-grille="typo"' })}
    <p class="ouv-intro" data-anime="gsap">${c.t('projet.hero.texte')}</p>
    <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#formulaire" data-action-principale data-survol="magnetique">${c.t('projet.hero.action')}</a></p>
    <p class="ouv-info" data-info-cle><span class="point-vivant" aria-hidden="true"></span>${c.t('projet.hero.info')}</p>
  </div>
  <div class="ouv-visuel billet-cadre">
    ${c.media({ nom: 'grok/projet-ouverture', alt: "Carnet de voyage ouvert en papier, entouré d’un avion en papier, d’une boussole et d’un chapeau de paille", priorite: true, classe: 'billet-media', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-effet="billet"' })}
    ${pastille(c, c.t('projet.hero.tampon'), { classe: 'ouv-pastille' })}
  </div>
</section>

<section class="projet" id="formulaire">
  <div class="conteneur projet-grille">
    <form class="projet-form feuille" data-formulaire data-etapes novalidate>
      <h2 class="titre-section titre-section--moyen" data-anime="lignes">${c.t('projet.form.titre')}</h2>
      <ol class="etapes-points" role="list" aria-hidden="true">
        <li class="actif">${c.t('projet.form.e1')}</li><li>${c.t('projet.form.e2')}</li><li>${c.t('projet.form.e3')}</li>
      </ol>
      <p class="etape-compte" data-etape-compte aria-live="polite">${c.t('projet.form.etape', { n: 1 })}</p>

      <fieldset class="etape-form" data-etape="1">
        <legend class="visuellement-cache">${c.t('projet.form.e1')}</legend>
        <div class="champ">
          <p class="champ-titre" id="envies-titre">${c.t('projet.form.envies')}</p>
          <div class="puces puces--form" role="group" aria-labelledby="envies-titre">
            ${familles.map((t) => html`<label class="puce puce--case"><input type="checkbox" name="famille" value="${t.nom}" data-items="${t.items.join('|')}"><span>${t.nom}</span></label>`)}
          </div>
          <input type="hidden" name="envie" value="">
        </div>
        <div class="champ">
          <label for="p-destination">${c.t('projet.form.destination')} <span class="requis">(${c.t('projet.form.requis')})</span></label>
          <p class="champ-aide" id="p-destination-aide">${c.t('projet.form.destinationAide')}</p>
          <textarea id="p-destination" name="destination" rows="4" required aria-describedby="p-destination-aide" placeholder="${c.s('projet.form.exemple')}"></textarea>
        </div>
      </fieldset>

      <fieldset class="etape-form" data-etape="2" hidden>
        <legend class="visuellement-cache">${c.t('projet.form.e2')}</legend>
        <div class="champ">
          <label for="p-participants">${c.t('projet.form.participants')}</label>
          <div class="pas-a-pas">
            <button type="button" class="pas" data-pas="-1" aria-label="${c.s('projet.form.moins')}">−</button>
            <input id="p-participants" name="participants" type="number" inputmode="numeric" min="1" max="40" step="1" value="2">
            <button type="button" class="pas" data-pas="1" aria-label="${c.s('projet.form.plus')}">+</button>
          </div>
        </div>
        <div class="champ">
          <label for="p-budget">${c.t('projet.form.budget')}</label>
          <input id="p-budget" name="budget" type="number" inputmode="numeric" min="0" step="50">
        </div>
      </fieldset>

      <fieldset class="etape-form" data-etape="3" hidden>
        <legend class="visuellement-cache">${c.t('projet.form.e3')}</legend>
        <div class="champ"><label for="p-prenom">${c.t('projet.form.prenom')}</label><input id="p-prenom" name="prenom" autocomplete="given-name"></div>
        <div class="champ"><label for="p-email">${c.t('projet.form.email')} <span class="requis">(${c.t('projet.form.requis')})</span></label><input id="p-email" name="email" type="email" autocomplete="email" required></div>
        <div class="champ"><label for="p-tel">${c.t('projet.form.tel')}</label><input id="p-tel" name="tel" type="tel" autocomplete="tel"></div>
        <label class="case"><input type="checkbox" name="profil" value="pro"><span>${c.t('projet.form.pro')}</span></label>
        <p class="mention-donnees">${c.t('projet.form.donnees')}</p>
      </fieldset>

      <div class="etapes-boutons">
        <button type="button" class="bouton bouton--contour" data-etape-precedente hidden>${c.t('projet.form.precedent')}</button>
        <button type="button" class="bouton" data-etape-suivante>${c.t('projet.form.suivant')}</button>
        <button type="submit" class="bouton" data-etape-envoi hidden>${c.t('projet.form.envoyer')}</button>
      </div>
      <p data-message-envoi data-texte="${c.s('projet.form.simule')}" role="status" tabindex="-1" hidden></p>
    </form>

    <aside class="billet" aria-label="${c.s('projet.recap.titre')}" data-recap data-effet="recap" data-grille="retour">
      <span class="tampon tampon--billet" data-tampon-billet hidden>${c.t('projet.recap.tampon')}</span>
      <div class="billet-haut">
        <img src="/assets/images/logo-clair.svg" alt="" width="34" height="34">
        <p class="billet-titre">${c.t('projet.recap.titre')}</p>
      </div>
      <dl class="billet-lignes">
        <div><dt>${c.t('projet.recap.envies')}</dt><dd data-recap-envies>${c.t('projet.recap.vide')}</dd></div>
        <div><dt>${c.t('projet.recap.destination')}</dt><dd data-recap-destination>${c.t('projet.recap.vide')}</dd></div>
        <div><dt>${c.t('projet.recap.participants')}</dt><dd data-recap-participants>2</dd></div>
        <div><dt>${c.t('projet.recap.budget')}</dt><dd data-recap-budget>${c.t('projet.recap.vide')}</dd></div>
      </dl>
      <p class="billet-pro" data-recap-pro hidden>${c.t('projet.recap.pro')}</p>
      <div class="billet-souche" aria-hidden="true"><span class="billet-code">MYT · ${'✈'}</span></div>
    </aside>
  </div>
</section>

<section class="ensuite conteneur" id="ensuite">
  ${titre(c, 'projet.ensuite', { classe: 'titre-section', suite: true })}
  <ol class="ensuite-liste" role="list" data-anime="cascade">
    ${[['carnet', 1], ['pro', 2], ['boussole', 3]].map(([ic, n]) => html`<li class="fiche fiche--simple">${icone(ic, 'fiche-icone')}<h3>${c.t(`projet.ensuite.e${n}t`)}</h3><p>${c.t(`projet.ensuite.e${n}`)}</p></li>`)}
  </ol>
</section>
`;
};
