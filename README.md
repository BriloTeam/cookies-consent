# cookies-consent

## Simple Implementation

```html
<script src="https://cdn.jsdelivr.net/gh/BriloTeam/cookies-consent@latest/cookies-consent.js" type="text/javascript" defer></script>
```

## Implementations with theme overrides

```html
<script>
    window.CookieConsentTheme =  {
        'base-color': 'blue',
        'border-radius': '10px',
        'color-primary': 'pink',
        'button-primary__bg-color': 'pink',
        'button-primary--hover__bg-color': 'violet',
    };
</script>
<script src="https://cdn.jsdelivr.net/gh/BriloTeam/cookies-consent@latest/cookies-consent.js" type="text/javascript" defer></script>
```

Full documentation of theme keys can be found in original repo: <https://github.com/danielsitek/dgp-cookie-consent#theme-customisation>

## Implementations with translations overrides

```html
<script>
    window.CookieConsentTranslations = {
        buttonAllowAll: {
            label: 'Chci!',
        },
        buttonRejectAll: {
            label: 'Nechci!',
        },
        buttonConfirm: {
            label: 'Jo, chci!',
        },
    };
</script>
<script src="https://cdn.jsdelivr.net/gh/BriloTeam/cookies-consent@latest/cookies-consent.js" type="text/javascript" defer></script>
```

Full documentation of translation keys can be found in original repo: <https://github.com/danielsitek/dgp-cookie-consent#translations>
