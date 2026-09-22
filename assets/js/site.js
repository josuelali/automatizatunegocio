// Consent Mode V2 defaults must exist before Google tags are requested.
(function () {
  var measurementId = 'G-H2QTH54RLR';
  var publisherId = 'ca-pub-9789327885520093';
  var gaLoaded = false;
  var listenerAttached = false;
  var attempts = 0;
  var maxAttempts = 120;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
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
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: true });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  }

  function updateConsent(tcData) {
    if (!tcData || !tcData.purpose || !tcData.purpose.consents) return;
    var purposes = tcData.purpose.consents;
    var vendors = tcData.vendor && tcData.vendor.consents ? tcData.vendor.consents : {};
    var googleAllowed = vendors['755'] === true;
    var analyticsAllowed = purposes['1'] === true;
    var adsAllowed = analyticsAllowed && googleAllowed;
    var personalizationAllowed = adsAllowed && (purposes['3'] === true || purposes['4'] === true);

    window.gtag('consent', 'update', {
      analytics_storage: analyticsAllowed ? 'granted' : 'denied',
      ad_storage: adsAllowed ? 'granted' : 'denied',
      ad_user_data: adsAllowed ? 'granted' : 'denied',
      ad_personalization: personalizationAllowed ? 'granted' : 'denied'
    });
    if (analyticsAllowed) loadGA4();
  }

  function attachTcfListener() {
    if (listenerAttached) return;
    if (typeof window.__tcfapi === 'function') {
      listenerAttached = true;
      window.__tcfapi('addEventListener', 2, function (tcData, success) {
        if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
          updateConsent(tcData);
        }
      });
      return;
    }
    attempts += 1;
    if (attempts < maxAttempts) window.setTimeout(attachTcfListener, 250);
  }

  // The published European Regulations message in AdSense is loaded by this tag.
  if (!document.querySelector('script[data-ad-client="' + publisherId + '"]')) {
    var ads = document.createElement('script');
    ads.async = true;
    ads.crossOrigin = 'anonymous';
    ads.dataset.adClient = publisherId;
    ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + publisherId;
    document.head.appendChild(ads);
  }
  attachTcfListener();
}());

document.addEventListener("DOMContentLoaded", function () {

  // Keep the Sistema Maestro / Hub IA CTA visually prominent without changing the global stylesheet.
  document.querySelectorAll('.main-nav > a.cta-system').forEach(function (cta) {
    cta.style.background = 'linear-gradient(135deg,#ffcf33,#ff9f1a)';
    cta.style.color = '#171006';
    cta.style.fontWeight = '900';
    cta.style.padding = '12px 20px';
    cta.style.border = '1px solid rgba(255,220,90,0.75)';
    cta.style.boxShadow = '0 0 0 1px rgba(255,184,75,0.18), 0 10px 28px rgba(255,174,0,0.38)';
    cta.style.whiteSpace = 'nowrap';
  });

  const mobileToggle = document.getElementById("mobileToggle");
  const mobilePanel = document.getElementById("mobilePanel");

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", function () {
      mobilePanel.classList.toggle("is-open");
    });
  }

  const header = document.getElementById("siteHeader");

  function handleHeaderShadow() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 0 22px rgba(177,18,38,0.22)";
    } else {
      header.style.boxShadow = "0 0 20px rgba(177,18,38,0.18)";
    }
  }

  handleHeaderShadow();
  window.addEventListener("scroll", handleHeaderShadow);
});
