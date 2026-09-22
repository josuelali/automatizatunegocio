// CORE: Google CMP + Consent Mode V2 in basic mode.
// Loaded synchronously in <head>, before the AdSense/CMP tag.
(function () {
  'use strict';
  var measurementId = 'G-H2QTH54RLR';
  var gaLoaded = false;

  // Enable Google's native IAB TCF -> Consent Mode mapping before any gtag call.
  window.gtag_enable_tcf_support = true;
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

  function updateFromTcf(tcData, success) {
    if (!success || !tcData) return;
    if (tcData.eventStatus !== 'tcloaded' && tcData.eventStatus !== 'useractioncomplete') return;

    if (tcData.gdprApplies === false) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
      loadGA4();
      return;
    }

    var purposes = (tcData.purpose && tcData.purpose.consents) || {};
    var vendors = (tcData.vendor && tcData.vendor.consents) || {};
    var googleAllowed = vendors['755'] === true;
    var purpose1 = purposes['1'] === true;
    var analyticsAllowed = purpose1 && googleAllowed;
    var adsAllowed = purpose1 && googleAllowed;
    var personalizationAllowed = googleAllowed && purposes['3'] === true && purposes['4'] === true;

    window.gtag('consent', 'update', {
      analytics_storage: analyticsAllowed ? 'granted' : 'denied',
      ad_storage: adsAllowed ? 'granted' : 'denied',
      ad_user_data: adsAllowed ? 'granted' : 'denied',
      ad_personalization: personalizationAllowed ? 'granted' : 'denied'
    });
    if (analyticsAllowed) loadGA4();
  }

  // Primary path when Google Privacy & Messaging exposes Consent Mode data.
  window.googlefc.callbackQueue.push({
    CONSENT_MODE_DATA_READY: function () {
      if (typeof window.googlefc.getGoogleConsentModeValues !== 'function') return;
      var status = window.googlefc.getGoogleConsentModeValues();
      if (status && (status.analyticsStoragePurposeConsentStatus === 1 ||
                     status.analyticsStoragePurposeConsentStatus === 3)) {
        loadGA4();
      }
    }
  });

  // Safe TCF fallback. Google Privacy & Messaging officially exposes __tcfapi;
  // this path also reacts when the visitor later changes the consent choice.
  window.googlefc.callbackQueue.push({
    CONSENT_API_READY: function () {
      if (typeof window.__tcfapi === 'function') {
        window.__tcfapi('addEventListener', 2.2, updateFromTcf);
      }
    }
  });
}());
