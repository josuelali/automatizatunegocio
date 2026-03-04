import os

with open("plantilla.html","r",encoding="utf8") as f:
    plantilla = f.read()

with open("mapa_seo.txt","r",encoding="utf8") as f:
    lineas = f.readlines()

for linea in lineas:

    url,titulo = linea.strip().split("|")

    html = plantilla.replace("{{TITLE}}",titulo)
    html = html.replace("{{URL}}",url)

    os.makedirs("../guias/"+url,exist_ok=True)

    with open("../guias/"+url+"/index.html","w",encoding="utf8") as f:
        f.write(html)

print("Páginas generadas correctamente")