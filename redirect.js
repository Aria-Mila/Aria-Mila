const encodedLinks = {
  a: "aHR0cHM6Ly9teW0uZmFucy9BcmlhbWlsYQ==", 
  b: "aHR0cHM6Ly9vbmx5ZmFucy5jb20vYXJpYW1pbGEx"  
};

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    console.error("Erreur décodage base64 :", e);
    return null;
  }
}
document.querySelectorAll('[data-link]').forEach(el => {
  el.addEventListener('click', e => {
    const key = el.getAttribute('data-link');
    const url = decodeBase64(encodedLinks[key]);
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert("Lien inconnu ou erreur !");
    }
  });
});
