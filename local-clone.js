(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33243178056';
  const phoneLabel = '02 43 17 80 56';
  const email = 'etoilebeautestudio@gmail.com';
  const finalStyle = document.createElement('style');
  finalStyle.textContent = '.eb-booking-section a{color:#16120e!important}#w-ho6snzah a{color:#e8bd45!important;-webkit-text-fill-color:#e8bd45!important;text-decoration-color:#e8bd45!important;font-weight:700!important}@media(max-width:720px){#w-i23sk9bo{top:auto!important;bottom:24px!important}}' + (window.__ETOILE_ROUTE__ ? '#w-y1kek8s1{display:none!important}' : '#w-y1kek8s1{width:448px!important;height:635px!important}#w-y1kek8s1 .popup-background{background-image:url("./assets/webcake/promo-rentree-septembre-2026.jpg")!important}@media(max-width:720px){#w-y1kek8s1{width:calc(100vw - 32px)!important;height:calc(141.88vw - 45.4px)!important;max-height:calc(100vh - 32px)!important}}');
  document.head.append(finalStyle);
  const maps = 'https://maps.app.goo.gl/kQ4AEPoV4JqBQW9CA?g_st=ic';
  const instagram = 'https://www.instagram.com/etoilebeautestudiolemans/';
  const facebook = 'https://www.facebook.com/etoilebeautestudiolemans/';
  const base = window.__ETOILE_ROUTE__ ? '../' : './';
  const routeTargets = { institut: '#w-u0znny0p', 'soins-visage-le-mans': '#w-xhwrrhyg', 'menard-le-mans': '#w-r486talc', 'massages-le-mans': '#w-xhwrrhyg', 'maquillage-permanent-le-mans': '#w-xhwrrhyg', contact: '#w-9dhr9sri' };
  const menuItems = [
    ['Accueil', base], ["L’Institut", `${base}institut/`], ['Soins du visage', `${base}soins-visage-le-mans/`], ['Produits Menard du Japon', `${base}menard-le-mans/`], ['Massages corps', `${base}massages-le-mans/`], ['Maquillage Permanent', `${base}maquillage-permanent-le-mans/`], ['Contact & Rendez-vous', `${base}contact/`]
  ];
  const menuPages = new Map(menuItems.map(([label, href]) => [label.toUpperCase(), href]));
  const createMenu = () => {
    const wrapper = document.querySelector('#w-c7ayb5b5 .popup-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = `<nav class="eb-site-menu" aria-label="Navigation principale">${menuItems.map(([label, href]) => `<a class="eb-direct-menu" href="${href}"><span>${label}</span><small>${new URL(href, location.href).pathname}</small></a>`).join('')}</nav>`;
  };
  createMenu();

  const tagline = document.querySelector('#w-lzfu165e .text-block-css');
  if (tagline) tagline.textContent = 'Institut de Beauté & Bien-être Le Mans';

  const addContactPhone = () => {
    const description = document.querySelector('#w-ho6snzah .text-block-css');
    if (description) description.innerHTML = `Pour toute information ou prise de rendez-vous, contactez-nous au <a href="tel:${phone}">${phoneLabel}</a>.`;
    const originalButton = document.querySelector('#w-brukhqoz');
    if (originalButton) {
      const callLink = document.createElement('a');
      callLink.id = originalButton.id;
      callLink.className = originalButton.className;
      callLink.href = `tel:${phone}`;
      callLink.setAttribute('aria-label', `Appeler le studio au ${phoneLabel}`);
      callLink.innerHTML = originalButton.innerHTML;
      callLink.querySelector('.button-text').textContent = 'Appeler le studio';
      originalButton.replaceWith(callLink);
    }
  };
  addContactPhone();

  const menuToggle = document.createElement('button');
  menuToggle.className = 'eb-menu-toggle';
  menuToggle.type = 'button';
  menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  menuToggle.textContent = '☰ Menu';
  menuToggle.addEventListener('click', () => {
    const menu = document.querySelector('#w-c7ayb5b5');
    const backdrop = document.querySelector('#popup-backdrop');
    const offer = document.querySelector('#w-y1kek8s1');
    const isOpen = menu && !menu.classList.contains('d-none');
    document.body.classList.toggle('eb-menu-open', !isOpen);
    if (menu) menu.classList.toggle('d-none', isOpen);
    if (backdrop) backdrop.classList.add('d-none');
    if (offer) offer.classList.add('d-none');
  });
  document.body.append(menuToggle);

  document.addEventListener('click', event => {
    if (!event.target.closest('.eb-direct-menu')) return;
    const menu = document.querySelector('#w-c7ayb5b5');
    const backdrop = document.querySelector('#popup-backdrop');
    if (menu) menu.classList.add('d-none');
    if (backdrop) backdrop.classList.add('d-none');
  });

  const addHeroContactDetails = () => {
    const contactLine = document.querySelector('#w-giyttyyr .text-block-css');
    if (!contactLine || window.__ETOILE_ROUTE__) return;
    contactLine.innerHTML = `<a href="tel:${phone}">${phoneLabel}</a><br>28 bis rue de l'Étoile, 72000 Le Mans`;
  };
  addHeroContactDetails();

  const setHeroCallsToAction = () => {
    const bookButton = document.querySelector('#w-obtmjqqm .button-text');
    const servicesButton = document.querySelector('#w-8oqbvk26 .button-text');
    if (bookButton) bookButton.textContent = 'Prendre rendez-vous';
    if (servicesButton) servicesButton.textContent = 'Découvrir nos soins';
  };
  setHeroCallsToAction();

  const replaceBookingForm = () => {
    const form = document.querySelector('form');
    const bookingSection = form?.closest('.com-section');
    if (!bookingSection) return;

    const booking = document.createElement('section');
    booking.className = 'eb-booking-section';
    booking.setAttribute('aria-label', 'Réserver un rendez-vous');
    booking.innerHTML = `<div><p>Prendre rendez-vous</p><h2>Réservez votre soin en ligne</h2><span>Choisissez simplement le créneau qui vous convient sur Planity.</span></div><a href="${planity}" target="_blank" rel="noopener">Réserver sur Planity</a>`;
    bookingSection.before(booking);
    bookingSection.hidden = true;
  };
  replaceBookingForm();

  const pageview = document.querySelector('.pageview');
  const routeDetails = {
    'soins-visage-le-mans': {
      eyebrow: 'SOINS DU VISAGE', title: 'Soins visage sur mesure', intro: 'Des rituels inspirés du Japon, pour détendre les traits, purifier la peau et raviver l’éclat.', cards: [
        { title: 'Massages visage & crâne', text: 'Des gestes précis et relaxants pour libérer les tensions du visage, du cuir chevelu et de la nuque.', items: [['Massage visage HANA', '30 min · 45 €'], ['Massage crânien', '20 min · 35 €'], ['Rituel crânien tête, nuque & épaules', '45 min · 55 €']] },
        { title: 'Rituels visage', text: 'Des soins adaptés pour nettoyer, détendre et illuminer le teint.', items: [['Soin visage découverte', '30 min · 59 €'], ['Soin HANA du Japon', '45 min · 79 €'], ['Soin Pureté Haute Fréquence', '45 min · 69 €']] },
        { title: 'Hydratation & éclat', text: 'Des formules Menard pour une peau souple, lumineuse et visiblement plus lisse.', items: [['Soin Visage TK', '60 min · 89 €'], ['Éclat Suprême Fairlucent', '70 min · 109 €'], ['Soin Lumière de Saranari', '80 min · 125 €']] },
        { title: 'Anti-âge & rituels', text: 'Des soins haute performance pour les peaux exigeantes et matures.', items: [['Soin Anti-Âge Global Embellir', '90 min · 145 €'], ['Soin des Quatre Saisons Embellir', '90 min · 169 €']] }
      ]
    },

    'massages-le-mans': {
      eyebrow: 'MASSAGES CORPS', title: 'Une parenthèse de bien-être', intro: 'Des massages enveloppants et des rituels aux pochons d’herbes pour relâcher les tensions.', cards: [
        { title: 'Massages enveloppants', text: 'Huile parfumée au choix sur place, pour une relaxation profonde du corps et de l’esprit.', items: [['Californien', '60 min · 75 €'], ['Californien', '90 min · 109 €'], ['Dos et épaules', '35 min · 49 €']] },
        { title: 'Rituels Hakone', text: 'Massage inspiré du Japon avec pochons d’herbes sèches chauds.', items: [['Rituel Hakone', '45 min · 89 €'], ['Rituel Hakone', '90 min · 149 €'], ['Rituel Hakone Jambes Sereines', '45 min · 89 €']] },
        { title: 'Soins corps ciblés', text: 'Des soins pour lisser la peau, apaiser les mains et alléger les jambes.', items: [['Massage et soin des mains', '30 min · 45 €'], ['Jambes Légères', '30 min · 49 €']] }
      ]
    },
    'maquillage-permanent-le-mans': {
      eyebrow: 'MAQUILLAGE PERMANENT', title: 'Sublimez vos traits durablement', intro: 'Des prestations de dermopigmentation réalisées avec précision pour un résultat harmonieux et naturel.', cards: [
        { title: 'Eyeliner', text: 'Un trait personnalisé pour intensifier le regard avec élégance.', items: [['Création eyeliner', '200 €'], ['Retouche après 6 mois', '75 €'], ['Retouche après 12 mois', '150 €'], ['Retouche après 20 mois', '170 €']] },
        { title: 'Sourcils', text: 'Microblading, microshading et micrograyling pour une ligne harmonieuse.', items: [['Microblading / Microshading', '300 €'], ['Micrograyling (ombré, poil à poil)', '350 €'], ['Retouche après 6 mois', '100 €'], ['Retouche après 12 mois', '180 €'], ['Retouche après 20 mois', '250 €']] },
        { title: 'Lèvres', text: 'Un dégradé doux ou un remplissage complet, adapté à vos traits.', items: [['Dégradé', '350 €'], ['Remplissage complet', '450 €'], ['Retouche après 6 mois', '110 €'], ['Retouche après 12 mois', '150 €'], ['Retouche après 20 mois', '230 €']] },
        { title: 'Sourcils — épilation', text: 'Prestations esthétiques complémentaires pour structurer le regard.', items: [['Épilation sourcils — restructuration', '32 €'], ['Épilation sourcils — entretien mensuel', '22 €'], ['Épilation + restructuration (mineur inclus)', '25 €'], ['Grain de beauté (1 à 3)', '50 €']] }
      ]
    }
  };
  const createDetailPage = detail => {
    const section = document.createElement('section');
    section.className = 'eb-detail-page';
    if (detail === routeDetails['soins-visage-le-mans']) section.classList.add('eb-detail-page--four-cards');
    section.innerHTML = `<div class="eb-detail-intro"><p>${detail.eyebrow}</p><h1>${detail.title}</h1><span>${detail.intro}</span></div><div class="eb-detail-cards">${detail.cards.map(card => `<article><h2>${card.title}</h2><span>${card.text}</span><ul>${card.items.map(([name, price]) => `<li><b>${name}</b><em>${price}</em></li>`).join('')}</ul><a href="${planity}" target="_blank" rel="noopener">Prendre rendez-vous</a></article>`).join('')}</div>`;
    return section;
  };
  // Product information supplied by the studio; no inferred prices or stock quantities.
  const enrichMenardEditorial = section => {
    const details = [
      ['tk', 'Hydratation & douceur', 'Pour préserver le confort de la peau et retrouver souplesse et douceur au quotidien.', 'Extrait de gardénia, acide hyaluronique et céramides.', 'Une association qui aide la peau à conserver son hydratation et à maintenir son confort. TK constitue la base d’un rituel axé sur l’hydratation essentielle.'],
      ['fairlucent', 'Éclat & uniformité du teint', 'Pour les teints en manque d’éclat et les préoccupations liées à l’apparence des taches brunes et des taches de rousseur.', 'Un dérivé de vitamine C, des actifs hydratants et, selon les soins, différents extraits végétaux.', 'FAIRLUCENT aide à prévenir et à atténuer l’apparence des taches pour favoriser un teint plus uniforme et lumineux, avec un effet « teint de porcelaine ».'],
      ['saranari', 'Fermeté & anti-âge', 'Pour accompagner les peaux préoccupées par la perte de fermeté, d’élasticité et les effets visibles du photo-vieillissement lié aux UV.', 'Extrait de Pivoine SX, extrait GL II Bio, acide hyaluronique, élastine et collagène soluble.', 'Cette ligne anti-âge haut de gamme associe hydratation, fermeté, élasticité et éclat dans un même rituel.'],
      ['embellir', 'L’anti-âge global', 'Pour une approche globale des signes visibles du vieillissement et des besoins de confort de la peau.', 'Extraits de Reishi rouge SX et de Reishi noir SX, deux champignons étudiés par les laboratoires MENARD.', 'Ces ingrédients emblématiques sont au cœur de la ligne iconique MENARD, pensée pour préserver l’hydratation, la souplesse, la fermeté et l’éclat de la peau.']
    ];
    const facts = (need, ingredients, benefits) => `<dl class="eb-menard-facts"><div><dt>Pour quels besoins ?</dt><dd>${need}</dd></div><div><dt>Les actifs à retenir</dt><dd>${ingredients}</dd></div><div><dt>Les bénéfices du soin</dt><dd>${benefits}</dd></div></dl>`;
    section.querySelectorAll('.eb-menard-range-grid article').forEach((article, index) => {
      const [id, subtitle, need, ingredients, benefits] = details[index];
      article.id = `menard-${id}`;
      article.querySelector('h4').outerHTML = `<h3>${id.toUpperCase()}</h3><p class="eb-menard-subtitle">${subtitle}</p>`;
      article.querySelector('p:not(.eb-menard-subtitle)').remove();
      article.insertAdjacentHTML('beforeend', facts(need, ingredients, benefits));
    });
    const lead = section.querySelector('.eb-menard-lead');
    lead.insertAdjacentHTML('beforeend', `<nav class="eb-menard-jump" aria-label="Explorer les produits MENARD"><a href="#menard-gammes">Les 5 gammes</a><a href="#menard-complements">Les soins ciblés</a><a href="#menard-conseil">Votre rituel au studio</a></nav>`);
    const expertise = section.querySelector('.eb-menard-expertise');
    expertise.querySelector('span').insertAdjacentHTML('beforebegin', '<p class="eb-menard-expertise-text">En travaillant exclusivement avec MENARD, notre institut développe une expertise approfondie de la cosmétique japonaise et des différents protocoles de la marque.</p>');
    section.querySelector('.eb-menard-ranges').id = 'menard-gammes';
    const authent = section.querySelector('.eb-menard-authent');
    authent.id = 'menard-authent';
    authent.querySelector('.eb-menard-authent-copy span').innerHTML = 'AUTHENT représente le soin d’exception de MENARD et l’aboutissement de plusieurs années de recherche sur les cellules souches cutanées. Les laboratoires étudient leur environnement et leur activité dans le renouvellement de la peau.';
    authent.querySelector('.eb-menard-authent-copy').insertAdjacentHTML('beforeend', facts('Une approche anti-âge d’exception pour une peau visiblement revitalisée.', 'Extrait de rose Semi-Plena, extrait de graines de merisier, Pang Da Hai et extrait de graines d’orge violette.', 'Une peau plus hydratée, ferme, souple et lumineuse. Votre esthéticienne vous accompagne dans le choix du soin AUTHENT adapté.'));
    const complements = section.querySelector('.eb-menard-complements');
    complements.id = 'menard-complements';
    complements.querySelector('h3').insertAdjacentHTML('afterend', '<p class="eb-menard-section-intro">En complément des cinq gammes, ces soins ciblés permettent d’adapter votre rituel aux besoins de votre peau.</p>');
    const products = [
      { id: 'beauness', name: 'BEAUNESS', subtitle: 'Pureté, fraîcheur & équilibre', image: 'beauness.jpg', intro: 'Une lotion emblématique inspirée des bienfaits des sources thermales japonaises, surnommée « Family Lotion » au Japon.', need: 'Particulièrement appréciée des peaux mixtes à grasses et sujettes aux imperfections. Elle convient néanmoins à tous les âges et à tous les types de peau.', ingredients: 'Essence Minérale SP (alun de potassium, sulfate de zinc et bicarbonate de sodium), arbre au liège d’Amour, marjolaine, racine de Rehmannia et acide hyaluronique.', benefits: 'Aide à apaiser l’apparence des rougeurs, à purifier la peau et à resserrer l’apparence des pores, tout en maintenant l’hydratation et en procurant une sensation de fraîcheur.', extra: 'Sans parfum, sans colorant, non comédogène et hypoallergénique.' },
      { id: 'colax-c', name: 'COLAX C', subtitle: 'Collagène, hydratation & fermeté', image: 'colax.jpg', intro: 'Un sérum concentré conçu pour préserver la souplesse, l’élasticité et la fermeté de la peau.', need: 'Pour compléter une routine MENARD lorsque la peau a besoin d’hydratation, de confort et de fermeté.', ingredients: 'Plusieurs formes de collagène, de l’acide hyaluronique et la technologie MENARD dédiée à la structure du collagène.', benefits: 'Aide à préserver la structure du collagène et à hydrater intensément. La peau paraît plus souple, repulpée et plus ferme.', extra: 'Sa texture enveloppante forme un léger voile hydrorétenteur qui contribue à maintenir durablement l’hydratation.' },
      { id: 'colax-eye-c', name: 'COLAX EYE C', subtitle: 'Le soin expert du contour des yeux', intro: 'Un soin spécifique pour la peau particulièrement fine et fragile du contour de l’œil.', need: 'Pour les préoccupations de déshydratation, de fermeté, de cernes et de relâchement de la paupière supérieure.', ingredients: 'Collagène, acide hyaluronique, extrait de graines de longane et extrait de fleur de Pois Papillon.', benefits: 'Aide à hydrater intensément et à préserver la structure du collagène et la fermeté du contour des yeux, y compris au niveau de la paupière mobile.', extra: 'Il contribue à prévenir l’apparence des cernes et du relâchement de la paupière supérieure, pour un contour plus lisse et un regard visiblement plus frais.' },
      { id: 'herb-mask', name: 'HERB MASK', subtitle: 'Éclat, douceur & rituel sensoriel', image: 'herb-mask.jpg', intro: 'Un masque exfoliant emblématique des rituels MENARD, pour retrouver une peau douce et lumineuse.', need: 'Pour libérer la peau des cellules mortes accumulées à sa surface et la préparer à recevoir les soins suivants.', ingredients: 'Granules végétales et huile de jojoba. Les granules vertes contiennent notamment jujube et framboise ; les granules roses associent thym sauvage, coïx et camomille.', benefits: 'Exfolie délicatement les cellules cornées, favorise l’hydratation et aide à retrouver douceur, souplesse et éclat.', extra: 'Ses notes de menthe poivrée, de muguet et de jasmin transforment le soin en moment de détente, avec une sensation de fraîcheur et de finesse.' }
    ];
    complements.querySelector(':scope > div').innerHTML = products.map(product => `<article id="menard-${product.id}">${product.image ? `<img src="${base}assets/menard/${product.image}" alt="Soin MENARD ${product.name}" loading="lazy">` : ''}<h3>${product.name}</h3><p class="eb-menard-subtitle">${product.subtitle}</p><p>${product.intro}</p>${facts(product.need, product.ingredients, product.benefits)}<p>${product.extra}</p></article>`).join('');
    complements.querySelector('footer').remove();
    // Restore a sequential heading hierarchy for the catalogue and its products.
    [expertise.querySelector('h3'), section.querySelector('.eb-menard-ranges header h3'), authent.querySelector('h3'), complements.querySelector(':scope > h3')].forEach(heading => {
      heading.outerHTML = `<h2>${heading.innerHTML}</h2>`;
    });
    section.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; img.decoding = 'async'; });
  };
  const createMenardEditorial = () => {
    const section = document.createElement('section');
    section.className = 'eb-menard-editorial';
    section.innerHTML = `<div class="eb-menard-lead"><p>ÉTOILE BEAUTÉ STUDIO & MENARD</p><h1>L’excellence de la cosmétique japonaise au Mans</h1><div><p>Étoile Beauté Studio est distributeur officiel MENARD au Mans et en Sarthe. Nous avons fait le choix de travailler exclusivement avec les cosmétiques MENARD pour nos soins visage et nos conseils beauté.</p><p>Plus qu’une marque proposée parmi d’autres, MENARD est au cœur de notre approche du soin : des rituels japonais raffinés, des formules issues de la recherche scientifique et une sélection de gammes permettant d’accompagner chaque peau, de l’hydratation essentielle aux soins anti-âge les plus prestigieux.</p><p>Les produits MENARD sont utilisés lors de nos soins en cabine et disponibles à l’institut, afin de prolonger votre rituel beauté à domicile.</p></div></div><section class="eb-menard-expertise"><div><p>VOTRE EXPERTISE MENARD AU MANS</p><h3>Une routine pensée pour votre peau</h3><span>Chaque soin est personnalisé selon votre peau, vos besoins et vos objectifs. Votre esthéticienne vous conseille ensuite les produits MENARD les plus adaptés pour prolonger à domicile les bénéfices de votre soin en cabine.</span></div><strong>Distributeur officiel MENARD<br>au Mans et en Sarthe</strong></section><section class="eb-menard-ranges"><header><p>LES GAMMES MENARD</p><h3>Nature, science et raffinement</h3></header><div class="eb-menard-range-grid"><article><img src="${base}assets/menard/tk-official.png" alt="Gamme Menard TK Touch of Kindness"><h4>TK - Hydratation & douceur</h4><p>Une gamme essentielle qui associe extrait de gardénia, acide hyaluronique et céramides pour préserver l’hydratation, la souplesse et le confort de la peau.</p></article><article><img src="${base}assets/menard/fairlucent-official.png" alt="Gamme Menard Fairlucent"><h4>FAIRLUCENT - Éclat & uniformité</h4><p>Une gamme pour un teint plus uniforme et lumineux, qui aide à prévenir et atténuer l’apparence des taches brunes et des taches de rousseur.</p></article><article><img src="${base}assets/menard/saranari.jpg" alt="Gamme Saranari Menard" loading="lazy" width="1600" height="1068"><h4>SARANARI - Fermeté & anti-âge</h4><p>Une ligne anti-âge haut de gamme aux extraits de Pivoine SX et GL II Bio, associant acide hyaluronique, élastine et collagène soluble.</p></article><article><img src="${base}assets/menard/embellir.jpg" alt="Gamme Embellir Menard" loading="lazy" width="1100" height="734"><h4>EMBELLIR - L’anti-âge global</h4><p>La ligne iconique aux extraits de Reishi rouge SX et noir SX, pensée pour préserver hydratation, souplesse, fermeté et éclat.</p></article></div></section><section class="eb-menard-authent"><div class="eb-menard-authent-copy"><p>AUTHENT</p><h3>L’aboutissement de la recherche MENARD</h3><span>Une gamme d’exception autour d’actifs précieux, dont la rose Semi-Plena, les graines de merisier, Pang Da Hai et l’orge violette, pour une peau visiblement revitalisée.</span></div><img class="eb-menard-authent-hero" src="${base}assets/menard/authent-banner.png" alt="Crème Authent Menard"><div class="eb-menard-authent-products"><article><img src="${base}assets/menard/authent-cream-ii.png" alt="Menard Authent Crème II"><span>Authent Crème II</span></article><article><img src="${base}assets/menard/authent-liquid.png" alt="Menard Authent Liquid"><span>Authent Liquid</span></article><article><img src="${base}assets/menard/authent-mask-ii.png" alt="Menard Authent Mask II"><span>Authent Mask II</span></article><article><img src="${base}assets/menard/authent-neck-essence.png" alt="Menard Authent Neck Essence"><span>Authent Neck Essence</span></article><article><img src="${base}assets/menard/authent-eau-de-parfum.jpg" alt="Menard Authent Eau de Parfum"><span>Authent Eau de Parfum</span></article></div></section><section class="eb-menard-complements"><p>LES SOINS COMPLÉMENTAIRES MENARD</p><h3>Personnaliser chaque rituel</h3><div><article><img src="${base}assets/menard/beauness.jpg" alt="Menard Beauness"><h4>BEAUNESS</h4><span>Pureté, fraîcheur et équilibre : une lotion inspirée des sources thermales japonaises, particulièrement appréciée des peaux mixtes à grasses et sujettes aux imperfections.</span></article><article><img src="${base}assets/menard/colax.jpg" alt="Menard Colax Serum"><h4>COLAX</h4><span>Un soin ciblé au collagène et à l’acide hyaluronique pour l’hydratation, la fermeté et la fraîcheur du contour des yeux.</span></article><article><img src="${base}assets/menard/herb-mask.jpg" alt="Menard Herb Mask"><h4>HERB MASK</h4><span>Un masque exfoliant sensoriel aux granules végétales et à l’huile de jojoba, pour retrouver douceur, souplesse et éclat.</span></article></div><footer>Chez Étoile Beauté Studio, les expertises MENARD se combinent selon les besoins du moment, pour un soin personnalisé en cabine et une routine adaptée à poursuivre à domicile.</footer></section>`;
    enrichMenardEditorial(section);
    return section;
  };
  const createMenardConsultation = () => {
    const section = document.createElement('section');
    section.id = 'menard-conseil';
    section.className = 'eb-menard-consultation';
    section.innerHTML = `<header><h2>Un rituel MENARD entièrement personnalisé</h2><p>Nous ne choisissons pas uniquement une gamme : nous adaptons votre rituel à votre peau et à ses besoins du moment.</p></header><div class="eb-menard-ritual"><h3>Les expertises se complètent</h3><p>Une routine FAIRLUCENT pour l’éclat peut être complétée par BEAUNESS pour les imperfections, COLAX C pour l’hydratation et la fermeté, COLAX EYE C pour le contour des yeux et HERB MASK pour l’exfoliation et l’éclat.</p><p>Ces associations sont ajustées avec votre esthéticienne pour un soin personnalisé en cabine et une routine adaptée à poursuivre à domicile.</p><nav aria-label="Retrouver les soins du rituel"><a href="#menard-fairlucent">FAIRLUCENT</a><a href="#menard-beauness">BEAUNESS</a><a href="#menard-colax-c">COLAX C</a><a href="#menard-colax-eye-c">COLAX EYE C</a><a href="#menard-herb-mask">HERB MASK</a></nav></div><div class="eb-menard-purchase"><h3>Retrouvez vos produits à l’institut</h3><p>Les cosmétiques MENARD sont utilisés pendant nos soins et disponibles à la vente chez Étoile Beauté Studio, au 28 bis rue de l’Étoile, au Mans.</p><p>Contactez le studio pour connaître les tarifs, les formats et la disponibilité du produit souhaité, et recevoir un conseil adapté à votre peau.</p><div class="eb-menard-actions"><a href="tel:${phone}">Appeler le studio · ${phoneLabel}</a><a href="${base}contact/">Contacter l’institut</a><a href="${planity}" target="_blank" rel="noopener">Réserver un soin sur Planity</a></div></div>`;
    return section;
  };
  const addServicePhotography = (section, route) => {
    if (['soins-visage-le-mans', 'massages-le-mans'].includes(route)) document.body.classList.add('eb-photo-service-page');
    const intro = section.querySelector('.eb-detail-intro');
    if (route === 'soins-visage-le-mans') {
      document.body.classList.add('eb-face-service-page');
      section.classList.add('eb-detail-page--photography');
      const feature = document.createElement('div');
      feature.className = 'eb-treatment-feature';
      intro.before(feature);
      feature.append(intro);
      feature.insertAdjacentHTML('beforeend', `<figure><img src="${base}assets/studio/soin-visage.jpg" alt="Soin du visage réalisé en cabine chez Étoile Beauté Studio" width="3024" height="4032" fetchpriority="high"><figcaption>Le soin du visage, au cœur de notre expertise.</figcaption></figure>`);
      section.insertAdjacentHTML('beforeend', `<aside class="eb-brow-feature" aria-labelledby="eb-brow-title"><img src="${base}assets/studio/soin-sourcils.jpg" alt="Travail de précision sur les sourcils au studio" width="488" height="425" loading="lazy" decoding="async"><div><h2 id="eb-brow-title">Et pour sublimer votre regard</h2><p>Découvrez également nos prestations dédiées aux sourcils et au maquillage permanent, pour une ligne adaptée à vos traits.</p><a href="${base}maquillage-permanent-le-mans/">Découvrir le maquillage permanent</a></div></aside>`);
    }
    if (route === 'massages-le-mans') {
      const atmosphere = document.createElement('section');
      atmosphere.className = 'eb-body-atmosphere';
      atmosphere.setAttribute('aria-labelledby', 'eb-body-atmosphere-title');
      atmosphere.innerHTML = `<figure class="eb-body-room"><img src="${base}assets/studio/cabine-massage.png" alt="La cabine de massage du studio, préparée avec ses serviettes mauves MENARD" width="1536" height="2048" loading="lazy" decoding="async"></figure><div><h2 id="eb-body-atmosphere-title">Un espace pour lâcher prise</h2><p>Une cabine accueillante, du linge doux et une atmosphère paisible : votre parenthèse de bien-être commence dès votre installation.</p><p>Du massage californien aux rituels Hakone, prenez le temps de vous détendre dans l’intimité de notre studio au Mans.</p><figure class="eb-body-detail"><img src="${base}assets/studio/serviettes-menard.png" alt="Serviettes MENARD et bouquet parfumé disposés sur la table de soin" width="2048" height="1536" loading="lazy" decoding="async"><figcaption>Les petits détails de votre moment au studio.</figcaption></figure></div>`;
      intro.after(atmosphere);
    }
  };
  const createServiceFollowup = () => {
    const section = document.createElement('section');
    section.className = 'eb-service-followup';
    section.innerHTML = `<div><p>VOTRE MOMENT AU STUDIO</p><h2>Un soin pensé pour vous</h2><span>Avant chaque rendez-vous, nous échangeons sur vos besoins afin de vous orienter vers le soin le plus adapté.</span></div><div><article><b>01</b><h3>Écouter</h3><p>Vos envies, votre peau et votre rythme sont au cœur de la séance.</p></article><article><b>02</b><h3>Conseiller</h3><p>Nous sélectionnons le rituel et les gestes appropriés.</p></article><article><b>03</b><h3>Prolonger</h3><p>Vous repartez avec des conseils simples à poursuivre chez vous.</p></article></div><a href="${planity}" target="_blank" rel="noopener">Prendre rendez-vous</a></section>`;
    return section;
  };
  if (!window.__ETOILE_ROUTE__ && pageview) {
    const sections = [...pageview.querySelectorAll(':scope > .com-section')];
    const hero = sections[0];
    if (hero) {
      const explore = document.createElement('section');
      explore.className = 'eb-home-explore';
      explore.setAttribute('aria-label', 'Découvrir le studio');
      explore.innerHTML = `<div><p>Découvrez Etoile Beauté Studio</p><h2>Chaque univers a sa page</h2><span>Explorez nos soins, notre institut et prenez rendez-vous en quelques clics.</span></div><nav>${menuItems.slice(1).map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav>`;
      hero.after(explore);
      sections.slice(1).forEach(section => {
        section.hidden = section.id !== 'w-9dhr9sri';
      });
    }
  }

  if (window.__ETOILE_ROUTE__ && pageview) {
    const detail = routeDetails[window.__ETOILE_ROUTE__];
    const isMenard = window.__ETOILE_ROUTE__ === 'menard-le-mans';
    const target = document.querySelector(routeTargets[window.__ETOILE_ROUTE__]);
    const targetSection = target?.closest('.com-section');
    if (detail || isMenard || targetSection) {
      pageview.querySelectorAll(':scope > .com-section').forEach(section => {
        section.hidden = Boolean(detail || isMenard || section !== targetSection);
      });
      document.querySelector('.eb-booking-section')?.setAttribute('hidden', '');

      const routeNav = document.createElement('nav');
      routeNav.className = 'eb-route-nav';
      routeNav.setAttribute('aria-label', 'Navigation principale');
      routeNav.innerHTML = `${menuItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}<a href="${planity}" target="_blank" rel="noopener">Réserver sur Planity</a>`;
      pageview.prepend(routeNav);
      if (isMenard) {
        document.body.classList.add('eb-menard-page');
        const menardEditorial = createMenardEditorial();
        routeNav.after(menardEditorial);
        menardEditorial.after(createMenardConsultation());
      } else if (detail) {
        const detailPage = createDetailPage(detail);
        addServicePhotography(detailPage, window.__ETOILE_ROUTE__);
        routeNav.after(detailPage);
        detailPage.after(createServiceFollowup());
      }
    }
  }

  const homeFooter = document.createElement('footer');
  homeFooter.className = 'eb-home-social-footer';
  homeFooter.setAttribute('aria-label', 'Informations et réseaux sociaux');
  homeFooter.innerHTML = `<div><strong>Etoile Beauté Studio</strong><span>28 bis rue de l'Etoile, 72 000 Le Mans, Sarthe, France</span></div><nav><a href="tel:${phone}">${phoneLabel}</a><a href="mailto:${email}">${email}</a><a href="${planity}" target="_blank" rel="noopener">Planity</a><a href="${instagram}" target="_blank" rel="noopener">Instagram</a><a href="${facebook}" target="_blank" rel="noopener">Facebook</a><a href="${maps}" target="_blank" rel="noopener">Google Maps</a></nav>`;
  (pageview || document.body).append(homeFooter);
  const socialSpotlight = document.createElement('section');
  socialSpotlight.className = 'eb-social-spotlight';
  socialSpotlight.setAttribute('aria-label', 'Suivez Etoile Beauté Studio');
  socialSpotlight.innerHTML = `<p>Suivez Etoile Beauté Studio</p><nav><a href="${instagram}" target="_blank" rel="noopener">Instagram</a><a href="${facebook}" target="_blank" rel="noopener">Facebook</a><a href="${maps}" target="_blank" rel="noopener">Google Maps</a></nav>`;
  const firstSection = document.querySelector('.pageview > .com-section');
  const homeExplore = document.querySelector('.eb-home-explore');
  if (homeExplore) homeExplore.after(socialSpotlight);
  else if (firstSection) firstSection.after(socialSpotlight);
  else document.body.prepend(socialSpotlight);
  document.addEventListener('click', event => {
    const heroButton = event.target.closest('#w-obtmjqqm, #w-8oqbvk26');
    if (heroButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (heroButton.id === 'w-obtmjqqm') {
        window.open(planity, '_blank', 'noopener');
      } else {
        const services = document.querySelector('#w-xhwrrhyg')?.closest('.com-section');
        if (services) {
          services.hidden = false;
          services.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      return;
    }
    const label = event.target.closest('.button-text, .com-button, button, a, .text-block-css')?.textContent?.replace(/\s+/g, ' ').trim();
    const page = menuPages.get((label || '').toUpperCase());
    if (page) {
      event.preventDefault();
      window.location.assign(page);
      return;
    }
    if (/Réserver|Envoyer la demande|Nous Contacter/i.test(label || '')) {
      event.preventDefault();
      window.open(planity, '_blank', 'noopener');
    }
    if (/Appeler le studio/i.test(label || '')) {
      event.preventDefault();
      window.location.href = `tel:${phone}`;
    }
  }, true);
})();
