import os
import random

def generar_contenido(titulo):

    intro = f"""
<p>{titulo} es un tema cada vez más importante para emprendedores, empresas digitales y profesionales que quieren mejorar su productividad. En esta guía completa explicamos cómo funciona {titulo.lower()}, qué ventajas ofrece y cómo empezar a aplicarlo en proyectos reales.</p>

<p>Durante los últimos años la automatización, el software SaaS y las herramientas de inteligencia artificial han cambiado la forma de trabajar. Hoy es posible automatizar procesos, generar contenido, analizar datos y crear negocios digitales con mucha más facilidad.</p>
"""

    secciones = [
        "Qué es y cómo funciona",
        "Ventajas principales",
        "Aplicaciones en negocios digitales",
        "Herramientas recomendadas",
        "Consejos para empezar",
        "Errores comunes",
        "Estrategias avanzadas",
        "Casos reales de uso"
    ]

    contenido = intro

    for seccion in secciones:

        contenido += f"<h2>{seccion} de {titulo}</h2>"

        for i in range(3):

            contenido += f"""
<p>{titulo} permite mejorar la eficiencia en empresas digitales, automatizar tareas repetitivas y reducir costes operativos. Muchas herramientas modernas utilizan inteligencia artificial para facilitar procesos complejos que antes requerían mucho tiempo o conocimientos técnicos.</p>

<p>Una estrategia bien diseñada permite aprovechar al máximo {titulo.lower()}, combinando diferentes herramientas digitales, automatización de procesos y optimización de recursos. Esto es especialmente útil para emprendedores que buscan escalar negocios online.</p>
"""

    contenido += f"""
<h2>Conclusión</h2>

<p>{titulo} seguirá creciendo durante los próximos años. Las empresas que adopten estas tecnologías podrán trabajar de forma más eficiente, reducir costes y crear nuevos modelos de negocio digitales.</p>

<p>Comprender cómo funciona {titulo.lower()} y aplicarlo correctamente puede marcar la diferencia entre un negocio tradicional y uno altamente automatizado.</p>
"""

    return contenido


with open("mapa_seo.txt","r",encoding="utf8") as f:
    lineas = f.readlines()

for linea in lineas:

    url,titulo = linea.strip().split("|")

    contenido = generar_contenido(titulo)

    html = f"""
<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{titulo}</title>

<meta name="description" content="Guía completa sobre {titulo}">

<link rel="canonical" href="https://automatizatunegocio.org/guias/{url}">

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