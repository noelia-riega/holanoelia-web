<?php
$destino = "contacto@holanoelia.com";
$nombre  = $_POST["nombre"];
$email   = $_POST["email"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . ".\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
mail($destino,"Hablemos", $contenido)
header("Location:arigatitos.html");
?>