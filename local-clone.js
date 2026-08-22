(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33671881341';
  const menuPages = new Map([
    ['ACCUEIL', './'],
    ['À PROPOS', './a-propos/'],
    ['SERVICES', './services/'],
    ['NOS MARQUES', './nos-marques/'],
    ['AVIS DE NOS', './avis-clients/']
  ]);
  const map = [['Soin visage','./soin-visage-japonais-menard-au-mans/'],['Lèvres','./maquillage-permanent-levres-eyeliner/'],['Sourcils','./maquillage-sourcils/'],['Massages','./massage-corps-californien-kobido/'],['Mains','./soins-des-mains-gommage-corps/']];
  const bar = document.createElement('nav');
  bar.className = 'eb-local-mobile';
  bar.innerHTML = map.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
  const booking = document.createElement('nav');
  booking.className = 'eb-booking-bar';
  booking.innerHTML = `<a href="tel:${phone}">☎ +33 6 71 88 13 41</a><a href="${planity}" target="_blank" rel="noopener">Prendre rendez-vous</a>`;
  const social = document.createElement('nav');
  social.className = 'eb-social-mobile';
  social.setAttribute('aria-label', 'Réseaux sociaux');
  social.innerHTML = [
    ['Instagram', 'https://www.instagram.com/ETOILEBEAUTESTUDIO'],
    ['Facebook', 'https://www.facebook.com/etoilebeautestudiolemans/'],
    ['Google Maps', 'https://www.google.com/maps/search/?api=1&query=28+bis+rue+de+l%27Etoile%2C+72000+Le+Mans']
  ].map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join('');
  document.body.append(bar, social, booking);
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
