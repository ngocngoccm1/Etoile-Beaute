(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33243178056';
  const phoneLabel = '02 43 17 80 56';
  const email = 'etoilebeautestudio@gmail.com';
  const finalStyle = document.createElement('style');
  finalStyle.textContent = '.eb-booking-section a{color:#16120e!important}@media(max-width:720px){#w-i23sk9bo{top:auto!important;bottom:24px!important}}';
  document.head.append(finalStyle);
  const maps = 'https://maps.app.goo.gl/kQ4AEPoV4JqBQW9CA?g_st=ic';
  const instagram = 'https://www.instagram.com/etoilebeautestudiolemans/';
  const facebook = 'https://www.facebook.com/etoilebeautestudiolemans/';
  const base = window.__ETOILE_ROUTE__ ? '../' : './';
  const routeTargets = { institut: '#w-u0znny0p', 'soins-visage-le-mans': '#w-xhwrrhyg', 'menard-le-mans': '#w-r486talc', 'massages-le-mans': '#w-xhwrrhyg', 'maquillage-permanent-le-mans': '#w-xhwrrhyg', contact: '#w-9dhr9sri' };
  const menuItems = [
    ['Accueil', base], ['Soins du visage', `${base}soins-visage-le-mans/`], ['Soins japonais Menard', `${base}menard-le-mans/`], ['Massages', `${base}massages-le-mans/`], ['Maquillage permanent', `${base}maquillage-permanent-le-mans/`], ["L'institut", `${base}institut/`], ['Contact & rendez-vous', `${base}contact/`]
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
      routeNav.innerHTML = `${menuItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}<a href="${planity}" target="_blank" rel="noopener">Réserver sur Planity</a>`;
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
