<?php 
	include('js/connect.php');
	if (!$connect) {
 
  		echo "Error de conexión: " . mysqli_connect_error();
 
		} else {

		echo "Conexión exitosa a la base de datos.";

		}
 ?>

 <!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="estilo/estilo.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap" rel="stylesheet">
	<title>Red Rpg Evolution</title>
	
		<center>
		<form>
			<input type="text" id="bd_usuario" name="bd_usuario" placeholder="USUARIO"><br>
			<input type="text" id="bd_correo" name="bd_correo" placeholder="correo"><br>
			<input type="text" id="bd_password" name="bd_password" placeholder="CONTRASEÑA"><br>
			<input type="text" id="bd_password" name="bd_password" placeholder="CONFIRMAR CONTRASEÑA"><br>
			<input type="text" id="bd_genero" name="bd_genero" placeholder="GENERO"><br>
			<button type="submit" id="btn-guardar">GUARDAR</button>
		</form>
		</center>
</head>
<body>

</body>
</html> 