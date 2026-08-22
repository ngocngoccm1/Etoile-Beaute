(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33243178056';
  const phoneLabel = '02 43 17 80 56';
  const email = 'etoilebeautestudio@gmail.com';
  const maps = 'https://maps.app.goo.gl/kQ4AEPoV4JqBQW9CA?g_st=ic';
  const instagram = 'https://www.instagram.com/etoilebeautestudiolemans/';
  const facebook = 'https://www.facebook.com/etoilebeautestudiolemans/';
  const base = window.__ETOILE_ROUTE__ ? '../' : './';
  const routeTargets = {
    'a-propos': '#w-u0znny0p',
    services: '#w-xhwrrhyg',
    'nos-marques': '#w-r486talc',
    'avis-clients': '#w-hl9izwdg'
  };
  const menuPages = new Map([
    ['ACCUEIL', base],
    ['À PROPOS', `${base}a-propos/`],
    ['SERVICES', `${base}services/`],
    ['NOS MARQUES', `${base}nos-marques/`],
    ['AVIS DE NOS', `${base}avis-clients/`]
  ]);
  const relabelOriginalMenu = () => {
    document.querySelectorAll('.text-block-css').forEach(node => {
      const label = node.textContent.replace(/\s+/g, ' ').trim();
      const page = menuPages.get(label.toUpperCase());
      const action = /^Envoyer la demande$/i.test(label)
        ? { label: 'Réserver sur Planity', href: planity, external: true }
        : /^Contactez-nous$/i.test(label)
          ? { label: 'Appeler le studio', href: `tel:${phone}` }
          : page ? { label: /^avis de nos$/i.test(label) ? 'Avis clients' : label, href: page } : null;
      if (!action) return;
      const link = document.createElement('a');
      link.className = `${node.className} eb-direct-menu`;
      link.href = action.href;
      link.textContent = action.label;
      if (action.external) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      node.replaceWith(link);
    });
  };
  relabelOriginalMenu();

  const contactMenuLink = document.createElement('a');
  contactMenuLink.className = 'eb-direct-menu eb-contact-menu';
  contactMenuLink.href = '#w-9dhr9sri';
  contactMenuLink.textContent = 'Nous trouver';
  document.querySelector('#w-c7ayb5b5 .popup-wrapper')?.append(contactMenuLink);

  const addContactPhone = () => {
    const description = document.querySelector('#w-ho6snzah .text-block-css');
    const button = document.querySelector('#w-brukhqoz .button-text');
    if (description) description.innerHTML = `Pour toute information ou prise de rendez-vous, contactez-nous au <a href="tel:${phone}">${phoneLabel}</a>.`;
    if (button) button.textContent = 'Appeler le studio';
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
    contactLine.innerHTML = `28 bis rue de l'Étoile, 72000 Le Mans<br><a href="tel:${phone}">${phoneLabel}</a>`;
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
  if (!window.__ETOILE_ROUTE__ && pageview) {
    const sections = [...pageview.querySelectorAll(':scope > .com-section')];
    const hero = sections[0];
    if (hero) {
      const explore = document.createElement('section');
      explore.className = 'eb-home-explore';
      explore.setAttribute('aria-label', 'Découvrir le studio');
      explore.innerHTML = `<div><p>Découvrez Etoile Beauté Studio</p><h2>Chaque univers a sa page</h2><span>Explorez nos soins, notre histoire, nos marques et les avis de nos clientes.</span></div><nav><a href="${base}a-propos/">À propos</a><a href="${base}services/">Services</a><a href="${base}nos-marques/">Nos marques</a><a href="${base}avis-clients/">Avis clients</a></nav>`;
      hero.after(explore);
      sections.slice(1).forEach(section => {
        section.hidden = section.id !== 'w-9dhr9sri';
      });
    }
  }

  if (window.__ETOILE_ROUTE__ && pageview) {
    const target = document.querySelector(routeTargets[window.__ETOILE_ROUTE__]);
    const targetSection = target?.closest('.com-section');
    if (targetSection) {
      pageview.querySelectorAll(':scope > .com-section').forEach(section => {
        section.hidden = section !== targetSection;
      });
      document.querySelector('.eb-booking-section')?.setAttribute('hidden', '');

      const routeNav = document.createElement('nav');
      routeNav.className = 'eb-route-nav';
      routeNav.setAttribute('aria-label', 'Navigation principale');
      routeNav.innerHTML = `<a href="${base}">Accueil</a><a href="${base}a-propos/">À propos</a><a href="${base}services/">Services</a><a href="${base}nos-marques/">Nos marques</a><a href="${base}avis-clients/">Avis clients</a><a href="${planity}" target="_blank" rel="noopener">Réserver sur Planity</a>`;
      pageview.prepend(routeNav);
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
