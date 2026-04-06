from pathlib import Path

reemplazos = {
    "Gu?a": "Guía",
    "Gu?as": "Guías",
    "qu?": "qué",
    "Qu?": "Qué",
    "c?mo": "cómo",
    "C?mo": "Cómo",
    "t?cnico": "técnico",
    "t?cnicos": "técnicos",
    "automatizaci?n": "automatización",
    "Automatizaci?n": "Automatización",
    "captaci?n": "captación",
    "monetizaci?n": "monetización",
    "generaci?n": "generación",
    "p?ginas": "páginas",
    "v?deos": "vídeos",
    "art?culos": "artículos",
    "pr?cticos": "prácticos",
    "m?s": "más",
    "d?a": "día",
    "d?as": "días",
    "aqu?": "aquí",
    "a?n": "aún",
    "r?pido": "rápido",
    "r?pidas": "rápidas",
    "econ?mico": "económico",
    "Ã±": "ñ",
    "Ã¡": "á",
    "Ã©": "é",
    "Ã­": "í",
    "Ã³": "ó",
    "Ãº": "ú",
    "Ã": "Á",
    "Ã‰": "É",
    "Ã": "Í",
    "Ã“": "Ó",
    "Ãš": "Ú",
    "Â¿": "¿",
    "Â¡": "¡",
    "â†’": "→",
    "â€”": "—",
    "â€“": "–",
    "âœ”": "✔",
    "ðŸ‘‰": "👉",
}

archivos = list(Path("guias").rglob("*.html"))

for archivo in archivos:
    contenido = archivo.read_text(encoding="utf-8", errors="ignore")
    original = contenido

    for mal, bien in reemplazos.items():
        contenido = contenido.replace(mal, bien)

    if contenido != original:
        archivo.write_text(contenido, encoding="utf-8")

print(f"Corregidos {len(archivos)} archivos HTML")