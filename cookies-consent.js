
window.dataLayer = window.dataLayer || [];

var DENIED = 'denied';
var GRANTED = 'granted';

function dataLayerPush() {
  dataLayer.push(arguments);
}

// Send default consent with actual consent options.
window.addEventListener('consent-ready', function () {
  dataLayerPush('consent', 'default', {
    'ad_storage': window.CookieConsent.marketing ? GRANTED : DENIED,
    'analytics_storage': window.CookieConsent.statistics ? GRANTED : DENIED,
    'personalization_storage': window.CookieConsent.preferences ? GRANTED : DENIED,
    'functionality_storage': GRANTED,
    'security_storage': GRANTED,
  });
});

// Send updated consent with actual consent options.
window.addEventListener('consent-updated', function () {
  // GTM consent
  dataLayerPush('consent', 'update', {
    'ad_storage': window.CookieConsent.marketing ? GRANTED : DENIED,
    'analytics_storage': window.CookieConsent.statistics ? GRANTED : DENIED,
    'personalization_storage': window.CookieConsent.preferences ? GRANTED : DENIED,
    'functionality_storage': GRANTED,
    'security_storage': GRANTED,
  });

  // Custom consent from document
  dataLayer.push({
    'event': 'cookie_consent_update',
    'type': window.CookieConsent.type,
    'personalization_storage': window.CookieConsent.preferences ? GRANTED : DENIED,
    'ad_storage': window.CookieConsent.marketing ? GRANTED : DENIED,
    'analytics_storage': window.CookieConsent.statistics ? GRANTED : DENIED,
  });

});

// Send event to dataLayer on consent window open
window.addEventListener('consent-show', function () {
  dataLayer.push({
    'event': 'cookie_consent_bar_show'
  });
});

// Send event to dataLayer on consent window close.
window.addEventListener('consent-hide', function () {
  dataLayer.push({
    'event': 'cookie_consent_bar_hide'
  });
});


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

document.querySelectorAll('.js-consent-open').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    window.CookieConsentModalOpen();
  });
});

(function cookiesInit() {
  var scriptEl = document.createElement('script');
  scriptEl.src = 'https://cdn.jsdelivr.net/gh/danielsitek/dgp-cookie-consent@1.4.0/dist/cookies.min.js';
  scriptEl.type = 'text/javascript';
  scriptEl.id = 'cookie-consent';

  document.body.appendChild(scriptEl);
})();

