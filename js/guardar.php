 <?php 
    include('connect.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $bd_usuario = $_POST["bd_usuario"];
    $bd_correo = $_POST["bd_correo"];
    $bd_password = $_POST["bd_password"];
    $bd_genero = $_POST["bd_genero"];

    // Validar los datos (ejemplo)
    if (empty($bd_usuario) || empty ($bd_correo) || empty($bd_password) || empty($bd_genero) ) {
        echo "Por favor, complete todos los campos.";
    } else {
        echo"datos ok";
    }
}
 ?>