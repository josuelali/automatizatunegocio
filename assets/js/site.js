document.addEventListener("DOMContentLoaded", function () {
  // GA4 is loaded only after an affirmative analytics consent signal.
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
