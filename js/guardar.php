<?php 
    include "connect.php";

    $bd_usuario = $_POST["bd_usuario"];
    $bd_correo = $_POST["bd_correo"];
    $bd_password = $_POST["bd_password"];
    $bd_password2 = $_POST["bd_password2"];
    $bd_genero = $_POST["bd_genero"];

    $sql_insert = "INSERT INTO usuarios (bd_usuario, bd_correo, bd_password, bd_genero) VALUES ('$bd_usuario','$bd_correo','$bd_password','$bd_genero')";

    if(mysqli_query($connect,$sql_insert) ){
        echo "GUARDADO";

    }else{
        echo "EXISTE UN ERROR DE CODIGO";
        header('location: ../login')
    }

    mysqli_close($connect);
    header('Location: ../juego.php');

?>