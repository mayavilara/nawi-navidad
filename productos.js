/* ============================================================
   ÑAWI — Catálogo Navidad 2026 · Datos
   Fuente única. La usa catalogo.html.
   Producto: nombre, desc, detalles[], precio|null, precioNota, fotos[], tags[]
   Producto especial: tipo:"configurador" (la tarjeta "Crea tu propia esfera").
   Precios aprox. (nov 2026) — se ajustan después.
   ============================================================ */

window.NAWI = {
  marca: "Ñawi",
  temporada: "Navidad 2026",
  claim: "Hecho a mano, pieza por pieza.",
  contacto: {
    instagram: "@nawi_lp",
    whatsapp: "59165628533",
    ciudad: "La Paz, Bolivia",
  },

  about: {
    significado: "Ñawi — “lo que entra por la vista”.",
    intro: "Arte y detalles hechos a mano por Maya Avila, en La Paz. Cada pieza se piensa, se moldea y se personaliza una por una. Esta Navidad: una colección para regalar y para guardar.",
    valores: [
      { t: "Hecho a mano", d: "Pieza por pieza, nada de producción en serie." },
      { t: "Personalizado", d: "Tu nombre, tu foto, tu mascota — tú eliges." },
      { t: "Listo para regalar", d: "Llega en su cajita con moño." },
    ],
  },

  entrega: "La Paz — coordinamos entrega o recojo.",
  notaFinal: "¿Llevas esferas + bandejas + posavasos juntos? Hacemos un precio especial por cantidad. Escríbenos y lo armamos.",

  categorias: [
    {
      id: "esferas",
      titulo: "Esferas navideñas",
      subtitulo: "Personalizadas con tu nombre o tu foto, brillantes y hechas una por una. Enteras rojas o transparentes con relleno de nieve. ¿No encuentras la tuya? Créala tú misma al final.",
      productos: [
        {
          nombre: "Esfera roja personalizada",
          desc: "Esfera roja brillante de 8 cm con tu nombre en vinilo y copos de nieve. Un clásico que no falla.",
          detalles: ["8 cm", "Vinilo blanco (color desde 12 u.)", "Cajita con moño"],
          precio: 30, precioNota: "3+ Bs. 25 c/u · 6+ Bs. 20 c/u",
          fotos: ["esfera-roja-persona-1.jpg", "esfera-roja-persona-2.jpg", "esfera-roja-persona-3.jpg", "esfera-roja-persona-4.jpg"],
          tags: ["Personalizada"],
        },
        {
          nombre: "Esfera roja para tu mascota",
          desc: "La misma esfera roja de 8 cm, con el nombre de tu perrito o gatito y sus huellitas. Para el consentido de la casa.",
          detalles: ["8 cm", "Nombre + huellitas", "Cajita con moño"],
          precio: 30, precioNota: "3+ Bs. 25 c/u · 6+ Bs. 20 c/u",
          fotos: ["esfera-roja-mascota-1.jpg", "esfera-roja-mascota-2.jpg", "esfera-roja-mascota-3.jpg", "esfera-roja-mascota-4.jpg"],
          tags: ["Para mascotas"],
        },
        {
          nombre: "Esfera transparente con foto",
          desc: "Esfera transparente de 8 cm rellena de copos de nieve, con tu foto y tu nombre en vinilo. Para ti, tu familia o tus seres queridos.",
          detalles: ["8 cm", "Relleno de copos", "Foto + nombre", "Moño rojo"],
          precio: 35, precioNota: "3+ Bs. 30 c/u · 6+ Bs. 25 c/u",
          fotos: ["esfera-transp-persona-1.jpg", "esfera-transp-persona-2.jpg", "esfera-transp-persona-3.jpg", "esfera-transp-persona-4.jpg"],
          tags: ["Transparente"],
        },
        {
          nombre: "Esfera transparente para tu mascota",
          desc: "Esfera transparente de 8 cm con la foto de tu perrito o gatito, relleno de copos y su nombre en vinilo. El recuerdo más tierno del árbol.",
          detalles: ["8 cm", "Relleno de copos", "Foto de tu mascota + nombre", "Moño rojo"],
          precio: 35, precioNota: "3+ Bs. 30 c/u · 6+ Bs. 25 c/u",
          fotos: ["esfera-transp-mascota-1.jpg", "esfera-transp-mascota-2.jpg", "esfera-transp-mascota-3.jpg", "esfera-transp-mascota-4.jpg"],
          tags: ["Transparente"],
        },
        {
          nombre: "Esfera transparente solo nombre",
          desc: "Esfera transparente de 8 cm rellena de copos, con tu nombre en vinilo blanco. Limpia y elegante, sin foto.",
          detalles: ["8 cm", "Relleno de copos", "Nombre en vinilo", "Moño rojo"],
          precio: null, precioNota: null,
          fotos: ["esfera-transp-nombre-1.jpg", "esfera-transp-nombre-2.jpg", "esfera-transp-nombre-3.jpg"],
          tags: ["Transparente"],
        },
        {
          nombre: "Crea tu propia esfera",
          tipo: "configurador",
          desc: "¿Quieres algo único? Diséñala paso a paso — tipo, copos, huellitas y tu foto — y te paso la cotización.",
          tags: ["Hazla tú"],
        },
      ],
    },
    {
      id: "posavasos",
      titulo: "Posavasos",
      subtitulo: "Cemento artesanal, acabado barnizado y base de corcho. El detalle que completa la mesa.",
      productos: [
        {
          nombre: "Posavasos de cemento",
          desc: "9 cm de diámetro, marmolado o color entero. Protege la mesa y se ve lindo haciéndolo.",
          detalles: ["9 cm diámetro", "Marmolado o color entero", "Patitas de corcho"],
          precio: 15, precioNota: "Pack de 4: Bs. 12,50 c/u · 6+ Bs. 10 c/u",
          fotos: [], tags: [],
        },
      ],
    },
    {
      id: "bandejas",
      titulo: "Bandejas de cemento",
      subtitulo: "Cemento blanco teñido con ocre, acabado barnizado y base de corcho que cuida tus muebles.",
      productos: [
        {
          nombre: "Bandeja ovalada",
          desc: "Cemento artesanal con veta marmolada o color entero. Decora y sirve: para llaves, joyas, velas o la mesa.",
          detalles: ["18,5 × 9,5 cm", "Cemento blanco + ocre", "Marmolada o color entero", "Base de corcho"],
          precio: 50, precioNota: "2+ Bs. 40 c/u · 6+ Bs. 30 c/u",
          fotos: [], tags: [],
        },
      ],
    },
    {
      id: "sets",
      titulo: "Bandejas y posavasos",
      subtitulo: "El mismo cemento, en conjunto. Ideal para regalar o estrenar la mesa navideña.",
      productos: [
        { nombre: "Set bandeja + 4 posavasos", desc: "Una bandeja ovalada con juego de 4 posavasos a juego, mismo acabado.", detalles: ["1 bandeja + 4 posavasos", "Mismo acabado"], precio: 90, precioNota: null, fotos: [], tags: ["Set"] },
        { nombre: "Set bandeja + 6 posavasos", desc: "Una bandeja ovalada con juego de 6 posavasos a juego, mismo acabado.", detalles: ["1 bandeja + 6 posavasos", "Mismo acabado"], precio: 100, precioNota: null, fotos: [], tags: ["Set"] },
      ],
    },
  ],

  // Opciones de la tarjeta "Crea tu propia esfera" (configurador).
  configurador: {
    copos: [
      { label: "Copo 1 cm", size: "1 cm" },
      { label: "Copo 2 cm", size: "2 cm" },
      { label: "Copo 3 cm", size: "3 cm" },
    ],
    notaCopos: "Todas las esferas vienen con 3 copos (1, 2 y 3 cm). Agrega extras aquí.",
    huellita: { size: "~2,5 cm" },
  },

  // Se muestra DENTRO de la sección de esferas (no es un apartado aparte).
  empaque: {
    titulo: "Y viene listo para regalar",
    texto: "Cada esfera llega en su cajita de cartulina con ventana redonda y un moño de satén. El moño rojo es el clásico de la casa y viene en todas — sin envolver nada, ya es un regalo.",
    nota: "¿Lo quieres en dorado, azul o un color tuyo? Va a partir de 1 docena. Lo mismo para letras o copos en color (el blanco va en cualquier cantidad). Las esferas transparentes con texto llevan moño rojo.",
    banner: "empaque-1.jpg",
    fotos: ["empaque-2.jpg", "empaque-3.jpg", "empaque-4.jpg"],
    moños: ["Moño rojo", "Moño dorado · desde 1 docena", "Moño azul · desde 1 docena"],
  },
};
