<?php 
include "connect.php";
		session_start();
		if (!empty($_POST["btn-Log"])) {
			if (!empty($_POST["bd_usuario"]) and !empty($_POST["bd_password"]) ) {

				$bd_usuario = $_POST["bd_usuario"];
				$bd_password = $_POST["bd_password"];
				
				$sql_consulta = $connect->query("SELECT * FROM usuarios WHERE bd_usuario='$bd_usuario' AND bd_password='$bd_password' ");

				if ($datos=$sql_consulta->fetch_object()) {

					$_SESSION["id"]=$datos->id;
					$_SESSION["user"]=$datos->bd_usuario;

					header("location: ../juego.php");
				}else{
					echo "<div>LOS DATOS NO COINCIDEN</div>";
				}
				
			}else{
				echo "COMPLETE LOS CAMPOS";
			}
			
		}













































		/*session_start();
		$bd_usuario = $_POST['bd_usuario'];
		$bd_password = $_POST['bd_password'];

		include "connect.php";

		$sql_consulta = "SELECT * FROM usuarios WHERE bd_usuario ='$bd_usuario' AND bd_password= '$bd_password' ";

		$resultado =mysqli_query($connect,$sql_consulta);

		$filas = mysqli_fetch_array($resultado);

		//$sql_consulta=$connect->query("SELECT * FROM usuario WHERE bd_usuario='$bd_usuario' AND bd_password='$bd_password' ");

		if ($filas) {
			$_SESSION["id"]=$filas->id;
			$_SESSION["user"]=$filas->bd_usuario;
			header("location: ../juego.php");
		}else{
			echo"<div>USUARIO O CONTRASEÑA NO COINCIDEN</div>";
			header("location: ../login.php");
			
		}
		mysqli_free_result($resultado);
		mysqli_close($connect);






		/*$result = $connect->query($sql);
		if ($result->num_rows>0) {
			echo"2"+ $result;
			$user = $result->fetch_assoc();
			session_start();
			$_SESSION['admin'] = $user['bd_usuario'];
			header("Location: ../juego.php");
			exit();
		}else{
			echo"3"+ $result;
			header("Location: ../login.php");
		}*/
	
 ?>