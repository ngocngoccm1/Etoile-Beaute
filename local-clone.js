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
