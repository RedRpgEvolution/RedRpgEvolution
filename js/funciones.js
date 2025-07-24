// ==============================
// ESTADÍSTICAS DEL JUGADOR
// ==============================

let vida = 100;
let energia = 100;
let agua = 100;

let experiencia = 0;
let experienciaMaxima = 100;
let nivel = 1;

// ==============================
// ACTUALIZAR BARRAS EN HUD
// ==============================

function actualizarHUD() {
  document.getElementById('vida-barra').style.width = `${vida}%`;
  document.getElementById('energia-barra').style.width = `${energia}%`;
  document.getElementById('agua-barra').style.width = `${agua}%`;

  document.getElementById('vida-texto').textContent = `${vida} / 100`;
  document.getElementById('energia-texto').textContent = `${energia} / 100`;
  document.getElementById('agua-texto').textContent = `${agua} / 100`;

  const btnExplorar = document.getElementById('btn-explorar-bosque');
  if (energia <= 0 || agua <= 0) {
    btnExplorar.disabled = true;
    btnExplorar.textContent = "🚫 Sin energía o agua";
  } else {
    btnExplorar.disabled = false;
    btnExplorar.textContent = "Explorar";
  }
}

function btnlogin() {
  window.location.href = "https://www.google.com";
}

// ==============================
// EVENTOS DESPUÉS DE CARGA DEL DOM
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  console.log("🔍 funciones.js está funcionando correctamente");

  const btnExplorar = document.getElementById('btn-explorar-bosque');
  const ventanaEvento = document.getElementById('ventana-evento');
  const textoEvento = document.getElementById('texto-evento');
  const ventanaMapa = document.getElementById('ventana-mapa');

  let timeoutEvento;
  let framePrueba = 0;
  let animacionPrueba;

  function animarPrueba() {
    const personaje = document.getElementById('personaje-prueba');
    clearInterval(animacionPrueba);

    animacionPrueba = setInterval(() => {
      framePrueba = (framePrueba + 1) % 3;
      const posX = framePrueba * 100 / 2;
      personaje.style.backgroundPosition = `${posX}% 0%`;
    }, 150);

    setTimeout(() => {
      clearInterval(animacionPrueba);
      personaje.style.backgroundPosition = `0% 0%`;
    }, 1000);
  }

  if (btnExplorar && ventanaEvento && textoEvento) {
    btnExplorar.addEventListener('click', () => {
      animarPrueba();

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
      ventanaEvento.classList.remove('ventana-oculta');
      ventanaEvento.classList.add('ventana-visible');

      actualizarHUD();
      ganarExperiencia(5);

      clearTimeout(timeoutEvento);
      timeoutEvento = setTimeout(() => {
        ventanaEvento.classList.add('ventana-oculta');
        ventanaEvento.classList.remove('ventana-visible');
      }, 10000);
    });

    actualizarHUD();
  }

  const btnInventario = document.getElementById('btn-inventario');
  const ventanaInventario = document.getElementById('ventana-inventario');
  const btnCerrarInventario = document.getElementById('cerrar-inventario');

  btnInventario?.addEventListener('click', () => {
    ventanaInventario.classList.add('ventana-visible');
    ventanaInventario.classList.remove('ventana-oculta');
  });

  btnCerrarInventario?.addEventListener('click', () => {
    ventanaInventario.classList.remove('ventana-visible');
    ventanaInventario.classList.add('ventana-oculta');
  });

  const btnMapa = document.getElementById('btn-mapa');
  const btnCerrarMapa = document.getElementById('cerrar-mapa');

  btnMapa?.addEventListener('click', () => {
    ventanaMapa.classList.add('ventana-visible');
    ventanaMapa.classList.remove('ventana-oculta');
  });

  btnCerrarMapa?.addEventListener('click', () => {
    ventanaMapa.classList.remove('ventana-visible');
    ventanaMapa.classList.add('ventana-oculta');
  });

  document.querySelectorAll('.btn-ir').forEach(boton => {
  boton.addEventListener('click', () => {
    const destino = boton.dataset.zona;
    console.log("🌲 Zona solicitada:", destino);

    ventanaMapa.classList.add('ventana-oculta');
    ventanaMapa.classList.remove('ventana-visible');

    const zona = document.getElementById(destino);
    if (zona) {
      // 🧼 Asegura eliminar clases anteriores
      zona.classList.remove('ventana-oculta');
      zona.classList.remove('ventana-visible');

      // ✅ Luego mostrar
      zona.style.display = 'block'; // <-- adicional por si `ventana-oculta` dejó display: none
      zona.classList.add('ventana-visible');
    } else {
      console.warn("⚠️ Zona no encontrada:", destino);
    }
  });
});


  document.querySelectorAll('.btn-cerrar-zona').forEach(boton => {
    const idZona = boton.dataset.zona;
    boton.addEventListener('click', () => {
      const zona = document.getElementById(idZona);
      if (zona) {
        zona.classList.add('ventana-oculta');
        zona.classList.remove('ventana-visible');
      }
    });
  });
});

setInterval(() => {
  if (energia < 100) {
    energia = Math.min(100, energia + 5);
    actualizarHUD();
  }
}, 120000);

function ganarExperiencia(cantidad) {
  experiencia += cantidad;
  if (experiencia >= experienciaMaxima) {
    experiencia -= experienciaMaxima;
    subirNivel();
  }
  actualizarXP();
}

function actualizarXP() {
  const porcentaje = (experiencia / experienciaMaxima) * 100;
  document.getElementById('xp-relleno').style.width = `${porcentaje}%`;
  document.getElementById('xp-texto').textContent = `${experiencia} / ${experienciaMaxima} XP`;
}

function subirNivel() {
  nivel += 1;
  experienciaMaxima += 50;
  document.getElementById("nivel-jugador").textContent = "Nivel " + nivel;
}
