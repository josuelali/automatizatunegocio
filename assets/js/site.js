// Google AdSense tag. The published European Regulations message in AdSense uses this tag to load Google's CMP.
(function () {
  if (!document.querySelector('script[data-ad-client="ca-pub-9789327885520093"]')) {
    var ads = document.createElement('script');
    ads.async = true;
    ads.crossOrigin = 'anonymous';
    ads.dataset.adClient = 'ca-pub-9789327885520093';
    ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9789327885520093';
    document.head.appendChild(ads);
  }
}());

document.addEventListener("DOMContentLoaded", function () {
  // GA4 is loaded only after an affirmative TCF analytics/storage consent signal.
  (function () {
    var loaded = false;
    function loadGA4() {
      if (loaded) return;
      loaded = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-H2QTH54RLR');
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=G-H2QTH54RLR';
      document.head.appendChild(s);
    }
    function inspectConsent(tcData) {
      if (tcData && tcData.eventStatus && tcData.purpose && tcData.purpose.consents && tcData.purpose.consents['1']) loadGA4();
    }
    if (typeof window.__tcfapi === 'function') {
      window.__tcfapi('addEventListener', 2, function(tcData, success) { if (success) inspectConsent(tcData); });
    }
    window.addEventListener('consentGranted', function(e) { if (e.detail === 'analytics' || !e.detail) loadGA4(); });
  }());

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
