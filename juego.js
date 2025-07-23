// ==============================
// ARCHIVO: juego.js
// Controla solo el login, registro e inicio de sesión
// ==============================

window.addEventListener('DOMContentLoaded', () => {

  // ✅ Verificación de carga
  console.log("✅ Login y Registro cargado");

  // ==============================
  // BOTÓN INICIAR CON GOOGLE
  // ==============================

  const btnLogin = document.getElementById('btn-login-simulacion');

  btnLogin?.addEventListener('click', () => {
    document.getElementById('pantalla-login')?.classList.add('ventana-oculta');
    document.getElementById('pantalla-login').style.display = 'none';

    const registro = document.getElementById('registro-usuario');
    registro?.classList.remove('ventana-oculta');
    registro.style.display = 'flex';
  });

  // ==============================
  // FORMULARIO DE REGISTRO
  // ==============================

  const formRegistro = document.getElementById('form-registro');

  formRegistro?.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre-usuario').value;
    const fecha = document.getElementById('fecha-nacimiento').value;

    const datosUsuario = { nombre, fechaNacimiento: fecha };
    localStorage.setItem('jugador-datos', JSON.stringify(datosUsuario));

    iniciarJuego(nombre);
  });

  // ==============================
  // MOSTRAR JUEGO
  // ==============================

  function iniciarJuego(nombreJugador = "Jugador") {
    console.log("🎮 Iniciando juego con:", nombreJugador);

    document.getElementById('pantalla-login')?.classList.add('ventana-oculta');
    document.getElementById('pantalla-login').style.display = 'none';

    document.getElementById('registro-usuario')?.classList.add('ventana-oculta');
    document.getElementById('registro-usuario').style.display = 'none';

    document.getElementById('juego')?.classList.remove('ventana-oculta');
    document.getElementById('barra-inferior')?.classList.remove('ventana-oculta');
    document.getElementById('btn-cerrar-sesion')?.classList.remove('ventana-oculta');

    document.getElementById('nombre-jugador').textContent = `👤 ${nombreJugador}`;

    document.getElementById('btn-cerrar-sesion')?.addEventListener('click', () => {
      document.getElementById('juego')?.classList.add('ventana-oculta');
      document.getElementById('barra-inferior')?.classList.add('ventana-oculta');
      document.getElementById('btn-cerrar-sesion')?.classList.add('ventana-oculta');

      document.getElementById('pantalla-login')?.classList.remove('ventana-oculta');
      document.getElementById('pantalla-login').style.display = 'flex';
    });
  }

});
