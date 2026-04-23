/**
 * Hook centralizado para tracking de eventos (GA4, GTM, Pixel)
 * Sigue la taxonomía: object_action[_context]
 */
export const trackEvent = (eventName, params = {}) => {
  // 1. Enviar a Google Tag Manager / GA4 via dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  }

  // 2. Enviar a Meta Pixel (si está inicializado)
  if (window.fbq) {
    // Mapeo selectivo para Pixel
    if (eventName === 'generate_lead' || eventName === 'lead_form_submitted') {
      window.fbq('track', 'Lead', {
        content_name: params.source || 'LidIA Demo',
        ...params
      });
    } else {
      window.fbq('trackCustom', eventName, params);
    }
  }

  console.log(`[Tracking] Event: ${eventName}`, params);
};
