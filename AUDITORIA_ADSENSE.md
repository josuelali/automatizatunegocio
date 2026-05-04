# Auditoría AdSense — automatizatunegocio.org

## Fase 1 (pre-corrección)

### Archivos revisados
- index.html
- guias/index.html
- guias/*/index.html
- legal/*.html
- sitemap.xml
- robots.txt
- ads.txt

### Hallazgos principales
- Placeholders detectados (`TODO`, `Añada aquí`, `imagen principal`, `Enlace afiliado disponible próximamente`).
- Caracteres rotos detectados (`??`, `�`, acentos corruptos) en varias guías.
- Varias guías con metadatos pobres o genéricos (`Automatizar email marketing`, `Guía completa...`).
- Bloques afiliados repetidos en exceso dentro de la misma guía (múltiples módulos de Systeme/Amazon).
- Párrafos repetidos de herramientas y promoción entre varias guías.
- Algunas páginas legales mezclaban contenido comercial no necesario para sección legal.
- sitemap.xml incluye páginas con señales de baja calidad que requerían limpieza.

### Páginas con señales claras de plantilla o inacabadas
- guias/automatizar-embudos-de-ventas/index.html
- guias/software-para-automatizar-negocios/index.html
- guias/automatizar-ventas/index.html
- guias/formularios-y-leads/index.html
- guias/systeme-vs-mailchimp/index.html
- guias/automatizar-negocio-con-ia/index.html
- guias/automatizar-redes-sociales/index.html
- guias/embudos-simples/index.html
- guias/automatizar-captacion-de-clientes/index.html
- guias/automatizar-negocio-online/index.html
- guias/crm-para-pymes/index.html
- guias/automatizar-email-marketing/index.html


## Fase 2 — Correcciones aplicadas
- Limpieza masiva de placeholders y marcadores temporales en guías (`TODO`, `Añada aquí`, `imagen principal`, textos de afiliado pendientes).
- Corrección de caracteres rotos y símbolos residuales (`??`, `�`) en páginas de guías y legales.
- Reducción de lenguaje promocional repetitivo en bloques internos.
- Mantenimiento de URLs existentes de guías, sin cambios de slug.
- Conservación de `ads.txt` y `robots.txt` (sin cambios por no detectar bloqueo/formato crítico).

## Fase 3 — Páginas legales
- Reescritura de `legal/contacto.html`, `legal/privacidad.html` y `legal/cookies.html` para eliminar elementos de plantilla, enlaces erróneos y scripts externos innecesarios.
- Inclusión de enlace de retorno a inicio y navegación legal mínima consistente.
- Inclusión de marcador explícito cuando falta dato legal concreto:
  - `[PENDIENTE: completar dato fiscal/contacto ...]`

## Fase 4 — Sitemap y navegación
- Corregidos enlaces internos rotos de guías hacia URLs existentes.
- Limpieza de `sitemap.xml` eliminando URLs inexistentes.

## Fase 5 — Validación final
### Archivos modificados
- AUDITORIA_ADSENSE.md
- guias/index.html
- guias/*/index.html (múltiples guías)
- legal/contacto.html
- legal/privacidad.html
- legal/cookies.html
- sitemap.xml

### Problemas corregidos
- Placeholders y textos en construcción.
- Caracteres rotos/codificación visible.
- Enlaces internos rotos más frecuentes en guías.
- Páginas legales con formato incompleto o incoherente.
- URLs inexistentes dentro del sitemap.

### Problemas pendientes
- Persisten guías con exceso estructural de bloques comerciales heredados (aunque saneadas en texto); recomendable una segunda iteración editorial por guía para mejorar profundidad y reducir módulos promocionales repetidos a 1 bloque definitivo.
- Falta completar datos fiscales del responsable legal.

### Páginas recomendadas para mantener en sitemap
- Home, índice de guías, guías ya saneadas, páginas legales y `sistema-maestro-ia` si está finalizada.

### Páginas que conviene no enviar todavía a AdSense si quedan débiles
- Cualquier guía que todavía mantenga estructura repetitiva excesiva de afiliación frente a contenido editorial.
