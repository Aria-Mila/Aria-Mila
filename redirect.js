// redirect.js

const links = {
  vip: "https://mym.real.link/membre123",
  gallery: "https://onlyfans.com/membre123",
  support: "https://ko-fi.com/membre123"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-key");
      const url = links[key];
      if (url) window.location.href = url;
    });
  });
});
