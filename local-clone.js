(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33671881341';
  const base = window.__ETOILE_ROUTE__ ? '../' : './';
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
          : page ? { label, href: page } : null;
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
  const homeFooter = document.createElement('footer');
  homeFooter.className = 'eb-home-social-footer';
  homeFooter.setAttribute('aria-label', 'Informations et réseaux sociaux');
  homeFooter.innerHTML = `<div><strong>Etoile Beauté Studio</strong><span>28 bis rue de l'Etoile, 72 000 Le Mans, Sarthe, France</span></div><nav><a href="tel:${phone}">+33 6 71 88 13 41</a><a href="${planity}" target="_blank" rel="noopener">Planity</a><a href="https://www.instagram.com/ETOILEBEAUTESTUDIO" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/etoilebeautestudiolemans/" target="_blank" rel="noopener">Facebook</a><a href="https://www.google.com/maps/search/?api=1&query=28+bis+rue+de+l%27Etoile%2C+72000+Le+Mans" target="_blank" rel="noopener">Google Maps</a></nav>`;
  (document.querySelector('.pageview') || document.body).append(homeFooter);
  const routeTargets = { 'a-propos': '#w-u0znny0p', services: '#w-xhwrrhyg', 'nos-marques': '#w-r486talc', 'avis-clients': '#w-hl9izwdg' };
  if (window.__ETOILE_ROUTE__ && routeTargets[window.__ETOILE_ROUTE__]) {
    window.setTimeout(() => document.querySelector(routeTargets[window.__ETOILE_ROUTE__])?.scrollIntoView({ block: 'start' }), 650);
  }
  document.addEventListener('click', event => {
    const label = event.target.closest('.button-text, .com-button, button, a, .text-block-css')?.textContent?.replace(/\s+/g, ' ').trim();
    const page = menuPages.get((label || '').toUpperCase());
    if (page) {
      event.preventDefault();
      window.location.assign(page);
      return;
    }
    if (/Réserver|Découvrir Nos Soins|Envoyer la demande|Nous Contacter/i.test(label || '')) {
      event.preventDefault();
      window.open(planity, '_blank', 'noopener');
    }
    if (/Appeler le studio/i.test(label || '')) {
      event.preventDefault();
      window.location.href = `tel:${phone}`;
    }
  }, true);
})();
