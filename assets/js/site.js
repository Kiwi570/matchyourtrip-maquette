/* Effets propres à MatchYourTrip. Le socle gère l'ouverture, le voile, l'en-tête, les apparitions et la bibliothèque
   d'effets ; ici : l'intro (épingle, bandes de papier qui se rejoignent), les ouvertures des pages, et les effets du plan
   (papier-couches, match, fiches, colonnes, etiquettes, avion, tampons, jumelles, mosaique, envol, billet, ballon…).
   Chaque effet propre porte data-effet="nom" sur l'élément qui bouge. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => window.matchMedia('(max-width: 760px)').matches;
const NBSP = '\u00a0';
/* Entrée jouée une fois quand l'élément arrive dans l'écran (jamais rejouée à l'envers : rien ne se chevauche en remontant). */
const entree = (cibles, de, vers, declencheur, start = 'top 86%') => (document.documentElement.dataset.arrivee === 'retour' ? null : gsap.fromTo(cibles, de, { ...vers, duration: vers.duration || 0.95, ease: vers.ease || 'power3.out', scrollTrigger: { trigger: declencheur, start, once: true } }));

/* ---------- Ouverture de chaque page (jouée à la fin de l'intro ou pendant le retrait du voile) ---------- */
function ouverturePage(tl, t) {
  if ($('.hero')) {
    tl.fromTo('.hero-couches .couche', { yPercent: 70, y: 0 }, { yPercent: 0, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' }, t - 0.2)
      .fromTo('.hero-ligne', { yPercent: 118, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }, t)
      .fromTo('.hero-note', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, t + 0.1)
      .fromTo('.hero-intro, .hero-actions, .hero-info', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, t + 0.25);
  }
  const ouv = $('.ouv');
  if (ouv) {
    const blocs = $$('[data-anime="gsap"]', ouv);
    if (blocs.length) tl.fromTo(blocs, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out' }, t);
    const jm = $('.jumelles-media');
    if (jm) tl.fromTo(jm, { '--rj': '22%' }, { '--rj': '100%', duration: 1.1, ease: 'power2.inOut' }, t + 0.1);
    const bandes = $$('.mosaique-bande');
    if (bandes.length) tl.fromTo(bandes, { xPercent: (i) => [-7, 6][i] }, { xPercent: 0, duration: 1, ease: 'power3.out', stagger: 0.06 }, t - 0.1);
    const billet = $('.billet-cadre');
    if (billet) tl.fromTo(billet, { y: 70, rotation: 7, opacity: 0 }, { y: 0, rotation: 1.5, opacity: 1, duration: 0.9, ease: 'back.out(1.4)' }, t);
  }
  return tl;
}
function etatFinalPage() {
  if (!gsap) return;
  gsap.set('.hero-couches .couche, .hero-ligne, .hero-note, .hero-intro, .hero-actions, .hero-info, .ouv [data-anime="gsap"], .mosaique-bande', { clearProps: 'transform,opacity' });
  gsap.set('.jumelles-media', { '--rj': '100%' });
  gsap.set('.billet-cadre', { clearProps: 'transform,opacity' });
}

/* ---------- Accueil : couches de papier en profondeur, l'image se rapproche ---------- */
function papierCouches() {
  const hero = $('.hero'); if (!hero || !ST) return;
  const fig = $('.hero-media', hero);
  gsap.to(fig, { scale: 1.07, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  $$('.couche', hero).forEach((c, i) => gsap.to(c, { y: -[18, 34, 52][i], ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.4 } }));
  /* Le papier respire : les couches ondulent doucement et la pastille tourne (propriétés translate et rotate, à part du transform de GSAP). */
  const couches = $$('.couche', hero), bord = $('.hero-pastille .pastille-bord');
  boucle(hero, (dt, t) => {
    couches.forEach((c, i) => { c.style.translate = `${(Math.sin(t * (0.45 + i * 0.12) + i * 1.7) * (6 + i * 3)).toFixed(2)}px 0`; });
    if (bord) bord.style.rotate = `${(t * 9) % 360}deg`;
  });
}

/* ---------- Le match : une envie + une destination, les cartes se rejoignent, le tampon tombe ---------- */
function match() {
  const zone = $('[data-match]'); if (!zone) return;
  const tampon = $('[data-match-tampon]', zone), texte = $('[data-match-texte]'), lien = $('[data-match-lien]');
  const g = $('[data-match-carte="g"]', zone), d = $('[data-match-carte="d"]', zone);
  const choix = { envie: $('[data-match-envie][aria-pressed="true"]', zone)?.dataset.matchEnvie, dest: $('[data-match-dest][aria-pressed="true"]', zone)?.dataset.matchDest };
  const tamponner = () => gsap.fromTo(tampon, { scale: 1.9, opacity: 0, rotation: -26 }, { scale: 1, opacity: 1, rotation: -12, duration: 0.5, ease: 'back.out(2.2)', overwrite: true });
  const maj = () => {
    const base = lien.getAttribute('href').split('?')[0].split('#')[0];
    const p = new URLSearchParams(); if (choix.envie) p.set('envie', choix.envie); if (choix.dest) p.set('destination', choix.dest);
    lien.setAttribute('href', `${base}?${p.toString()}#formulaire`);
    texte.textContent = `«${NBSP}${choix.envie}${NBSP}» × ${choix.dest}${NBSP}: nous cherchons pour vous le·la pro qui connaît les deux.`;
    tamponner();
    gsap.fromTo([g, d], { x: (i) => (i ? 18 : -18) }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  };
  zone.addEventListener('click', (e) => {
    const b = e.target.closest('[data-match-envie], [data-match-dest]'); if (!b) return;
    const groupe = b.hasAttribute('data-match-envie') ? 'envie' : 'dest';
    $$(groupe === 'envie' ? '[data-match-envie]' : '[data-match-dest]', zone).forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    choix[groupe] = groupe === 'envie' ? b.dataset.matchEnvie : b.dataset.matchDest;
    maj();
  });
  if (!ST) return;
  /* Au défilement : les deux cartes arrivent des côtés et se rejoignent, puis le tampon tombe. */
  entree(g, { x: () => (telephone() ? -24 : -90), rotation: -7 }, { x: 0, rotation: -1.5, duration: 1.1 }, '.match-table', 'top 88%');
  entree(d, { x: () => (telephone() ? 24 : 90), rotation: 7 }, { x: 0, rotation: 1.2, duration: 1.1 }, '.match-table', 'top 88%');
  entree(tampon, { scale: 1.9, opacity: 0, rotation: -26 }, { scale: 1, opacity: 1, rotation: -12, duration: 0.55, ease: 'back.out(2.2)', delay: 0.75 }, '.match-table', 'top 88%');
}

/* ---------- Fiches de carnet qui se posent ---------- */
function fiches() {
  if (!ST) return;
  $$('.fiche:not(.fiche--simple)').forEach((f, i) => {
    const r = parseFloat(getComputedStyle(f).getPropertyValue('--r')) || 0;
    const rf = telephone() ? 0 : r;
    entree(f, { y: 70 + (i % 2) * 40, rotation: rf * 8 + (i % 2 ? 4 : -4), opacity: 0 }, { y: 0, rotation: rf, opacity: 1, delay: i * 0.12 }, f.parentElement, 'top 88%');
  });
}

/* ---------- Thèmes : colonnes qui glissent à des vitesses différentes (ordinateur) ---------- */
function colonnes() {
  if (!ST) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    $$('.vedette').forEach((v, i) => {
      const col = i % 3;
      gsap.fromTo(v, { y: col === 1 ? 60 : 16 }, { y: col === 1 ? -20 : -16, ease: 'none', scrollTrigger: { trigger: '.vedettes-piste', start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
    });
  });
  mm.add('(max-width: 760px)', () => {
    $$('.vedette').forEach((v) => {
      entree(v, { y: 50, rotation: 2, opacity: 0 }, { y: 0, rotation: 0, opacity: 1 }, '.vedettes-piste', 'top 92%');
    });
  });
}

/* ---------- Étiquettes de bagage qui se balancent en place ---------- */
function etiquettes() {
  if (!ST) return;
  $$('.etiquette').forEach((e, i) => {
    const r = parseFloat(getComputedStyle(e).getPropertyValue('--r')) || 0;
    entree(e, { rotation: i % 2 ? 9 : -9, y: 40, opacity: 0 }, { rotation: 0, y: 0, opacity: 1, duration: 1.1, ease: 'elastic.out(1, 0.6)', delay: (i % 4) * 0.08 }, e.parentElement, 'top 90%');
  });
}

/* ---------- Avion en papier qui suit le parcours des étapes ---------- */
function avion() {
  $$('.etapes-parcours').forEach((parcours) => {
    const svg = $('.etapes-trace', parcours), fond = $('.etapes-trace-fond', parcours), plein = $('.etapes-trace-plein', parcours);
    const av = $('.etapes-avion', parcours); if (!svg || !av) return;
    let geo = null;
    const mesurer = () => {
      const W = parcours.clientWidth, H = parcours.clientHeight, vertical = telephone();
      const f = vertical
        ? (p) => ({ x: 22 + 9 * Math.sin(p * Math.PI * 3), y: 10 + p * (H - 40) })
        : (p) => ({ x: p * W, y: 46 + 26 * Math.sin(p * Math.PI * 2.5 + 0.4) });
      const pts = Array.from({ length: 121 }, (_, i) => f(i / 120));
      const d = 'M' + pts.map((q) => `${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(' L');
      fond.setAttribute('d', d); plein.setAttribute('d', d);
      svg.setAttribute('viewBox', `0 0 ${vertical ? 60 : W} ${vertical ? H : 120}`);
      geo = { f, vertical };
    };
    const poser = (p) => {
      if (!geo) return;
      const a = geo.f(Math.max(0, p)), b = geo.f(Math.min(1, p + 0.01));
      const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
      av.style.transform = `translate(${a.x - av.clientWidth / 2}px, ${a.y - av.clientHeight / 2}px) rotate(${ang - 18}deg)`;
      plein.style.clipPath = geo.vertical ? `inset(0 0 ${(1 - p) * 100}% 0)` : `inset(0 ${(1 - p) * 100}% 0 0)`;
    };
    mesurer(); poser(0.02);
    new ResizeObserver(() => { mesurer(); poser(etatAvion.p); }).observe(parcours);
    const etatAvion = { p: 0.02 };
    if (!ST) { poser(1); return; }
    ST.create({ trigger: parcours, start: 'top 80%', end: 'bottom 55%', scrub: 0.6, onUpdate: (s) => { etatAvion.p = 0.02 + s.progress * 0.96; poser(etatAvion.p); } });
  });
}

/* ---------- Tampons « Prochainement » qui tombent sur les cartes ---------- */
function tampons() {
  if (!ST) return;
  $$('[data-tampon]').forEach((t, i) => {
    entree(t, { scale: 2.2, opacity: 0, rotation: 32 }, { scale: 1, opacity: 1, rotation: 10, duration: 0.5, ease: 'back.out(2)', delay: 0.35 + i * 0.22 }, t.closest('.formules-liste'), 'top 85%');
  });
}

/* ---------- Pages intérieures ---------- */
function interieures() {
  if (!ST) return;
  const jm = $('.jumelles-media');
  if (jm) { gsap.fromTo($('img', jm), { scale: 1 }, { scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.ouv', start: 'top top', end: 'bottom top', scrub: 0.4 } }); }
  const bandes = $$('.mosaique-bande');
  bandes.forEach((b, i) => { gsap.to(b, { xPercent: [-3, 3][i], ease: 'none', scrollTrigger: { trigger: '.mosaique', start: 'top 60%', end: 'bottom top', scrub: 0.5 } }); });
  const env = $('[data-effet="envol"]');
  if (env) gsap.fromTo(env, { scale: 1, transformOrigin: '50% 0%' }, { scale: 1.08, transformOrigin: '50% 0%', ease: 'none', scrollTrigger: { trigger: '.ouv--plein', start: 'top top', end: 'bottom top', scrub: 0.4 } });
  const billet = $('.billet-cadre');
  if (billet) gsap.to($('.billet-media', billet), { yPercent: -4, ease: 'none', scrollTrigger: { trigger: '.ouv--billet', start: 'top top', end: 'bottom top', scrub: 0.4 } });
  $$('.benefice-icone').forEach((ic) => entree(ic, { rotation: -40, scale: 0.6, opacity: 0 }, { rotation: -6, scale: 1, opacity: 1, ease: 'back.out(1.8)' }, ic, 'top 90%'));
  $$('.mission-mots li').forEach((m, i) => { const r = parseFloat(m.style.getPropertyValue('--r')) || 0; entree(m, { y: 40, rotation: r * 4, opacity: 0 }, { y: 0, rotation: r, opacity: 1, ease: 'back.out(1.6)', delay: i * 0.15 }, '.mission-mots', 'top 88%'); });
  const recap = $('[data-recap]');
  if (recap) entree(recap, { rotation: 6, y: 60, opacity: 0 }, { rotation: 1, y: 0, opacity: 1, ease: 'back.out(1.4)', delay: 0.2 }, '.projet', 'top 80%');
}

/* ---------- Catalogue des thèmes : familles, recherche, filtres gardés dans l'adresse ---------- */
const norme = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean).map((m) => (m.length > 3 ? m.replace(/(s|x)$/, '') : m)).join(' ');
function catalogue() {
  const filtres = $('[data-filtres]'), liste = $('[data-catalogue]'); if (!filtres || !liste) return;
  const champ = $('input[name="q"]', filtres), compte = $('[data-filtres-compte]'), vide = $('[data-catalogue-vide]');
  const params = new URLSearchParams(location.search);
  let famille = params.get('famille') || '', q = params.get('q') || '';
  champ.value = q;
  const appliquer = (anime) => {
    const mots = norme(q).split(' ').filter(Boolean);
    let n = 0;
    $$('.famille', liste).forEach((f) => {
      const ok = !famille || f.dataset.familleId === famille;
      let vus = 0;
      $$('[data-item]', f).forEach((li) => {
        const texte = norme(li.dataset.item + ' ' + $('h3', f).textContent);
        const garde = ok && mots.every((m) => texte.includes(m));
        li.classList.toggle('est-masquee', !garde); if (garde) vus++;
      });
      const montre = ok && vus > 0;
      f.classList.toggle('est-masquee', !montre); n += montre ? vus : 0;
    });
    $$('[data-famille]', filtres).forEach((b) => b.setAttribute('aria-pressed', b.dataset.famille === famille ? 'true' : 'false'));
    compte.textContent = `${n} thème${n > 1 ? 's' : ''} affiché${n > 1 ? 's' : ''}`;
    vide.hidden = n > 0;
    const p = new URLSearchParams(location.search); famille ? p.set('famille', famille) : p.delete('famille'); q ? p.set('q', q) : p.delete('q');
    history.replaceState(history.state, '', `${location.pathname}${p.toString() ? '?' + p : ''}${location.hash}`);
    if (ST) ST.refresh();
  };
  filtres.addEventListener('click', (e) => { const b = e.target.closest('[data-famille]'); if (!b) return; famille = b.dataset.famille; appliquer(true); });
  champ.addEventListener('input', () => { q = champ.value; appliquer(false); });
  if (famille || q) appliquer(false);
}

/* ---------- Formulaire de projet en étapes, billet récapitulatif ---------- */
function projet() {
  const f = $('[data-etapes]'); if (!f) return;
  const etapes = $$('[data-etape]', f), points = $$('.etapes-points li', f);
  const prec = $('[data-etape-precedente]', f), suiv = $('[data-etape-suivante]', f), envoi = $('[data-etape-envoi]', f), compte = $('[data-etape-compte]', f);
  const R = (n) => $(`[data-recap-${n}]`);
  const vide = R('envies')?.textContent || 'à choisir';
  const params = new URLSearchParams(location.search);
  const envie = params.get('envie') || '', dest = params.get('destination') || '';
  const ta = $('textarea[name="destination"]', f);
  if (envie) $$('input[name="famille"]', f).forEach((c) => { if (c.value === envie || (c.dataset.items || '').split('|').includes(envie)) c.checked = true; });
  let n = 1;
  const majRecap = () => {
    const fam = $$('input[name="famille"]:checked', f).map((c) => c.value);
    const env = [envie, ...fam].filter(Boolean);
    R('envies').textContent = env.length ? env.join(', ') : vide;
    R('destination').textContent = (ta.value.trim() || vide).slice(0, 90);
    R('participants').textContent = $('input[name="participants"]', f).value || '1';
    const b = $('input[name="budget"]', f).value; R('budget').textContent = b ? `${b}${NBSP}€` : vide;
    const pro = $('input[name="profil"]', f).checked; R('pro').hidden = !pro;
  };
  const erreur = (champ, msg) => {
    const id = 'erreur-' + champ.id; let p = document.getElementById(id);
    if (!msg) { if (p) p.textContent = ''; champ.removeAttribute('aria-invalid'); return true; }
    if (!p) { p = document.createElement('p'); p.id = id; p.className = 'champ-erreur'; p.setAttribute('aria-live', 'polite'); champ.closest('.champ').appendChild(p); champ.setAttribute('aria-describedby', [champ.getAttribute('aria-describedby'), id].filter(Boolean).join(' ')); }
    p.textContent = msg; champ.setAttribute('aria-invalid', 'true'); return false;
  };
  const valide = (k) => {
    let ok = true, premier = null;
    $$('[required]', etapes[k - 1]).forEach((c) => {
      const v = c.value.trim();
      const m = !v ? 'Ce champ est à remplir.' : (c.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'Adresse e-mail à vérifier (exemple' + NBSP + ': nom@domaine.fr).' : '');
      if (!erreur(c, m)) { ok = false; premier = premier || c; }
    });
    if (premier) premier.focus();
    return ok;
  };
  const aller = (k) => {
    const h0 = f.offsetHeight;
    etapes.forEach((e, i) => { e.hidden = i !== k - 1; });
    points.forEach((p, i) => { p.classList.toggle('actif', i === k - 1); p.classList.toggle('fait', i < k - 1); });
    prec.hidden = k === 1; suiv.hidden = k === 3; envoi.hidden = k !== 3;
    compte.textContent = `Étape ${k} sur 3`;
    n = k;
    if (gsap) { const h1 = f.offsetHeight; gsap.fromTo(f, { height: h0 }, { height: h1, duration: 0.45, ease: 'power2.out', clearProps: 'height' }); gsap.fromTo(etapes[k - 1], { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.45, clearProps: 'transform,opacity' }); }
    const premier = $('input:not([type="hidden"]), textarea', etapes[k - 1]); if (premier) premier.focus({ preventScroll: true });
    if (ST) setTimeout(() => ST.refresh(), 500);
  };
  suiv.addEventListener('click', () => { if (valide(n)) aller(n + 1); });
  prec.addEventListener('click', () => aller(n - 1));
  f.addEventListener('submit', (e) => { if (n < 3) { e.preventDefault(); e.stopImmediatePropagation(); if (valide(n)) aller(n + 1); } }, true);
  f.addEventListener('input', majRecap); f.addEventListener('change', majRecap);
  pas(f, majRecap);
  majRecap();
}

/* Boutons − / + des champs numériques. */
function pas(racine, apres) {
  $$('[data-pas]', racine).forEach((b) => b.addEventListener('click', () => {
    const i = $('input', b.parentElement); const min = +i.min || 0, max = +i.max || 100000;
    i.value = Math.max(min, Math.min(max, (+i.value || 0) + +b.dataset.pas));
    i.dispatchEvent(new Event('input', { bubbles: true }));
    apres && apres();
  }));
}

/* ---------- Don : la montgolfière gonfle avec le montant et flotte doucement ---------- */
function don() {
  const f = $('[data-don]'); if (!f) return;
  const ballon = $('.don-ballon'), aff = $('[data-don-affiche]'), champ = $('input[name="montant"]', f);
  const maj = () => { const v = Math.max(0, +champ.value || 0); aff.textContent = v; ballon.style.setProperty('--taille', (0.72 + Math.min(v, 250) / 250 * 0.62).toFixed(3)); };
  f.addEventListener('input', maj); pas(f, maj); maj();
  ballon.setAttribute('data-effet', 'ballon');
  boucle(ballon, (dt, t) => { ballon.style.translate = `${Math.sin(t * 0.7) * 6}px ${Math.sin(t * 1.1) * 9}px`; });
}

demarrer({
  preparer() {
    if (!gsap) return;
    papierCouches(); match(); fiches(); colonnes(); etiquettes(); avion(); tampons(); interieures(); catalogue(); projet(); don();
  },
  /* Intro (2,4 s) : l'épingle tombe et se plante, deux bandes de papier arrivent des côtés et se rejoignent sous elle,
     un cœur bat, MatchYourTrip et le slogan montent ; puis l'épingle glisse jusqu'à la pastille de la page et le panneau
     s'ouvre en cercle depuis elle (versObjet). */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { y: -70, rotation: -14, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.45, ease: 'back.out(2.4)' }, 0)
      .fromTo('.intro-bande--g', { xPercent: -45, scaleX: 0.5, opacity: 0 }, { xPercent: 0, scaleX: 1, opacity: 1, duration: 0.5 }, 0.28)
      .fromTo('.intro-bande--d', { xPercent: 45, scaleX: 0.5, opacity: 0 }, { xPercent: 0, scaleX: 1, opacity: 1, duration: 0.5 }, 0.28)
      .fromTo('.intro-coeur', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(3)' }, 0.72)
      .to('.intro-coeur', { scale: 1.3, duration: 0.12, yoyo: true, repeat: 1 }, 0.98)
      .fromTo('.ouverture-nom > *', { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, stagger: 0.07 }, 0.4)
      .fromTo('.ouverture-ligne', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.62)
      .to('.intro-bande, .intro-coeur, .ouverture-nom, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.08);
    versObjet(tl, { a: 1.12 });
    ouverturePage(tl, 1.85);
    return tl;
  },
  etatFinal() { etatFinalPage(); },
  arrivee() {
    if (!gsap) return;
    ouverturePage(gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.12 }), 0.2);
  },
});
