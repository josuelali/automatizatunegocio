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

  // Give EEA visitors a persistent way to reopen Google Privacy & Messaging.
  const legalColumn = document.querySelector('.site-footer .footer-col:last-child');
  if (legalColumn && window.googlefc && Array.isArray(window.googlefc.callbackQueue)) {
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: function () {
        if (document.getElementById('privacy-settings-link')) return;
        const link = document.createElement('a');
        link.id = 'privacy-settings-link';
        link.href = '#';
        link.textContent = 'Configurar cookies y privacidad';
        link.addEventListener('click', function (event) {
          event.preventDefault();
          window.googlefc.callbackQueue.push(window.googlefc.showRevocationMessage);
        });
        legalColumn.appendChild(link);
      }
    });
  }
});
