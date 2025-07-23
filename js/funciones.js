// ==============================
// ESTADÍSTICAS DEL JUGADOR
// ==============================

let vida = 100;      // Vida inicia en 100
let energia = 100;   // Energía inicia en 100
let agua = 100;      // Agua inicia en 100


// ==============================
// ACTUALIZAR BARRAS EN HUD
// ==============================

function actualizarHUD() {
  // Actualiza la anchura de las barras en pantalla según los valores actuales
  document.getElementById('vida-barra').style.width = `${vida}%`;
  document.getElementById('energia-barra').style.width = `${energia}%`;
  document.getElementById('agua-barra').style.width = `${agua}%`;

  // 🟢 Actualizamos los textos visibles
  document.getElementById('vida-texto').textContent = `${vida} / 100`;
  document.getElementById('energia-texto').textContent = `${energia} / 100`;
  document.getElementById('agua-texto').textContent = `${agua} / 100`;


  // Si no hay energía o agua, desactivamos el botón de explorar
  const btnExplorar = document.getElementById('btn-explorar-bosque');
  if (energia <= 0 || agua <= 0) {
    btnExplorar.disabled = true;
    btnExplorar.textContent = "🚫 Sin energía o agua";
  } else {
    btnExplorar.disabled = false;
    btnExplorar.textContent = "Explorar";
  }
}


// ==============================
// EVENTOS DESPUÉS DE CARGA DEL DOM
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  console.log("🔍 funciones.js está funcionando correctamente");

  // ==============================
// BOTÓN EXPLORAR BOSQUE
// ==============================

// Obtener elementos del DOM
const btnExplorar = document.getElementById('btn-explorar-bosque');
const ventanaEvento = document.getElementById('ventana-evento');
const textoEvento = document.getElementById('texto-evento');

// Variable para controlar el timeout activo
let timeoutEvento; // ✅ Se usará para cancelar el anterior

// Verificación de elementos y listener
if (btnExplorar && ventanaEvento && textoEvento) {
  btnExplorar.addEventListener('click', () => {
    // Lista de eventos posibles
    const eventos = [
      "🌿 Encontraste una rama seca.",
      "🐗 Un animal salvaje te asustó, perdiste energía.",
      "🪨 Hallaste una piedra útil.",
      "😐 No encontraste nada…",
      "🍎 Descubriste un fruto comestible."
    ];

    // Elegir evento aleatorio
    const evento = eventos[Math.floor(Math.random() * eventos.length)];

    // Modificar recursos
    energia -= 1;
    agua -= 2;

    // Penalización adicional si el evento es peligroso
    if (evento.includes("🐗")) energia -= 2;

    // Asegurar que no bajen de cero
    energia = Math.max(0, energia);
    agua = Math.max(0, agua);

    // Mostrar evento en pantalla
    textoEvento.textContent = evento;
    ventanaEvento.classList.remove('ventana-oculta');

    // Actualizar la HUD
    actualizarHUD();

    // ✅ Cancelar timeout anterior si existe
    clearTimeout(timeoutEvento);

    // ⏲ Iniciar nuevo timeout para ocultar después de 10 segundos
    timeoutEvento = setTimeout(() => {
      ventanaEvento.classList.add('ventana-oculta');
    }, 10000);
  });

  // HUD inicial
  actualizarHUD();
}


  // ==============================
  // BOTÓN INVENTARIO
  // ==============================

  const btnInventario = document.getElementById('btn-inventario');
  const ventanaInventario = document.getElementById('ventana-inventario');
  const btnCerrarInventario = document.getElementById('cerrar-inventario');

  btnInventario?.addEventListener('click', () => {
    console.log("Abriendo inventario");
    ventanaInventario.classList.add('ventana-visible');
    ventanaInventario.classList.remove('ventana-oculta');
  });

  btnCerrarInventario?.addEventListener('click', () => {
    console.log("Cerrando inventario");
    ventanaInventario.classList.remove('ventana-visible');
    ventanaInventario.classList.add('ventana-oculta');
  });

  // ==============================
  // BOTÓN MAPA
  // ==============================

  const btnMapa = document.getElementById('btn-mapa');
  const ventanaMapa = document.getElementById('ventana-mapa');
  const btnCerrarMapa = document.getElementById('cerrar-mapa');

  btnMapa?.addEventListener('click', () => {
    console.log("🗌️ Mostrando mapa");
    ventanaMapa.classList.add('ventana-visible');
    ventanaMapa.classList.remove('ventana-oculta');
  });

  btnCerrarMapa?.addEventListener('click', () => {
    console.log("Cerrando mapa");
    ventanaMapa.classList.remove('ventana-visible');
    ventanaMapa.classList.add('ventana-oculta');
  });

  // ==============================
  // BOTONES IR A ZONAS (Hogar / Bosque)
  // ==============================

  document.querySelectorAll('.btn-ir').forEach(boton => {
    boton.addEventListener('click', () => {
      const destino = boton.dataset.zona;

      ventanaMapa.classList.add('ventana-oculta');

      const zona = document.getElementById(destino);
      if (zona) {
        zona.classList.remove('ventana-oculta');
        zona.style.display = 'block';
      } else {
        console.warn("⚠️ Zona no encontrada:", destino);
      }
    });
  });

  // ==============================
  // BOTONES CIERRE DE ZONAS
  // ==============================

  document.querySelectorAll('.btn-cerrar-zona').forEach(boton => {
    const idZona = boton.dataset.zona;
    boton.addEventListener('click', () => {
      const zona = document.getElementById(idZona);
      if (zona) {
        zona.classList.add('ventana-oculta');
        zona.style.display = 'none';
      }
    });
  });
});

// ==============================
// REGENERACIÓN DE ENERGÍA CADA 2 MINUTOS
// ==============================

setInterval(() => {
  if (energia < 100) {
    energia = Math.min(100, energia + 5);
    console.log("Energía regenerada +5. Total:", energia);
    actualizarHUD();
  }
}, 120000);

let experiencia = 0;
let experienciaMaxima = 100;

// Llama esta función cuando ganes experiencia
function ganarExperiencia(cantidad) {
  experiencia += cantidad;

  // Si sube de nivel
  if (experiencia >= experienciaMaxima) {
    experiencia -= experienciaMaxima;
    subirNivel(); // 💥 Nivel aumentado
  }

  actualizarXP();
}

function actualizarXP() {
  const porcentaje = (experiencia / experienciaMaxima) * 100;
  document.getElementById('xp-relleno').style.width = `${porcentaje}%`;
  document.getElementById('xp-texto').textContent = `${experiencia} / ${experienciaMaxima} XP`;
}

function subirNivel() {
  // Aquí tú defines qué pasa al subir de nivel
  console.log("🎉 ¡Nivel aumentado!");
  nivel += 1;
  experienciaMaxima += 50; // Puedes hacerlo progresivo
  document.getElementById("nivel-jugador").textContent = "Nivel " + nivel;
}
