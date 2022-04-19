
window.dataLayer = window.dataLayer || [];

window.CookieConsentTheme = {
  'base-color': '#3c3c3c',
  'border-radius': '0',

  'color-primary': '#000000',

  'button-default__bg-color': '#f3f3f2',
  'button-default__color': '#676767',
  'button-default__border': '0 none',

  'button-default--hover__bg-color': '#f3f3f2',
  'button-default--hover__color': '#676767',
  'button-default--hover__border': '0 none',
  'button-default--hover__box-shadow': 'none',

  'button-primary__bg-color': '#000000',
  'button-primary__color': '#fff',

  'button-primary--hover__bg-color': '#f3f3f2',
  'button-primary--hover__color': '#000',
};

(function cookiesInit() {
  var scriptEl = document.createElement('script');
  scriptEl.src = 'https://cdn.jsdelivr.net/gh/danielsitek/dgp-cookie-consent@1.4.0/dist/cookies.min.js';
  scriptEl.type = 'text/javascript';
  scriptEl.id = 'cookie-consent';

  document.body.appendChild(scriptEl);
})();

