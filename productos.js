/* ============================================================
   ÑAWI — Catálogo Navidad 2026 · Datos
   Fuente única. La usa index.html.
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
    ciudad: "Bolivia",
  },

  about: {
    significado: "Ñawi — “lo que entra por la vista”.",
    intro: "Arte y detalles hechos a mano en Bolivia. Cada pieza se piensa, se moldea y se personaliza una por una. Esta Navidad: una colección para regalar y para guardar.",
    mision: "Convertir momentos en recuerdos: piezas hechas a mano, personalizadas una por una, para que cada regalo tenga nombre, historia y detalle.",
    vision: "Que Ñawi sea sinónimo de lo hecho a mano en Bolivia — una marca que acompaña tus fechas más queridas con arte, calidez y un acabado impecable.",
    valores: [
      { t: "Hecho a mano", d: "Pieza por pieza, nada de producción en serie." },
      { t: "Personalizado", d: "Tu nombre, tu foto, tu mascota — tú eliges." },
      { t: "Listo para regalar", d: "Llega en su cajita con moño." },
    ],
  },

  // Incentivo: seguir en Instagram + sorteo navideño.
  sorteo: {
    texto: "Sigue a @nawi_lp en Instagram y entra al sorteo de descuentos de Navidad.",
    cta: "Seguir en Instagram",
  },

  // Reseñas que se muestran en la página. Editá/agregá a mano. (Al enviar una reseña nueva,
  // el cliente te la manda por WhatsApp; una web estática no puede guardarlas sola.)
  resenas: [
    { nombre: "Daniela R.", texto: "Las esferas quedaron hermosas y el nombre perfecto. Llegó todo en su cajita con moño.", estrellas: 5 },
    { nombre: "Marcela P.", texto: "El juego de bandeja con posavasos es divino, se ve carísimo. Me encantó para regalar.", estrellas: 5 },
    { nombre: "Luis A.", texto: "Pedí posavasos de regalo y quedaron encantados. Muy buena atención.", estrellas: 5 },
  ],

  entrega: "Envíos a toda Bolivia — coordinamos entrega o recojo.",
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
          desc: "Esfera transparente de 8 cm rellena de copos de nieve, con tu foto. Súmale tu nombre en vinilo si quieres — va como extra.",
          detalles: ["8 cm", "Relleno de copos", "Tu foto", "Nombre: extra opcional", "Moño rojo"],
          precio: 35, precioNota: "3+ Bs. 30 c/u · 6+ Bs. 25 c/u",
          fotos: ["esfera-transp-persona-1.jpg", "esfera-transp-persona-2.jpg", "esfera-transp-persona-3.jpg", "esfera-transp-persona-4.jpg"],
          tags: ["Transparente"],
        },
        {
          nombre: "Esfera transparente para tu mascota",
          desc: "Esfera transparente de 8 cm con la foto de tu perrito o gatito y relleno de copos. El nombre va como extra opcional. El recuerdo más tierno del árbol.",
          detalles: ["8 cm", "Relleno de copos", "Foto de tu mascota", "Nombre: extra opcional", "Moño rojo"],
          precio: 35, precioNota: "3+ Bs. 30 c/u · 6+ Bs. 25 c/u",
          fotos: ["esfera-transp-mascota-1.jpg", "esfera-transp-mascota-2.jpg", "esfera-transp-mascota-3.jpg", "esfera-transp-mascota-4.jpg"],
          tags: ["Transparente"],
        },
        {
          nombre: "Esfera transparente solo nombre",
          desc: "Esfera transparente de 8 cm rellena de copos, con tu nombre en vinilo blanco. Limpia y elegante, sin foto.",
          detalles: ["8 cm", "Relleno de copos", "Nombre en vinilo", "Moño rojo"],
          precio: 35, precioNota: "3+ Bs. 30 c/u · 6+ Bs. 25 c/u",
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
    // Posavasos — 6 diseños. Cada producto toma sus fotos de la carpeta fotosDir
    // (ver fotos-sets.js, que se genera con actualizar-fotos.py al subir las fotos).
    {
      id: "posavasos",
      titulo: "Posavasos",
      subtitulo: "Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho. 6 diseños, ninguno repetido. Por unidad Bs. 15; el juego de 6 baja a Bs. 12 c/u.",
      productos: [
        { nombre: "Posavasos · Diseño 1", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-1", tags: ["Diseño 1"] },
        { nombre: "Posavasos · Diseño 2", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-2", tags: ["Diseño 2"] },
        { nombre: "Posavasos · Diseño 3", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-3", tags: ["Diseño 3"] },
        { nombre: "Posavasos · Diseño 4", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-4", tags: ["Diseño 4"] },
        { nombre: "Posavasos · Diseño 5", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-5", tags: ["Diseño 5"] },
        { nombre: "Posavasos · Diseño 6", desc: "Posavaso de cemento blanco de 9 cm con imagen DTF, barnizado con resina (impermeabilizante en la mezcla) y base de corcho para no rayar la superficie.", detalles: ["9 cm diámetro", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 15, precioNota: "Juego de 6: Bs. 12 c/u", fotosDir: "posavasos/set-6", tags: ["Diseño 6"] },
      ],
    },
    // Bandejas — 6 diseños. El diseño N es el mismo que el posavaso N y el juego N.
    {
      id: "bandejas",
      titulo: "Bandejas de cemento",
      subtitulo: "Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho que cuida tus muebles. Una bandeja Bs. 40; a partir de 2, Bs. 35 c/u.",
      productos: [
        { nombre: "Bandeja · Diseño 1", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-1", tags: ["Diseño 1"] },
        { nombre: "Bandeja · Diseño 2", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-2", tags: ["Diseño 2"] },
        { nombre: "Bandeja · Diseño 3", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-3", tags: ["Diseño 3"] },
        { nombre: "Bandeja · Diseño 4", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-4", tags: ["Diseño 4"] },
        { nombre: "Bandeja · Diseño 5", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-5", tags: ["Diseño 5"] },
        { nombre: "Bandeja · Diseño 6", desc: "Bandeja ovalada de cemento blanco con imagen DTF, barnizada con resina (impermeabilizante en la mezcla) y base de corcho que cuida tus muebles. Decora y sirve: para llaves, joyas, velas o la mesa.", detalles: ["18,5 × 9,5 cm", "Cemento blanco + imagen DTF", "Barniz de resina impermeable", "Base de corcho"], precio: 40, precioNota: "2+ bandejas: Bs. 35 c/u", fotosDir: "bandejas/set-6", tags: ["Diseño 6"] },
      ],
    },
    // Bandejas + posavasos — 6 juegos completos (1 bandeja + 6 posavasos a juego).
    {
      id: "sets",
      titulo: "Bandejas y posavasos",
      subtitulo: "El juego completo: una bandeja con sus 6 posavasos a juego, mismo diseño y acabado. Ideal para regalar o estrenar la mesa navideña.",
      productos: [
        { nombre: "Juego 1 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-1", tags: ["Juego completo"] },
        { nombre: "Juego 2 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-2", tags: ["Juego completo"] },
        { nombre: "Juego 3 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-3", tags: ["Juego completo"] },
        { nombre: "Juego 4 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-4", tags: ["Juego completo"] },
        { nombre: "Juego 5 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-5", tags: ["Juego completo"] },
        { nombre: "Juego 6 · Bandeja + 6 posavasos", desc: "Una bandeja con sus 6 posavasos a juego, mismo diseño. Cemento blanco con imagen DTF, barniz de resina impermeable y base de corcho.", detalles: ["1 bandeja + 6 posavasos", "Cemento blanco + imagen DTF", "Barniz impermeable", "Base de corcho"], precio: 100, precioNota: null, fotosDir: "bandejas-con-posavasos/set-6", tags: ["Juego completo"] },
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
