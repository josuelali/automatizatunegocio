// CORE: Google CMP + Consent Mode V2 in basic mode.
// This file is loaded synchronously in <head>, before the AdSense/CMP tag.
(function () {
  'use strict';
  var measurementId = 'G-H2QTH54RLR';
  var gaLoaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.googlefc = window.googlefc || {};
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Fail closed before the visitor makes a consent choice.
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 2000
  });
  window.gtag('set', 'ads_data_redaction', true);

  function loadGA4() {
    if (gaLoaded) return;
    gaLoaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    script.onload = function () {
      window.gtag('js', new Date());
      window.gtag('config', measurementId, { send_page_view: true });
    };
    document.head.appendChild(script);
  }

  function analyticsMayLoad(status) {
    if (!status) return false;
    // Google CMP enum: GRANTED=1, DENIED=2, NOT_APPLICABLE=3, NOT_CONFIGURED=4.
    return status.analyticsStoragePurposeConsentStatus === 1 ||
      status.analyticsStoragePurposeConsentStatus === 3;
  }

  // Official Privacy & Messaging callback: do not load GA4 until consent-mode
  // data is ready. In the EEA, DENIED therefore leaves GA4 completely blocked.
  window.googlefc.callbackQueue.push({
    CONSENT_MODE_DATA_READY: function () {
      if (typeof window.googlefc.getGoogleConsentModeValues !== 'function') return;
      if (analyticsMayLoad(window.googlefc.getGoogleConsentModeValues())) loadGA4();
    }
  });
}());
