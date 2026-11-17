/* Comment ça marche : ouverture scindée (jumelles), bénéfices, rencontres, étapes, formules, questions, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, dechirure, icone, avion, pastille, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'comment-ca-marche', fichier: 'comment-ca-marche', imagePartage: 'cmm-ouverture-1080.webp' };

export default (c) => {
  const D = c.donnees.contenus;
  return html`
<section class="ouv ouv--scindee" id="debut">
  <div class="ouv-texte">
    <p class="note-main">${c.t('cmm.hero.note')}</p>
    ${titre(c, 'cmm.hero', { niveau: 'h1', classe: 'ouv-titre titre-colle', attrs: 'data-anime="gsap" data-grille="typo"', suite: true })}
    <p class="ouv-intro" data-anime="gsap">${c.t('cmm.hero.texte')}</p>
    <p class="ouv-actions" data-anime="gsap">${c.lien('mon-projet', { ancre: 'formulaire', classe: 'bouton', texte: c.t('cmm.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouv-info" data-info-cle><span class="point-vivant" aria-hidden="true"></span>${c.t('cmm.hero.info')}</p>
  </div>
  <div class="ouv-visuel jumelles">
    ${c.media({ nom: 'cmm-ouverture', alt: 'Collage en papier : une voyageuse observe le paysage aux jumelles depuis un véhicule de safari', priorite: true, classe: 'jumelles-media', sizes: '(max-width: 760px) 92vw, 46vw', cadrage: '55% 45%', attrs: 'data-effet="jumelles"' })}
    ${pastille(c, 'Zoom !', { classe: 'ouv-pastille' })}
  </div>
</section>

<section class="benefices conteneur" id="benefices">
  ${titre(c, 'cmm.benefices', { classe: 'titre-section', suite: true })}
  <div class="benefices-grille">
  <div class="onglets-scene" aria-hidden="true" data-visuel data-grille="scene">
    <div class="navigateur">
      <div class="nav-barre"><span class="nav-points"><i></i><i></i><i></i></span>
        <ul class="onglets">${["Vols", "Hôtel", "Visa", "Météo", "Avis", "Train", "Budget", "Forum", "Voiture", "Assurance", "Carte", "Plages", "Musées", "Change"].map((o) => html`<li data-effet="onglets">${o}</li>`)}</ul>
      </div>
      <div class="nav-page">
        <div class="nav-lignes"><span class="nav-ligne"></span><span class="nav-ligne nav-ligne--courte"></span><span class="nav-ligne"></span><span class="nav-ligne nav-ligne--courte"></span></div>
        <div class="carnet-mini">
          <img src="/assets/images/logo.svg" alt="" width="34" height="34">
          <p class="carnet-mini-titre">${c.t('cmm.onglets.carnet')}</p>
          <p>✓ ${c.t('cmm.onglets.l1')}</p><p>✓ ${c.t('cmm.onglets.l2')}</p><p>✓ ${c.t('cmm.onglets.l3')}</p>
        </div>
      </div>
    </div>
    <p class="onglets-compteur"><span class="onglets-n" data-onglets-n>14</span> <span data-onglets-libelle data-singulier="${c.t('cmm.onglets.ouvert')}">${c.t('cmm.onglets.ouverts')}</span></p>
  </div>
  <ol class="benefices-liste" role="list">
    ${D.benefices.map((b, i) => html`<li class="benefice">
      <span class="benefice-icone" data-effet="benefices">${icone(b.icone)}</span>
      <div><h3><span class="benefice-num">${i + 1}.</span> ${b.titre}</h3><p>${b.texte}</p></div>
    </li>`)}
  </ol>
  </div>
</section>

<section class="histoire" id="rencontres">
  ${dechirure('dechirure--haut dechirure--prune', 11)}
  <div class="conteneur histoire-grille">
    ${c.media({ nom: 'cmm-rencontres', alt: 'Collage de rencontres en voyage : repas partagé, artisans, marche dans une rivière, pont dans la jungle', classe: 'histoire-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-anime="rideau"' })}
    <div class="histoire-texte">
      ${titre(c, 'cmm.rencontres', { classe: 'titre-section' })}
      <p data-anime>${c.t('cmm.rencontres.texte')}</p>
      <p class="note-main note-main--clair" data-anime>${c.t('cmm.rencontres.note')}</p>
    </div>
  </div>
  ${dechirure('dechirure--bas dechirure--prune', 13)}
</section>

<section class="etapes etapes--page conteneur" id="etapes">
  ${titre(c, 'cmm.etapes', { classe: 'titre-section' })}
  <div class="etapes-parcours">
    <svg class="etapes-trace" aria-hidden="true" data-visuel><path class="etapes-trace-fond" d=""/><path class="etapes-trace-plein" d=""/></svg>
    ${avion('etapes-avion', 'data-effet="avion"')}
    <ol class="etapes-liste" role="list">
      ${D.etapes.map((e, i) => html`<li class="etape"><span class="etape-num" aria-hidden="true">${i + 1}</span><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
    </ol>
  </div>
</section>

<section class="formules formules--page conteneur" id="formules">
  <div class="formules-tete">${titre(c, 'cmm.formules', { classe: 'titre-section' })}</div>
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

<section class="questions conteneur" id="questions">
  <div class="questions-tete">
    ${titre(c, 'cmm.faq', { classe: 'titre-section' })}
    <div class="questions-visuel" data-visuel data-anime="cascade" aria-hidden="true">${icone('idee')}${icone('pro')}${icone('carnet')}</div>
  </div>
  <div class="questions-liste" data-anime="cascade">
    ${D.faq.map((f) => html`<details class="question"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
</section>

${fin(c)}
`;
};
