<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--<script defer src="./JS/formulario.js"></script>-->
    <title>Organizacion Etherea</title>

  </head>
  <body>
    <?php
      $servername = "localhost";
      $username = "admins";
      $password = "123456";
      $dbname = "usuarios_etherea";

      /*Haciendo la conexion a la base de datos */
      $conexion = mysqli_connect($servername, $username, $password, $dbname);
      if(!$conexion){
        die("Fallo la conexion: " .mysqli_connect_error());
      }

      /*haciendo el ingreso de datos  */
      $nombre = $_POST["nombre"];
      $apellidos = $_POST["apellidos"];
      $correo = $_POST["Correo"];
      $redes_soc = $_POST["redes_usuario"];
      $descripcion = $_POST["description"];
      #$nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);
      #$apellidos = mysqli_real_escape_string($conexion, $_POST["apellidos"]);
      #$correo = mysqli_real_escape_string($conexion, $_POST["Correo"]);
      #$redes_soc = mysqli_real_escape_string($conexion, $_POST["redes_usuario"]);
      #$descripcion = mysqli_real_escape_string($conexion, $_POST["description"]);
      
      /*Insertamos los valores a la base de datos */
      $sql = "INSERT INTO datosgenerales(Nombre, Apellidos, Correo, Redes_soc, Descripcion) VALUES ('$nombre', '$apellidos', '$correo', '$redes_soc', '$descripcion')";
      if(mysqli_query($conexion, $sql)){
        #echo "Datos agregados a la tabla ";
        header("Location: datos_acept.html");
      } else{
        echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
      }
      mysqli_close($conexion);
      
    ?>
      <!--<button><a href="./Inicio.html">Regresar al inicio</a></button>-->
  </body>
</html>
