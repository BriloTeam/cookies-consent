(function cookieConsentInit(w, d) {
  // Constants
  var DENIED = 'denied';
  var GRANTED = 'granted';

  // DataLayer init.
  w.dataLayer = w.dataLayer || [];

  // GTM push fn.
  function dataLayerPush() {
    w.dataLayer.push(arguments);
  }

  // Simple CookieConsent reader with fallback to defaults.
  function readConsent() {
    try {
      return JSON.parse(
        decodeURIComponent(
          d.cookie
            .split(';')
            .filter(function (i) {
              return i.trim().includes('CookieConsent=');
            })[0]
            .replace('CookieConsent=', '')
            .trim()
        )
      );
    } catch (e) {
      return {
        necessary: true,
        marketing: false,
        preferences: false,
        statistics: false,
      };
    }
  };

  // SET DEFAULT CONSENT
  // ===
  var defaultConsent = readConsent();

  dataLayerPush('consent', 'default', {
    'ad_storage': defaultConsent.marketing ? GRANTED : DENIED,
    'analytics_storage': defaultConsent.statistics ? GRANTED : DENIED,
    'personalization_storage': defaultConsent.preferences ? GRANTED : DENIED,
    'functionality_storage': GRANTED,
    'security_storage': GRANTED,
  });

  w.dataLayer.push({
    'event': 'cookie_consent_default'
  });

  // HANDLE COOKIE CONSENT PANEL
  // ===

  // Send event to dataLayer when dgp-cookie-consent is loaded and initialized.
  w.addEventListener('consent-ready', function () {
    w.dataLayer.push({
      'event': 'cookie_consent_ready'
    });
  });

  // Send updated consent with actual consent options.
  w.addEventListener('consent-updated', function () {
    // GTM consent
    dataLayerPush('consent', 'update', {
      'ad_storage': w.CookieConsent.marketing ? GRANTED : DENIED,
      'analytics_storage': w.CookieConsent.statistics ? GRANTED : DENIED,
      'personalization_storage': w.CookieConsent.preferences ? GRANTED : DENIED,
      'functionality_storage': GRANTED,
      'security_storage': GRANTED,
    });

    // Custom consent from document
    w.dataLayer.push({
      'event': 'cookie_consent_update',
      'type': w.CookieConsent.type,
      'personalization_storage': w.CookieConsent.preferences ? GRANTED : DENIED,
      'ad_storage': w.CookieConsent.marketing ? GRANTED : DENIED,
      'analytics_storage': w.CookieConsent.statistics ? GRANTED : DENIED,
    });

  });

  // Send event to dataLayer on consent window open
  w.addEventListener('consent-show', function () {
    w.dataLayer.push({
      'event': 'cookie_consent_bar_show'
    });
  });

  // Send event to dataLayer on consent window close.
  w.addEventListener('consent-hide', function () {
    w.dataLayer.push({
      'event': 'cookie_consent_bar_hide'
    });
  });

  // Theme
  w.CookieConsentTheme = {
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
    ...w.CookieConsentTheme,
  };

  // Dark Mode Theme
  w.CookieConsentThemeDark = w.CookieConsentThemeDark || {};

  // Translation
  w.CookieConsentTranslations = w.CookieConsentTranslations || {};

  // Settings
  w.CookieConsentSettings = w.CookieConsentSettings || {};

  // COOKIE CONSENT PANEL INITIALIZATION
  // ===
  var scriptEl = d.createElement('script');
  scriptEl.src = 'https://cdn.jsdelivr.net/gh/danielsitek/dgp-cookie-consent@1.5.2/dist/cookies.min.js';
  scriptEl.type = 'text/javascript';
  scriptEl.id = 'cookie-consent';

  d.body.appendChild(scriptEl);

  document.querySelectorAll('.js-consent-open').forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      if (!document.querySelectorAll("consent-dialog").length) {
        window.CookieConsentModalOpen();
      }
    });
  });

})(window, document);
