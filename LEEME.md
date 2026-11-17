# 🎄 Catálogo Navidad 2026 — Ñawi

Sistema de catálogo en **3 formatos**, todos alimentados por un solo archivo: `productos.js`.

| Archivo | Para qué |
|---------|----------|
| `catalogo.html` | **Catálogo web** (link para WhatsApp/Instagram) y **PDF** (Ctrl+P → Guardar como PDF) |
| `tarjetas-instagram.html` | **Tarjetas 1080×1080** para el feed, con botón "Descargar PNG" |
| `productos.js` | **Datos** — aquí van nombres, precios y nombres de foto |
| `fotos/` | **Tus fotos de producto** van aquí |

---

## Qué necesito de ti (para terminarlo)

### 1. Las fotos → carpeta `fotos/`
Copia aquí tus fotos (reales y las de IA). Pon nombres simples sin espacios ni tildes:
`esfera-01.jpg`, `bandeja-dorada-01.jpg`, `posavasos-set-01.jpg`, etc.
Ideal: formato vertical o cuadrado, buena luz.

### 2. La lista de productos
Por cada producto dime: **nombre · descripción corta · precio (Bs.) · qué foto le toca**.
Me lo pasas como quieras (lista, audio, lo que sea) y yo lleno `productos.js`.
Mientras no haya foto o precio, el catálogo muestra un marcador elegante y "Consultar" — nunca se ve roto.

### 3. Tu WhatsApp
Para el botón "Pedir por WhatsApp". Va en `productos.js` → `contacto.whatsapp` (ej. `59170000000`).

---

## Cómo verlo

- **Rápido:** doble clic en `catalogo.html`.
- **Mejor (para que carguen fotos y exporten PNG sin problemas):** abre una terminal en esta carpeta y corre:
  ```
  python3 -m http.server 8080
  ```
  Luego entra a `http://localhost:8080/catalogo.html`

## Cómo sacar el PDF
Abre `catalogo.html` → Ctrl+P → Destino: *Guardar como PDF* → Márgenes: *Predeterminado* → Guardar.

## Cómo sacar las tarjetas de Instagram
Abre `tarjetas-instagram.html` → en cada tarjeta pulsa **⬇ Descargar PNG**.
(Si usas el servidor local de arriba, las fotos reales se exportan bien.)
