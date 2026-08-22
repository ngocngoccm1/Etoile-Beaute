(() => {
  const planity = 'https://www.planity.com/etoile-beaute-studio-72100-le-mans';
  const phone = '+33671881341';
  const address = '28 bis rue de l\'Etoile, 72 000 Le Mans, Sarthe, France';
  const links = [
    ['Soin visage Menard', './soin-visage-japonais-menard-au-mans/'], ['Lèvres & Eyeliner', './maquillage-permanent-levres-eyeliner/'], ['Sourcils', './maquillage-sourcils/'], ['Massages', './massage-corps-californien-kobido/'], ['Mains & corps', './soins-des-mains-gommage-corps/']
  ];
  const setBooking = () => {
    [...document.querySelectorAll('.button-text, .text-block-css, button, a')].forEach(node => {
      const text = node.textContent.replace(/\s+/g, ' ').trim();
      if (/^(Découvrir Nos Soins|Réserver ce soin|Voir toute la carte des soins|Nous Contacter|Envoyer la demande)$/i.test(text)) {
        const target = node.closest('.com-button, a, button') || node;
        target.style.cursor = 'pointer';
        target.addEventListener('click', event => { event.preventDefault(); event.stopImmediatePropagation(); window.open(planity, '_blank', 'noopener'); }, true);
      }
    });
  };
  const hideSectionContaining = text => {
    const node = [...document.querySelectorAll('.text-block-css, h1, h2, h3, h4, h5, p, div')].find(el => el.textContent.replace(/\s+/g, ' ').trim() === text);
    const section = node?.closest('.com-section');
    if (section) section.style.display = 'none';
  };
  const bar = document.createElement('nav');
  bar.className = 'eb-services-nav';
  bar.innerHTML = links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
  document.body.append(bar);
  const quick = document.createElement('div');
  quick.className = 'eb-topbar';
  quick.innerHTML = `<a class="eb-phone" href="tel:${phone}">☎ +33 6 71 88 13 41</a><a href="https://www.facebook.com/etoilebeautestudiolemans/" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/ETOILEBEAUTESTUDIO" target="_blank" rel="noopener">Instagram</a><a class="eb-book" href="${planity}" target="_blank" rel="noopener">Prendre rendez-vous sur Planity</a>`;
  document.body.append(quick);
  const footer = document.createElement('footer');
  footer.className = 'eb-contact-footer';
  footer.innerHTML = `<h2>Etoile Beauté Studio</h2><p><a href="tel:${phone}">☎ +33 6 71 88 13 41</a></p><p>⌾ ${address}</p><p>E-mail : à compléter</p><div class="eb-socials"><a href="${planity}" target="_blank" rel="noopener">Planity</a><a href="https://www.facebook.com/etoilebeautestudiolemans/" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/ETOILEBEAUTESTUDIO" target="_blank" rel="noopener">Instagram</a><a href="https://www.google.com/maps/search/?api=1&query=Etoile+Beaute+Studio+28+bis+rue+de+l%27Etoile+Le+Mans" target="_blank" rel="noopener">Google Maps</a></div>`;
  window.addEventListener('load', () => {
    document.querySelector('form')?.closest('.com-section')?.style.setProperty('display', 'none', 'important');
    [...document.querySelectorAll('.com-section')].forEach(section => {
      const content = section.innerText.replace(/\s+/g, ' ').trim();
      if (/^(NOUS TROUVER|PRENEZ RENDEZ-VOUS)/i.test(content) || content.includes('FORMULAIRE DE PRISE DE RENDEZ-VOUS')) section.style.setProperty('display', 'none', 'important');
    });
    setBooking();
    document.body.append(footer);
  }, { once: true });
})();
