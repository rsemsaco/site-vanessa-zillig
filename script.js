const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuToggle && navigation) {
  const setMenu = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

const ANALYTICS_CONSENT_KEY = 'vz_analytics_consent';
const analyticsConfig = window.VZ_ANALYTICS_CONFIG || {};
const measurementId = analyticsConfig.measurementId || '';

function isValidMeasurementId(value) {
  return /^G-[A-Z0-9]+$/i.test(value);
}

function loadAnalytics() {
  if (!isValidMeasurementId(measurementId) || window.__vzAnalyticsLoaded) return;

  window.__vzAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: true
  });
}

function trackWhatsAppLead(location) {
  if (!window.gtag || localStorage.getItem(ANALYTICS_CONSENT_KEY) !== 'granted') return;

  window.gtag('event', 'generate_lead', {
    method: 'whatsapp',
    cta_location: location
  });
}

function labelWhatsAppCtas() {
  document.querySelectorAll('[data-whatsapp]').forEach((link, index) => {
    const location =
      link.closest('.hero') ? 'hero' :
      link.closest('.site-header') ? 'header' :
      link.closest('.service-card') ? 'modalidade' :
      link.closest('.cta-section') ? 'cta_final' :
      link.classList.contains('floating-whatsapp') ? 'floating_mobile' :
      link.closest('.site-footer') ? 'footer' :
      `whatsapp_${index + 1}`;

    link.addEventListener('click', () => trackWhatsAppLead(location));
  });
}

function removeConsentBanner() {
  document.querySelector('.analytics-consent')?.remove();
}

function setConsent(value) {
  localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  removeConsentBanner();
  if (value === 'granted') loadAnalytics();
}

function showConsentBanner() {
  if (!isValidMeasurementId(measurementId)) return;
  if (localStorage.getItem(ANALYTICS_CONSENT_KEY)) return;

  const banner = document.createElement('aside');
  banner.className = 'analytics-consent';
  banner.setAttribute('aria-label', 'Preferências de métricas');
  banner.innerHTML = `
    <div class="analytics-consent__content">
      <p><strong>Métricas de uso</strong><br>Podemos usar dados anônimos de navegação para entender visitas e cliques de contato. Nenhum conteúdo clínico ou mensagem do WhatsApp é enviado ao Analytics.</p>
      <div class="analytics-consent__actions">
        <button type="button" class="button button--small analytics-consent__accept">Aceitar</button>
        <button type="button" class="analytics-consent__decline">Recusar</button>
        <a href="./privacy.html">Privacidade</a>
      </div>
    </div>`;

  banner.querySelector('.analytics-consent__accept')?.addEventListener('click', () => setConsent('granted'));
  banner.querySelector('.analytics-consent__decline')?.addEventListener('click', () => setConsent('denied'));
  document.body.appendChild(banner);
}

function initAnalyticsConsent() {
  const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);
  if (consent === 'granted') loadAnalytics();
  else if (!consent) showConsentBanner();

  document.querySelector('#reset-analytics-consent')?.addEventListener('click', () => {
    localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    window.__vzAnalyticsLoaded = false;
    showConsentBanner();
  });
}

labelWhatsAppCtas();
initAnalyticsConsent();
