<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="estilo/estilo_beta.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap" rel="stylesheet">
	<script src="js/procesos.js"></script>
	<title>Red Rpg Evolution</title>
<body class="fondo_login">
	<center>

		<header class="barra-superior">
		    <div class="contenedor-barra">
		      <!-- Logotipo o nombre del sitio (opcional) -->
		      <div class="logo">RED RPG EVOLUTION</div>

		      <!-- Botón de iniciar sesión alineado a la derecha -->
		      <a style="text-decoration: none;" href="index.php" class="btn-login">🏠 INICIO</a>
		    </div>
		</header>

		<article class="ArticuloRegistro">
			<?php include "js/sesiones.php"; ?>
			<?php include "js/connect.php"; ?>
			<div id="cont_registro" class="cont_login">
				<form action="js/guardar.php" method="POST">
				<br>
					<label class="LabelReg">R E G I S T R O</label><br><br>
					<input class="box-reg" type="text" id="bd_usuario" name="bd_usuario" placeholder="USUARIO"><br><br>
					<input class="box-reg" type="text" id="bd_correo" name="bd_correo" placeholder="CORREO ELECTRONICO"><br><br>
					<input class="box-reg" type="password" id="bd_password" name="bd_password" placeholder="CONTRASEÑA"><br><br>
					<input class="box-reg" type="password" id="bd_password2" name="bd_password2" placeholder="RE-CONTRASEÑA"><br><br>
					<!--<input class="box-reg" type="text" id="bd_genero" name="bd_genero" placeholder="GENERO"><br><br> !-->
					<select name="bd_genero" id="bd_genero" class="box-reg" style="color: #CF9A32;">
					  <option value="HOMBRE">HOMBRE</option>
					  <option value="MUJER">MUJER</option>
					  <option value="PREFIERO NO DECIRLO">PREFIERO NO DECIRLO</option>
					</select><br><br>
					<input class="btn-reg" type="submit" name="btn-guardar" id="btn-guardar" value="REGISTRARME"><br><br>					
				</form>
				<button class="btn-reg" onclick="ocultarRegistro()">LOGIN</button>
			</div>

			<div id="cont_login" class="cont_login">
				<form action="js/sesiones.php" method="POST">
				<br>
					<label class="LabelReg">L O G I N</label><br><br>
					<input class="box-reg" type="text" id="bd_usuario" name="bd_usuario" placeholder="USUARIO"><br><br>
					<input class="box-reg" type="text" id="bd_password" name="bd_password" placeholder="CONTRASEÑA"><br><br>
					<input class="btn-reg" type="submit" name="btn-Log" id="btn-Log" value="👥 INICIAR SESION"><br><br>					
				</form>
				<button class="btn-reg" onclick="ocultarLogin()">🖋️ REGISTRARME</button>
			</div>

		</article>		
	</center>
</head>
</body>
</html>