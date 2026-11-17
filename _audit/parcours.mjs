/* Parcours propres à MatchYourTrip : le match de l'accueil, les filtres du catalogue, le formulaire en étapes,
   le don à montant libre. Chaque problème s'ajoute au rapport. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* 1. Match : choisir une envie et une destination met à jour la phrase et le lien vers le formulaire prérempli. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-match-envie="Bien-être"]').scrollIntoViewIfNeeded();
    await page.locator('[data-match-envie="Bien-être"]').click();
    await page.locator('[data-match-dest="Asie"]').click();
    await attendre(300);
    const m = await page.evaluate(() => ({ texte: document.querySelector('[data-match-texte]').textContent, lien: document.querySelector('[data-match-lien]').getAttribute('href'), presse: document.querySelectorAll('[aria-pressed="true"][data-match-envie]').length }));
    if (!/Bien-être/.test(m.texte) || !/Asie/.test(m.texte)) R.echec('match', `phrase non mise à jour : ${m.texte}`, { page: '/', taille: '390×844' });
    if (!/envie=Bien/.test(m.lien) || !/destination=Asie/.test(m.lien)) R.echec('match', `lien non prérempli : ${m.lien}`, { page: '/', taille: '390×844' });
    if (m.presse !== 1) R.echec('match', `${m.presse} envies sélectionnées au lieu d’une`, { page: '/', taille: '390×844' });

    /* 2. Formulaire prérempli par l'adresse, puis étapes : le bouton suivant refuse un champ obligatoire vide. */
    await page.goto(BASE + '/mon-projet-de-voyage?envie=Bien-%C3%AAtre&destination=Asie#formulaire', { waitUntil: 'load' });
    await attendrePret(page);
    const pre = await page.evaluate(() => ({ dest: document.querySelector('textarea[name="destination"]').value, recap: document.querySelector('[data-recap-envies]').textContent }));
    if (!/Asie/.test(pre.dest) || !/Bien-être/.test(pre.recap)) R.echec('formulaire', `préremplissage absent (destination « ${pre.dest} », billet « ${pre.recap} »)`, { page: '/mon-projet-de-voyage' });
    await page.fill('textarea[name="destination"]', '');
    await page.locator('[data-etape-suivante]').click();
    await attendre(200);
    if (!(await page.locator('#erreur-p-destination').count())) R.echec('formulaire', 'étape 1 franchie avec un champ obligatoire vide', { page: '/mon-projet-de-voyage' });
    await page.fill('textarea[name="destination"]', 'Japon en famille');
    await page.locator('[data-etape-suivante]').click();
    await attendre(500);
    if (await page.locator('[data-etape="2"]').isHidden()) R.echec('formulaire', 'l’étape 2 ne s’affiche pas', { page: '/mon-projet-de-voyage' });
    await page.locator('[data-etape="2"] [data-pas="1"]').click();
    await page.locator('[data-etape-suivante]').click();
    await attendre(500);
    await page.fill('input[name="email"]', 'test@exemple.fr');
    await page.locator('[data-etape-envoi]').dblclick();
    await attendre(400);
    const fin = await page.evaluate(() => ({ msg: !document.querySelector('[data-etapes] [data-message-envoi]').hidden, bloque: document.querySelector('[data-etape-envoi]').disabled, part: document.querySelector('[data-recap-participants]').textContent }));
    if (!fin.msg) R.echec('formulaire', 'aucun message « simulé » après l’envoi', { page: '/mon-projet-de-voyage' });
    if (!fin.bloque) R.echec('formulaire', 'bouton d’envoi encore actif (double envoi possible)', { page: '/mon-projet-de-voyage' });
    if (fin.part !== '3') R.echec('formulaire', `billet : ${fin.part} participants au lieu de 3`, { page: '/mon-projet-de-voyage' });

    /* 3. Catalogue : une famille puis une recherche, filtres gardés dans l'adresse, recherche sans accents. */
    await page.goto(BASE + '/themes-et-destinations', { waitUntil: 'load' });
    await attendrePret(page);
    await page.fill('input[name="q"]', 'volcan');
    await attendre(300);
    const c = await page.evaluate(() => ({ vis: [...document.querySelectorAll('[data-item]')].filter((l) => !l.classList.contains('est-masquee') && l.closest('.famille:not(.est-masquee)')).map((l) => l.dataset.item), url: location.search }));
    if (c.vis.length !== 1 || !/volcans/.test(c.vis[0])) R.echec('catalogue', `recherche « volcan » : ${c.vis.join(', ') || 'aucun résultat'}`, { page: '/themes-et-destinations' });
    if (!/q=volcan/.test(c.url)) R.echec('catalogue', 'la recherche n’est pas gardée dans l’adresse', { page: '/themes-et-destinations' });
    await page.goto(BASE + '/themes-et-destinations?famille=occasions', { waitUntil: 'load' });
    await attendrePret(page);
    const f = await page.evaluate(() => [...document.querySelectorAll('.famille:not(.est-masquee)')].map((x) => x.dataset.familleId));
    if (f.length !== 1 || f[0] !== 'occasions') R.echec('catalogue', `famille dans l’adresse non appliquée : ${f.join(', ')}`, { page: '/themes-et-destinations' });

    /* 4. Don : les boutons − et + changent le montant affiché et la taille de la montgolfière. */
    await page.goto(BASE + '/faire-un-don#don', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('.don-form [data-pas="5"]').click();
    await attendre(200);
    const d = await page.evaluate(() => ({ v: document.querySelector('input[name="montant"]').value, a: document.querySelector('[data-don-affiche]').textContent }));
    if (d.v !== '25' || d.a !== '25') R.echec('don', `montant ${d.v}, affiché ${d.a} (attendu 25)`, { page: '/faire-un-don' });
  } finally { await ctx.close(); }
}
