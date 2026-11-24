#!/usr/bin/env python3
"""
Ñawi — Actualiza fotos-sets.js escaneando las carpetas de fotos/.
Corré esto DESPUÉS de subir las fotos a las carpetas de los sets:

    python3 actualizar-fotos.py

Ordena las fotos así (lo que se ve primero en la tarjeta va primero):
  posavasos/set-N:   juntos/  ->  individuales/
  bandejas/set-N:    (todas, ordenadas)
  bandejas-con-posavasos/set-N:  conjunto/ -> solo-bandeja/ -> solo-posavasos/
"""
import os, json, re
from PIL import Image

AQUI = os.path.dirname(os.path.abspath(__file__))
FOTOS = os.path.join(AQUI, "fotos")
EXTS = (".jpg", ".jpeg", ".png", ".webp", ".gif")
MAXLADO = 1200   # lado máximo en px de la versión web
CALIDAD = 82     # calidad JPEG

def natural(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r'(\d+)', s)]

def web_version(rel):
    """Crea (si falta o cambió) una copia liviana en fotos/web/ y devuelve su ruta relativa."""
    src = os.path.join(FOTOS, rel)
    dst_rel = "web/" + os.path.splitext(rel)[0] + ".jpg"
    dst = os.path.join(FOTOS, dst_rel)
    if (not os.path.exists(dst)) or os.path.getmtime(dst) < os.path.getmtime(src):
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        im = Image.open(src)
        if im.mode in ("RGBA", "P", "LA"):
            fondo = Image.new("RGB", im.size, (255, 255, 255))
            im = im.convert("RGBA")
            fondo.paste(im, mask=im.split()[-1])
            im = fondo
        else:
            im = im.convert("RGB")
        im.thumbnail((MAXLADO, MAXLADO), Image.LANCZOS)
        im.save(dst, "JPEG", quality=CALIDAD, optimize=True, progressive=True)
    return dst_rel

def imgs_in(rel):
    """Lista de imágenes web (rutas relativas a fotos/) dentro de una subcarpeta del original."""
    d = os.path.join(FOTOS, rel)
    if not os.path.isdir(d):
        return []
    out = [f for f in os.listdir(d) if f.lower().endswith(EXTS)]
    out.sort(key=natural)
    return [web_version(rel + "/" + f) for f in out]

def collect(fotosdir, suborden):
    """Junta imágenes de las subcarpetas en el orden dado; si no hay subcarpetas, toma las de la raíz."""
    res = []
    for sub in suborden:
        res += imgs_in(fotosdir + "/" + sub if sub else fotosdir)
    # fallback: fotos sueltas directamente en fotosdir
    if not res:
        res = imgs_in(fotosdir)
    return res

manifest = {}
for n in range(1, 7):
    manifest[f"posavasos/set-{n}"] = collect(f"posavasos/set-{n}", ["juntos", "individuales"])
for n in range(1, 7):
    manifest[f"bandejas/set-{n}"] = collect(f"bandejas/set-{n}", [""])
for n in range(1, 7):
    manifest[f"bandejas-con-posavasos/set-{n}"] = collect(
        f"bandejas-con-posavasos/set-{n}", ["conjunto", "solo-bandeja", "solo-posavasos"])

cuerpo = ",\n".join(
    f'  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}'
    for k, v in manifest.items()
)
out = (
    "/* ============================================================\n"
    "   ÑAWI — Fotos de los sets (GENERADO AUTOMÁTICAMENTE)\n"
    "   NO editar a mano. Se regenera con:  python3 actualizar-fotos.py\n"
    "   Rutas relativas a la carpeta fotos/.\n"
    "   ============================================================ */\n"
    "window.FOTOS_SETS = {\n" + cuerpo + "\n};\n"
)
with open(os.path.join(AQUI, "fotos-sets.js"), "w", encoding="utf-8") as f:
    f.write(out)

total = sum(len(v) for v in manifest.values())
print(f"fotos-sets.js actualizado · {total} fotos en total")
for k, v in manifest.items():
    print(f"  {k:36s} {len(v)} foto(s)")
