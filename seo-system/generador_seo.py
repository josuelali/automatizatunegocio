import os
import random

def generar_contenido(titulo, enlaces):

    intro = f"""
<p>{titulo} es un tema cada vez más importante para emprendedores y empresas que buscan mejorar productividad y automatizar procesos. En esta guía explicamos cómo funciona {titulo.lower()} y cómo aplicarlo en negocios digitales.</p>
"""

    secciones = [
        "Qué es y cómo funciona",
        "Ventajas principales",
        "Aplicaciones en negocios digitales",
        "Herramientas recomendadas",
        "Consejos para empezar",
        "Errores comunes",
        "Estrategias avanzadas",
    ]

    contenido = intro

    for seccion in secciones:

        contenido += f"<h2>{seccion} de {titulo}</h2>"

        for i in range(2):

            contenido += f"""
<p>{titulo} permite mejorar la eficiencia en empresas digitales, automatizar tareas repetitivas y optimizar procesos. Muchas herramientas actuales utilizan inteligencia artificial y automatización para facilitar el trabajo diario.</p>

<p>Implementar {titulo.lower()} correctamente puede ayudar a escalar proyectos online y mejorar la productividad de emprendedores y empresas.</p>
"""

        if enlaces:
            enlace = random.choice(enlaces)
            contenido += f"""
<p>También puede interesarte esta guía relacionada:
<a href="/guias/{enlace[0]}">{enlace[1]}</a></p>
"""

    contenido += f"""
<h2>Conclusión</h2>

<p>{titulo} seguirá creciendo en los próximos años. Comprender cómo utilizar estas herramientas puede marcar una gran diferencia en negocios digitales.</p>
"""

    return contenido


with open("mapa_seo.txt","r",encoding="utf8") as f:
    lineas = f.readlines()

articulos = []

for linea in lineas:
    url,titulo = linea.strip().split("|")
    articulos.append((url,titulo))


for url,titulo in articulos:

    enlaces = [a for a in articulos if a[0] != url]

    contenido = generar_contenido(titulo,enlaces)

    html = f"""
<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{titulo}</title>

<meta name="description" content="Guía completa sobre {titulo}">

<link rel="canonical" href="/guias/{url}">

</head>

<body>

<h1>{titulo}</h1>

{contenido}

</body>

</html>
"""

    os.makedirs("../guias/"+url,exist_ok=True)

    with open("../guias/"+url+"/index.html","w",encoding="utf8") as f:
        f.write(html)

print("Artículos SEO generados correctamente")