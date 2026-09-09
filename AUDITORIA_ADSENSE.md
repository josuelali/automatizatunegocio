# Auditoría AdSense — automatizatunegocio.org

## Objetivo
Corregir las señales asociadas al rechazo de AdSense por **contenido de poco valor** sin eliminar las vías de monetización del proyecto.

## Estado técnico confirmado
- `ads.txt` presente con el publisher correcto.
- `robots.txt` permite rastreo general y referencia el sitemap.
- La etiqueta AdSense está centralizada en `assets/js/site.js`.
- GA4 queda centralizado en `assets/js/site.js` y condicionado a señal de consentimiento.
- Producción no se modifica durante esta fase: trabajo realizado en `fix/adsense-value-review-v1`.

## Hallazgos iniciales
- Bloques comerciales y afiliados repetidos en exceso dentro de la misma página.
- Varias guías compartían estructura y párrafos casi intercambiables.
- Promesas comerciales demasiado prominentes frente al contenido editorial.
- Metadatos genéricos en distintas guías.
- Restos de plantilla, placeholders y caracteres rotos en parte del contenido heredado.
- Páginas legales y de confianza insuficientemente conectadas con el contenido editorial.
- Carga directa de analítica en varias páginas y convivencia de scripts CMP heredados en el índice de guías.

## Correcciones editoriales aplicadas

### Home
- Reordenada para que el contenido útil sea el elemento principal.
- Reducido el protagonismo de lenguaje de monetización y afiliación.
- Monetización conservada como elemento secundario.
- Añadidas señales de confianza y enlaces a información editorial.

### Señales de confianza
- Creada `sobre-nosotros.html`.
- Creada `politica-editorial.html`.
- Ambas páginas añadidas al sitemap.

### Biblioteca de guías
- Reconstruido `guias/index.html` como índice editorial.
- Eliminados del índice los scripts CMP heredados y la carga directa de GA4.
- Eliminada la oferta comercial dominante en la cabecera.
- Organizadas las guías por fundamentos, captación/ventas, marketing/contenido y herramientas.

### Guías reescritas en profundidad
- `guias/automatizar-negocio-con-ia/index.html`
- `guias/automatizar-negocio-online/index.html`
- `guias/automatizar-captacion-de-clientes/index.html`
- `guias/automatizar-email-marketing/index.html`
- `guias/automatizar-embudos-de-ventas/index.html`
- `guias/automatizar-redes-sociales/index.html`
- `guias/automatizar-ventas/index.html`
- `guias/crm-para-pymes/index.html`
- `guias/embudos-simples/index.html`
- `guias/formularios-y-leads/index.html`
- `guias/mejores-herramientas-de-automatizacion/index.html`
- `guias/software-para-automatizar-negocios/index.html`
- `guias/systeme-vs-mailchimp/index.html`
- `guias/whatsapp-automatizado/index.html`

### Criterio aplicado en las reescrituras
Cada guía se centra ahora en una intención concreta y prioriza:
- explicación específica del problema;
- proceso o método utilizable;
- ejemplos prácticos;
- criterios de decisión;
- métricas;
- errores y límites;
- enlaces internos relacionados;
- monetización secundaria o inexistente en el cuerpo editorial.

Se han eliminado de las páginas reescritas los patrones repetitivos de Systeme.io, Hostinger, Pictory y otros bloques comerciales que antes aparecían entre múltiples secciones.

## Páginas legales
- Reescrita `legal/privacidad.html` para reflejar GA4, AdSense, consentimiento y enlaces externos sin cargar scripts publicitarios o analíticos en la propia página.
- Reescrita `legal/cookies.html` para reflejar el estado actual de Google Analytics 4, Google AdSense y Consent Mode.
- Simplificada `legal/contacto.html`, eliminando marcadores de datos pendientes visibles.
- Simplificado `legal/aviso-legal.html` y eliminados scripts de seguimiento innecesarios.
- `sitemap.xml` incluye privacidad, cookies, contacto, aviso legal, sobre nosotros y política editorial.

## CMP y Consent Mode
- La home corregida ya no contiene los scripts Sirdata heredados.
- El índice `guias/index.html` corregido ya no contiene los scripts Sirdata heredados.
- Según la auditoría previa del repositorio, esas eran las ubicaciones detectadas para `consentframework.com`; debe realizarse una validación final de la rama antes del merge para confirmar que no queda coexistencia con Google CMP.
- Consent Mode de publicidad y analítica está configurado desde AdSense según la validación realizada en cuenta.

## Estado editorial actual
Las principales páginas indexables de contenido han sido reescritas o revisadas para que el contenido editorial sea claramente dominante frente a promoción o afiliación.

## Pendientes antes del merge
1. Validación final de la rama frente a `main`.
2. Comprobar que no quedan placeholders, enlaces `#` relevantes, caracteres rotos ni scripts Sirdata en las páginas que se van a publicar.
3. Verificar que `https://automatizatunegocio.org/ads.txt` responde correctamente después del despliegue.
4. Verificar navegación, sitemap, páginas legales y carga de GA4/AdSense en producción.
5. Comprobar de nuevo el mensaje CMP con el parámetro oficial de prueba de Google después del despliegue corregido.

## Condición para reenvío a AdSense
No solicitar una nueva revisión hasta que:
1. la rama corregida se haya fusionado y desplegado;
2. las páginas principales sean rastreables y navegables;
3. `ads.txt` sea accesible públicamente;
4. CMP/Consent Mode y carga de analítica/publicidad sean coherentes;
5. se haya realizado una comprobación final de contenido y enlaces en producción.
