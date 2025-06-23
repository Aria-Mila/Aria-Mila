// Mapping des liens "cachés"
const linkMap = {
  mym: "https://mym.fans/tonpseudo",        // Mets ton lien MYM ici
  onlyfan: "https://onlyfans.com/tonpseudo" // Mets ton lien OnlyFans ici
};

document.querySelectorAll('[data-link]').forEach(el => {
  el.addEventListener('click', e => {
    const key = el.getAttribute('data-link');
    if (linkMap[key]) {
      // Petite sécurité : ouvrir dans un nouvel onglet
      window.open(linkMap[key], '_blank', 'noopener,noreferrer');
    } else {
      alert("Lien inconnu !");
    }
  });
});
