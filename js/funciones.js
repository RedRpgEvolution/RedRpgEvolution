// ==============================
// ARCHIVO funciones.js con pruebas de consola
// Se encarga de los eventos del juego: HUD, botones, zonas, etc.
// ==============================

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

  const btnExplorar = document.getElementById('btn-explorar-bosque');
  const ventanaEvento = document.getElementById('ventana-evento');
  const textoEvento = document.getElementById('texto-evento');

  console.log("📦 btn-explorar-bosque:", btnExplorar);

  if (btnExplorar && ventanaEvento && textoEvento) {
    btnExplorar.addEventListener('click', () => {
      const eventos = [
        "🌿 Encontraste una rama seca.",
        "🐗 Un animal salvaje te asustó, perdiste energía.",
        "🪨 Hallaste una piedra útil.",
        "😐 No encontraste nada…",
        "🍎 Descubriste un fruto comestible."
      ];

      const evento = eventos[Math.floor(Math.random() * eventos.length)];

      energia -= 1;
      agua -= 2;

      if (evento.includes("🐗")) energia -= 2;

      energia = Math.max(0, energia);
      agua = Math.max(0, agua);

      textoEvento.textContent = evento;
      ventanaEvento.classList.remove('oculto');

      actualizarHUD();

      setTimeout(() => {
        ventanaEvento.classList.add('oculto');
      }, 4000);
    });

    actualizarHUD();
  }

  // ==============================
// BOTÓN INVENTARIO
// ==============================

const btnInventario = document.getElementById('btn-inventario'); // Botón de HUD
const ventanaInventario = document.getElementById('ventana-inventario'); // Ventana flotante
const btnCerrarInventario = document.getElementById('cerrar-inventario'); // Botón cerrar

btnInventario?.addEventListener('click', () => {
  console.log("📦 Abriendo inventario");
  ventanaInventario.classList.add('ventana-visible'); // Mostramos
  ventanaInventario.classList.remove('ventana-oculta'); // Aseguramos que se quite oculta
});

btnCerrarInventario?.addEventListener('click', () => {
  console.log("❌ Cerrando inventario");
  ventanaInventario.classList.remove('ventana-visible'); // Ocultamos
  ventanaInventario.classList.add('ventana-oculta');
});


// ==============================
// BOTÓN MAPA
// ==============================

const btnMapa = document.getElementById('btn-mapa'); // Botón HUD
const ventanaMapa = document.getElementById('ventana-mapa'); // Ventana flotante
const btnCerrarMapa = document.getElementById('cerrar-mapa'); // Botón cerrar

btnMapa?.addEventListener('click', () => {
  console.log("🗺️ Mostrando mapa");
  ventanaMapa.classList.add('ventana-visible'); // Mostramos
  ventanaMapa.classList.remove('ventana-oculta');
});

btnCerrarMapa?.addEventListener('click', () => {
  console.log("❌ Cerrando mapa");
  ventanaMapa.classList.remove('ventana-visible'); // Ocultamos
  ventanaMapa.classList.add('ventana-oculta');
});

  // ==============================
  // BOTONES IR A ZONAS (Hogar / Bosque)
  // ==============================

  document.querySelectorAll('.btn-ir').forEach(boton => {
    boton.addEventListener('click', () => {
      const destino = boton.dataset.zona;

      ventanaMapa.classList.add('ventana-oculta');

      if (destino === 'hogar') {
        document.getElementById('zona-hogar')?.classList.remove('ventana-oculta');
      } else if (destino === 'bosque') {
        const zonaBosque = document.getElementById('zona-bosque');
        zonaBosque.classList.remove('ventana-oculta');
        zonaBosque.style.display = 'block'; // 🔥 Esto lo hace visible manualmente

      }
    });
  });

  // ==============================
  // BOTONES CIERRE DE ZONAS
  // ==============================

  document.querySelectorAll('.btn-cerrar-zona').forEach(boton => {
    const idZona = boton.dataset.zona;
    boton.addEventListener('click', () => {
      document.getElementById(idZona)?.classList.add('ventana-oculta');
    });
  });
});
