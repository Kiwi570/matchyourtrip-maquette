/* Gabarit commun : head, en-tête, menu, pied de page, barre fixe du téléphone, voile.
   Les conventions data-* sont celles que lisent le socle JavaScript et l'audit (voir le README). */
import { html, brut } from '../../outils/gabarit.mjs';

const navigation = (c) => c.site.navigation.filter((cle) => c.pages[cle] && (c.pages[cle].langues || c.langues).includes(c.l));

function tete(c) {
  const p = c.page, cle = p.cle;
  const titre = c.s(`pages.${cle}.titre`), description = c.s(`pages.${cle}.description`);
  const ici = c.abs(c.url(cle));
  const imagePartage = c.abs(`/assets/partage/${p.partage === false ? 'accueil' : cle}-${c.l}.jpg`);
  const autres = c.alternatives(cle);
  const structure = c.donnees.structure ? JSON.stringify(c.donnees.structure).replace(/</g, '\\u003c') : '';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titre}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${ici}">
${autres.length > 1 ? autres.map((a) => html`<link rel="alternate" hreflang="${a.l}" href="${c.abs(a.url)}">\n`) : ''}${autres.length > 1 ? html`<link rel="alternate" hreflang="x-default" href="${c.abs(c.alternatives(cle)[0].url)}">` : ''}
<style>${brut(c.critique.css)}</style>
<script>${brut(c.critique.js)}</script>
${(c.site.polices || []).map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>\n`)}<link rel="stylesheet" href="${c.asset('css/socle.css')}">
<link rel="stylesheet" href="${c.asset('css/site.css')}">
<link rel="modulepreload" href="${c.asset('js/site.js')}">
<link rel="modulepreload" href="${c.asset('js/socle/index.js')}">
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script type="module" src="${c.asset('js/site.js')}"></script>
<meta name="theme-color" content="${c.site.couleurs.theme || c.site.couleurs.fond}">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.site.nom}">
<meta property="og:locale" content="${c.l === 'fr' ? 'fr_FR' : c.l === 'en' ? 'en_GB' : c.l}">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ici}">
<meta property="og:image" content="${imagePartage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${c.s(`pages.${p.partage === false ? 'accueil' : cle}.partageAlt`)}">
<meta name="twitter:card" content="summary_large_image">
${structure ? html`<script type="application/ld+json">${brut(structure)}</script>` : ''}
</head>`;
}

function entete(c) {
  const autreLangue = c.alternatives(c.page.cle).filter((a) => a.l !== c.l);
  return html`<header data-entete>
  <div class="entete-rangee">
    <a class="entete-logo" href="${c.url('accueil')}" data-libelle="${c.libelle('accueil')}"${c.page.cle === 'accueil' ? brut(' aria-current="page"') : ''}>
      <img src="/assets/images/logo.svg" alt="" width="36" height="36"><span class="logo-mot">Match<em>Your</em>Trip</span>
    </a>
    <nav data-nav aria-label="${c.s('commun.navigation')}">
      <ul>${navigation(c).filter((k) => k !== 'accueil' && k !== (c.site.actionEntete || {}).page).map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
    <div class="entete-actions">
      ${autreLangue.map((a) => html`<a class="entete-langue" href="${a.url}" hreflang="${a.l}" lang="${a.l}" data-langue="${a.l}" aria-label="${c.s('commun.langueAutre')}">${a.l}</a>`)}
      ${c.site.actionEntete ? html`<a class="bouton" href="${c.url(c.site.actionEntete.page, c.site.actionEntete.ancre || '')}" data-libelle="${c.libelle(c.site.actionEntete.page)}">${c.t('commun.actionEntete')}</a>` : ''}
      <button type="button" data-menu-bouton aria-controls="menu" aria-expanded="false" data-libelle-ouvrir="${c.s('commun.menu')}" data-libelle-fermer="${c.s('commun.fermer')}"><span data-libelle-bouton>${c.t('commun.menu')}</span></button>
      <a class="menu-sansjs" href="#menu" data-menu-lien>${c.t('commun.menu')}</a>
    </div>
  </div>
</header>
<script>/* Avant le premier affichage : rangées de la navigation (même règle que ajusterNav dans assets/js/socle/entete.js)
   et hauteur réelle de l'en-tête, pour que rien ne saute quand le JavaScript du site prend la main. */
(function () {
  var h = document.documentElement, u = document.querySelector('[data-nav] ul'), e = document.querySelector('[data-entete]');
  if (u) {
    var deborde = function () { return u.scrollWidth > u.clientWidth + 1; }, c = deborde();
    if (c && window.matchMedia('(min-width: 900px)').matches) {
      h.classList.add('nav-deux-rangees'); c = deborde();
      if (c) { h.classList.add('nav-deux-lignes'); var a = u.querySelector('a'); c = !a || u.getBoundingClientRect().height > a.getBoundingClientRect().height * 2.5; }
      if (c) h.classList.remove('nav-deux-rangees', 'nav-deux-lignes');
    }
    if (c) h.classList.add('nav-compacte');
  }
  if (e) h.style.setProperty('--entete-h', Math.round(e.getBoundingClientRect().height) + 'px');
})();</script>
<span id="menu-ferme" aria-hidden="true"></span>
<div id="menu" data-menu role="dialog" aria-modal="true" aria-label="${c.s('commun.menu')}">
  <p class="menu-sansjs-fermer"><a href="#menu-ferme">${c.t('commun.fermer')}</a></p>
  <ul>${navigation(c).map((k, i) => html`<li style="--i:${i}">${c.lien(k, { classe: 'menu-lien' })}</li>`)}</ul>
  <p class="menu-note">${c.t('commun.slogan')}</p>
  ${autreLangue.map((a) => html`<p><a class="entete-langue" href="${a.url}" hreflang="${a.l}" lang="${a.l}" data-langue="${a.l}">${c.s('commun.langueAutre')}</a></p>`)}
</div>`;
}

function pied(c) {
  return html`<footer class="pied" id="pied">
  <svg class="pied-dechirure" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 L0 18 L40 10 L86 22 L130 8 L178 20 L226 6 L270 19 L318 9 L366 23 L410 7 L458 18 L506 8 L552 21 L600 10 L648 24 L694 9 L742 19 L790 6 L838 20 L884 10 L932 23 L980 8 L1026 18 L1074 7 L1120 21 L1168 9 L1216 22 L1262 8 L1310 19 L1358 10 L1404 21 L1440 12 L1440 40 Z"/></svg>
  <div class="conteneur pied-grille">
    <div class="pied-marque">
      <p class="pied-logo"><img src="/assets/images/logo-clair.svg" alt="" width="44" height="44"><span class="logo-mot">Match<em>Your</em>Trip</span></p>
      <p class="pied-slogan">${c.t('commun.slogan')}</p>
      <p class="pied-signature">${c.t('commun.signature')}</p>
    </div>
    <nav aria-label="${c.s('commun.sommaire')}">
      <p class="pied-titre">${c.t('commun.sommaire')}</p>
      <ul>${navigation(c).map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
    <div>
      <p class="pied-titre">${c.t('commun.confort')}</p>
      <ul>
        <li>${c.lien('mon-projet', { params: 'profil=pro', ancre: 'formulaire', texte: html`${c.t('commun.pro')} ${c.t('commun.proLien')}` })}</li>
        <li><a href="#haut" data-sans-transition>${c.t('commun.retourHaut')}</a></li>
      </ul>
      <p class="pied-legal">${c.t('commun.mentions')}${brut('&nbsp;')}: ${c.t('commun.aCompleter')}<br>${c.t('commun.confidentialite')}${brut('&nbsp;')}: ${c.t('commun.aCompleter')}</p>
    </div>
  </div>
  <div class="conteneur pied-bas"><p>${c.t('commun.maquette')}</p><p>${c.t('commun.copyright')}</p></div>
</footer>`;
}

function barre(c) {
  return html`<div data-barre-fixe>
  ${c.lien('themes-et-destinations', { classe: 'bouton bouton--contour', texte: c.t('commun.themesCourt') })}
  ${c.lien('mon-projet', { classe: 'bouton', texte: c.t('commun.actionCourte') })}
</div>`;
}

/* Voile : sa forme (glisse, iris, vague, rideau) vient de donnees/site.json (formeVoile) ; voir assets/js/socle/voile.js. */
const FORMES_VOILE = ['glisse', 'iris', 'vague', 'rideau'];
function voile(c) {
  const forme = FORMES_VOILE.includes(c.site.formeVoile) ? c.site.formeVoile : 'glisse';
  const vagues = forme === 'vague'
    ? html`<svg class="voile-vague voile-vague--haut" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120 C 240 20 480 20 720 70 S 1200 130 1440 40 V 120 H 0 Z"/></svg><svg class="voile-vague voile-vague--bas" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 C 240 100 480 100 720 50 S 1200 -10 1440 80 V 0 H 0 Z"/></svg>`
    : '';
  return html`<div data-voile data-forme="${forme}" aria-hidden="true">${vagues}<div class="voile-contenu"><img src="/assets/images/logo-clair.svg" alt="" width="56" height="56"><span data-voile-libelle>${c.libelle(c.page.cle)}</span></div></div>`;
}

export function page(c, contenu) {
  return html`<!doctype html>
<html lang="${c.l}" data-v="${c.v}"${c.site.curseur ? brut(' data-curseur') : ''}>
${tete(c)}
<body id="haut">
${voile(c)}
<div class="ouverture-panneau" data-ouverture aria-hidden="true">
  <div class="intro-scene">
    <svg class="intro-bande intro-bande--g" viewBox="0 0 600 90" preserveAspectRatio="none"><path d="M0 14 L600 6 L590 18 L598 30 L586 44 L597 58 L588 72 L600 84 L0 80 Z"/></svg>
    <svg class="intro-bande intro-bande--d" viewBox="0 0 600 90" preserveAspectRatio="none"><path d="M600 10 L0 4 L12 16 L2 30 L14 42 L3 56 L13 70 L0 86 L600 82 Z"/></svg>
    <img class="ouverture-logo" src="/assets/images/logo.svg" alt="" width="72" height="72" data-ouverture-objet>
    <svg class="intro-coeur" viewBox="0 0 24 22"><path d="M12 21s-9-5.6-9-12A5 5 0 0 1 12 6a5 5 0 0 1 9 3c0 6.4-9 12-9 12z"/></svg>
  </div>
  <p class="ouverture-nom"><span>Match</span><em>Your</em><span>Trip</span></p>
  <p class="ouverture-ligne">${c.t('commun.introLigne')}</p>
</div>
<a class="evitement" href="#contenu">${c.t('commun.evitement')}</a>
${entete(c)}
<main id="contenu" tabindex="-1"${c.page.sansAction ? brut(' data-sans-action') : ''}${c.page.sansEffet ? brut(' data-sans-effet') : ''}>
${contenu}
</main>
${pied(c)}
${barre(c)}
</body>
</html>`;
}
