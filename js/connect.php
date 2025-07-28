<?php 
	$servidor = "sql5.freesqldatabase.com";
	$usuario = "sql5791796";
	$clave = "zp3xvMrKdD";
	$baseDeDatos = "sql5791796";

	
	$connect = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

	if ($connect->connect_error) {
  		die("Conexión fallida: " . $connect->connect_error);
	}
	
//ESTE SEGMENTO SIRVE PARA CERRAR LA CONECCION
//mysqli_close($connect);
 ?>