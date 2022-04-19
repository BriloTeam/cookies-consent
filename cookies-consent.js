
window.dataLayer = window.dataLayer || [];

window.CookieConsentTheme = {
  'base-color': '#333',
  'base-font-size': '15px',
  'base-line': '1px solid #333',
  'border-radius': '5px',
  'button-border-radius': '5px',

  'color-grey': '#f2f4f9',
  'color-primary': '#333',
  'color-text': '#333',
  'color-white': '#fff',

  'button-default__bg-color': '#fff',
  'button-default__color': '#333',
  'button-default__text-transform': 'none',
  'button-default__border': '1px solid #eee',
  'button-default__box-shadow': 'none',

  'button-default--hover__bg-color': '#fff',
  'button-default--hover__color': '#333',
  'button-default--hover__border': '1px solid #ccc',
  'button-default--hover__box-shadow': '0 0 10px 0 rgba(0,0,0,0.05)',

  'button-primary__bg-color': '#eee',
  'button-primary__color': '#333',
  'button-primary__text-transform': 'none',
  'button-primary__border': 'none',
  'button-primary__box-shadow': 'none',

  'button-primary--hover__bg-color': '#ccc',
  'button-primary--hover__color': '#333',
  'button-primary--hover__border': 'none',
  'button-primary--hover__box-shadow': 'none',
};

(function cookiesInit() {
  var scriptEl = document.createElement('script');
  scriptEl.src = 'https://cdn.jsdelivr.net/gh/danielsitek/dgp-cookie-consent@1.4.0/dist/cookies.min.js';
  scriptEl.type = 'text/javascript';
  scriptEl.id = 'cookie-consent';

  document.body.appendChild(scriptEl);
})();

