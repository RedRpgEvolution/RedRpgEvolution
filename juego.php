<?php 
  session_start();

  if(empty($_SESSION["id"])){
    header("location: login.php");
  }

 ?>
<!DOCTYPE html>
<html lang="es">

  <!-- Sección de cabecera, donde van los metadatos -->
  <head>
    <!-- Codificación de caracteres (necesario para que se muestren tildes, ñ, etc.) -->
    <meta charset="UTF-8">

    <!-- Permite que el sitio sea responsivo en celulares y tablets -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título de la pestaña del navegador -->
    <title>Red Evo</title>

    <!-- Enlace al archivo de estilos CSS -->
    <link rel="stylesheet" href="estilo/estilo.css">
    <link rel="stylesheet" href="estilo/inventario.css">
  </head>

  <body>

    <!-- Barra de experiencia superior -->
    <div id="barra-xp">

        <!-- Parte que se llena -->
        <div id="xp-relleno">
        </div>
        <!-- Texto encima -->
        <span id="xp-texto">0 / 100 XP</span>

    </div>

    <!-- Contenedor principal del juego -->
    <div id="juego">

      <!-- HUD lateral izquierdo en pagina (vida, energia y agua)estilo.css -->
      <div id="hud-estadisticas-jugador">
        <div>
          <!-- Nombre del jugador -->
          <div id="nombre-jugador" class="nombre-usuario"> aquui <?php  echo $_SESSION["user"]; ?>
          </div>     
          <!-- Nivel del jugador -->
          <div id="nivel-jugador" class="nivel-usuario">Nivel 1 
          </div>
          <a href="js/session_destroy.php">CERRAR SESION</a>
        </div>  
      

        <!--vida, energia y agua en estilo.css-->
        <div class="contenedor-estadisticas">

          <!-- Barra de Vida -->
          <div>
              <label>Vida</label>
              <span id="vida-texto" class="barra-texto">100 / 100</span>  <!-- 🔢 Texto visible -->
              <div class="progreso">
                <div class="relleno" id="vida-barra">
                </div>
              </div>  
          </div>

          <!-- Barra de Energía -->
          <div>
            <label>Energía</label>
            <span id="energia-texto" class="barra-texto">100 / 100</span> <!-- 🔢 Texto visible -->
              <div class="progreso">
                <div class="relleno" id="energia-barra">
                </div>
              </div>
          </div>

          <!-- Barra de Agua -->
          <div>
            <label>Agua</label>
            <span id="agua-texto" class="barra-texto">100 / 100</span> <!-- 🔢 Texto visible -->
            <div class="progreso">
              <div class="relleno" id="agua-barra">             
              </div>
                
            </div>
          </div>
        </div>
      </div>

      <!-- HUD lateral izquierdo en pagina (inventario, mapa y conocimiento) estilo.css -->
      <div id="rutas" class="hud-rutas">
        <button class="boton-hud" id="btn-inventario">Inventario</button>         
        <button class="boton-hud" id="btn-mapa">Mapa</button>
        <button class="boton-hud" id="btn-conocimiento">Conocimiento</button> 
      </div>
        
      <div id="ventana-resultado" class="estilo-ventana-resultado">
      </div>
  
      <!-- Ventana flotante de inventario -->
      <div id="ventana-inventario" class="ventana-oculta">
          <h2>INVENTARIO</h2>
          <div class="grid-inventario">

            <!-- 🔓 Primer slot desbloqueado -->
            <div class="item-inventario desbloqueado">
              <img src="iconos/tronco_madera.png" alt="tronco">
              <span class="item-cantidad">1</span>
            </div>

            <!-- 🔓 Segundo slot desbloqueado -->
            <div class="item-inventario desbloqueado">
              <img src="iconos/roca.png" alt="roca">
              <span class="item-cantidad">3</span>
            </div>

            <!-- 🔒 Slots bloqueados son 18 bloqueados -->
          
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>

            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>

            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
            
            <div class="item-inventario bloqueado">
              <img src="iconos/candado_pixel.png" alt="Bloqueado">
            </div>
          </div>
          <!-- Botón cerrar inventario -->
          <button id="cerrar-inventario" class="btn-cerrar-inv">✖ Cerrar</button>
      </div>

      <!-- Ventana flotante de mapa -->
      <div id="ventana-mapa">
          <h2>Mapa</h2>

          <!-- Zona 1: Hogar -->
          <div class="zona-mapa">
            <div class="zona-header">
              <h3>Hogar</h3>
              <button class="btn-ir" data-zona="zona-hogar">Ir al Hogar</button>
            </div>
          </div>

          <!-- Zona 2: Bosque -->
          <div class="zona-mapa">
            <div class="zona-header">
              <h3>Bosque</h3>
              <button class="btn-ir" data-zona="zona-bosque">Ir al Bosque</button>
            </div>
          </div>

          <button id="cerrar-mapa">Cerrar</button>

      </div>

      <!-- Ventana del área Bosque -->
      <div id="zona-bosque" class="ventana-oculta">
          <h2>Bosque</h2>

        <!-- 📦 Fondo + Sprite + Evento -->
        <div class="sprite-sobre-fondo">
          <!-- 🌄 Fondo del bosque -->
          <img src="imagenes/fondo-media-dia.png" alt="Mapa del Bosque" class="img-mapa">

          <!-- 🧍‍♂️ Personaje animado -->
          <div id="personaje-prueba">
          </div>

          <!-- 🗨️ Texto del evento -->
          <div id="ventana-evento" class="ventana-evento ventana-oculta">
            <p id="texto-evento">Comienza tu aventura</p>
          </div>
        </div>
        
        <!-- 🎮 Botones -->
        <div class="botones-bosque">
            <button class="boton-hud" id="btn-explorar-bosque">Explorar</button>
            <button class="btn-cerrar-zona" data-zona="zona-bosque">Cerrar</button>
        </div>
      </div>

      <!-- Ventana flotante de la zona Hogar -->
      <div id="zona-hogar" class="ventana-oculta">
        <h2>HOGAR</h2>

        <!-- Imagen decorativa  del hogar -->
        <div class="imagen-mapa">

            <!-- Imagen local que representa el hogar -->
            <img src="imagenes/fondo_bosque.png" alt="Imagen del hogar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
        
        </div>

        <!-- Texto de bienvenida dentro del hogar -->
        <div id="texto-hogar" class="texto-evento">
          Tu refugio es seguro. Aquí puedes descansar y planear tu próxima exploración.
        </div>

        <!-- Botones de acción, como cerrar la ventana -->
        <div class="botones-bosque">
            <button class="btn-cerrar-zona" data-zona="zona-hogar">Cerrar</button>
        </div>
      </div>

    </div>
       
    <!-- Enlace final al script principal del juego -->
    <script src="js/juego.js"></script>
    <script src="js/funciones.js"></script>

  </body>

</html>

