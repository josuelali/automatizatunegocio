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

## Correcciones editoriales ya aplicadas

### Home
- Reordenada para que el contenido útil sea el elemento principal.
- Reducido el protagonismo de lenguaje de monetización y afiliación.
- Monetización conservada como elemento secundario.
- Añadidas señales de confianza y enlaces a información editorial.

### Señales de confianza
- Creada `sobre-nosotros.html`.
- Creada `politica-editorial.html`.
- Ambas páginas añadidas al sitemap.

### Guías reescritas en profundidad
1. `guias/automatizar-negocio-con-ia/index.html`
   - Eliminada la estructura repetitiva de promociones.
   - Sustituida por proceso, criterios, ejemplo, métricas, errores y límites.
   - Promoción reducida a un recurso secundario.

2. `guias/automatizar-captacion-de-clientes/index.html`
   - Nuevo flujo editorial centrado en entrada, clasificación, seguimiento y métricas.
   - Eliminados múltiples bloques repetidos de Systeme.io, Hostinger y Pictory.
   - Conservado un único recurso afiliado opcional y claramente identificado.

3. `guias/automatizar-email-marketing/index.html`
   - Añadidas secuencias útiles, segmentación, frecuencia, métricas y ejemplo.
   - Eliminado contenido promocional repetitivo.
   - Conservado un único recurso afiliado opcional.

4. `guias/automatizar-embudos-de-ventas/index.html`
   - Reescrita alrededor de etapas, reglas, ejemplo de proceso, métricas y errores.
   - Reducida la dependencia del contenido comercial.

5. `guias/crm-para-pymes/index.html`
   - Reescrita con criterios de elección, datos mínimos, etapas y automatizaciones útiles.
   - Eliminados módulos comerciales repetitivos.

6. `guias/formularios-y-leads/index.html`
   - Reescrita con foco en campos esenciales, fricción, calidad del lead, privacidad y métricas.
   - Sin bloques afiliados innecesarios.

## Criterio editorial aplicado
Cada guía debe responder a una intención concreta y aportar al menos:
- explicación específica del problema;
- proceso o método utilizable;
- ejemplo práctico;
- criterios de decisión;
- errores o límites;
- enlaces internos relacionados;
- monetización secundaria, no dominante.

## Pendientes antes de solicitar nueva revisión
- Reescribir o revisar las guías heredadas que todavía mantengan bloques comerciales repetitivos, especialmente:
  - `guias/automatizar-ventas/index.html`
  - `guias/automatizar-redes-sociales/index.html`
  - `guias/automatizar-negocio-online/index.html`
  - `guias/embudos-simples/index.html`
  - `guias/software-para-automatizar-negocios/index.html`
  - `guias/systeme-vs-mailchimp/index.html`
- Revisar el índice `guias/index.html` para reducir promoción directa en el área superior.
- Revisar páginas legales para eliminar scripts de analítica directos que puedan cargar antes del consentimiento.
- Verificar que Sirdata no siga coexistiendo con Google CMP en páginas principales antes del despliegue final.
- Completar cualquier dato legal que el titular decida publicar y pueda verificar.
- Validar enlaces internos, sitemap y páginas indexables antes del merge.

## Condición para reenvío a AdSense
No solicitar una nueva revisión hasta que:
1. las páginas principales y las guías indexadas tengan contenido editorial claramente dominante;
2. no queden bloques afiliados repetidos de forma sistemática;
3. `ads.txt` esté accesible públicamente;
4. CMP/Consent Mode y carga de analítica/publicidad estén coherentes;
5. la versión corregida haya sido desplegada y rastreable.
