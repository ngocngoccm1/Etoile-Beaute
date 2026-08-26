(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33243178056';
  const phoneLabel = '02 43 17 80 56';
  const email = 'etoilebeautestudio@gmail.com';
  const finalStyle = document.createElement('style');
  finalStyle.textContent = '.eb-booking-section a{color:#16120e!important}#w-ho6snzah a{color:#e8bd45!important;-webkit-text-fill-color:#e8bd45!important;text-decoration-color:#e8bd45!important;font-weight:700!important}@media(max-width:720px){#w-i23sk9bo{top:auto!important;bottom:24px!important}}';
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
        { title: 'Massages visage & crâne', text: 'Des gestes précis et relaxants pour libérer les tensions du visage, du cuir chevelu et de la nuque.', items: [['Massage visage HANA', '30 min · 45 €'], ['Massage crânien Shiatsu', '20 min · 35 €'], ['Rituel crânien — tête, nuque & épaules', '45 min · 55 €'], ['Rituel crânien et visage aux pochons d’herbes', '60 min · 89 €']] },
        { title: 'Rituels visage', text: 'Des soins adaptés pour nettoyer, détendre et illuminer le teint.', items: [['Soin visage découverte', '30 min · 59 €'], ['Soin HANA du Japon', '45 min · 79 €'], ['Soin Pureté Haute Fréquence', '45 min · 69 €']] }
      ]
    },
    'menard-le-mans': {
      eyebrow: 'PRODUITS MENARD DU JAPON', title: 'L’expertise Menard', intro: 'Découvrez les rituels japonais Menard, alliant gestuelle experte et produits d’exception.', cards: [
        { title: 'Hydratation & éclat', text: 'Des formules Menard pour une peau souple, lumineuse et visiblement plus lisse.', items: [['Soin Signature Lumineux TK', '60 min · 89 €'], ['Style premium : Éclat Suprême Fairlucent', '70 min · 109 €'], ['Soin Lumière Pure Saranari', '80 min · 125 €']] },
        { title: 'Anti-âge & rituels', text: 'Des soins haute performance pour les peaux exigeantes et matures.', items: [['Soin Anti-Âge Global & Hydratation Intense', '90 min · 145 €'], ['Soin de Quatre saisons', '90 min · 169 €'], ['Soin des mains', '30 min · 45 €']] }
      ]
    },
    'massages-le-mans': {
      eyebrow: 'MASSAGES CORPS', title: 'Une parenthèse de bien-être', intro: 'Des massages enveloppants et des rituels aux pochons d’herbes pour relâcher les tensions.', cards: [
        { title: 'Massages enveloppants', text: 'Huile parfumée au choix sur place, pour une relaxation profonde du corps et de l’esprit.', items: [['Californien', '60 min · 75 €'], ['Californien', '90 min · 109 €'], ['Dos et épaules', '35 min · 49 €']] },
        { title: 'Rituels Hakone', text: 'Massage inspiré du Japon avec pochons d’herbes sèches chauds.', items: [['Rituel Hakone', '60 min · 89 €'], ['Rituel Hakone', '90 min · 129 €']] },
        { title: 'Soins corps ciblés', text: 'Des soins pour lisser la peau, apaiser les mains et alléger les jambes.', items: [['Gommage Corps Douceur', '45 min · 59 €'], ['Massage et soins des mains', '30 min · 45 €'], ['Jambes légères aux pochons d’herbes', '30 min · 39 €'], ['Jambes légères aux pochons d’herbes', '45 min · 55 €']] }
      ]
    },
    'maquillage-permanent-le-mans': {
      eyebrow: 'MAQUILLAGE PERMANENT', title: 'Sublimez vos traits durablement', intro: 'Des prestations de dermopigmentation réalisées avec précision pour un résultat harmonieux et naturel.', cards: [
        { title: 'Eyeliner', text: 'Un trait personnalisé pour intensifier le regard avec élégance.', items: [['Création eyeliner', '200 €'], ['Retouche après 6 mois', '75 €'], ['Retouche après 12 mois', '150 €'], ['Retouche après 20 mois', '170 €']] },
        { title: 'Sourcils', text: 'Microblading, microshading et micro-grayling pour une ligne harmonieuse.', items: [['Rendez-vous conseil', 'Offert'], ['Microblading / Microshading', '300 €'], ['Micro-Grayling (effet ombré & poil)', '350 €'], ['Retouche après 6 mois', '100–110 €'], ['Retouche après 12 mois', '180–190 €'], ['Retouche après 20 mois', '250–300 €']] },
        { title: 'Lèvres', text: 'Un dégradé doux ou un remplissage complet, adapté à vos traits.', items: [['Dégradé', '350 €'], ['Remplissage complet', '450 €'], ['Retouche après 6 mois', '110–120 €'], ['Retouche après 12 mois', '150–190 €'], ['Retouche après 20 mois', '230–270 €']] },
        { title: 'Sourcils — épilation', text: 'Prestations esthétiques complémentaires pour structurer le regard.', items: [['Épilation sourcils — restructuration', '32 €'], ['Épilation sourcils — entretien mensuel', '22 €'], ['Épilation + restructuration (mineur inclus)', '25 €'], ['Grain de beauté (1 à 3)', '50 €']] }
      ]
    }
  };
  const createDetailPage = detail => {
    const section = document.createElement('section');
    section.className = 'eb-detail-page';
    section.innerHTML = `<div class="eb-detail-intro"><p>${detail.eyebrow}</p><h1>${detail.title}</h1><span>${detail.intro}</span></div><div class="eb-detail-cards">${detail.cards.map(card => `<article><h2>${card.title}</h2><span>${card.text}</span><ul>${card.items.map(([name, price]) => `<li><b>${name}</b><em>${price}</em></li>`).join('')}</ul><a href="${planity}" target="_blank" rel="noopener">Prendre rendez-vous</a></article>`).join('')}</div>`;
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
    const target = document.querySelector(routeTargets[window.__ETOILE_ROUTE__]);
    const targetSection = target?.closest('.com-section');
    if (detail || targetSection) {
      pageview.querySelectorAll(':scope > .com-section').forEach(section => {
        section.hidden = detail || section !== targetSection;
      });
      document.querySelector('.eb-booking-section')?.setAttribute('hidden', '');

      const routeNav = document.createElement('nav');
      routeNav.className = 'eb-route-nav';
      routeNav.setAttribute('aria-label', 'Navigation principale');
      routeNav.innerHTML = `${menuItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}<a href="${planity}" target="_blank" rel="noopener">Réserver sur Planity</a>`;
      pageview.prepend(routeNav);
      if (detail) routeNav.after(createDetailPage(detail));
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
