$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    var nombre = $("#nombre").val();/**/
    var correo = $("#correo").val();
    var mensaje = "";
    let entrar = false;
    var telefono = $("#telefono").val();


    if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
            /alert('El correo electrónico introducido no es correcto.');/
            mensaje += 'El correo no es valido. <br>';
            entrar=true;
        }
        var letraValidar = nombre.charAt(0);
        if (!esMayuscula(letraValidar)) {
            mensaje += 'La primera letra de la nombre debe ser mayuscula. <br>';
            entrar = true;
        }

    if (nombre.trim().length < 4 || nombre.trim().length > 12) {
            mensaje += 'El nombre no es valido, debe ser entre 4 y 12 caracteres.<br>';
            entrar = true;
        }
        if (telefono.trim().length < 12 || telefono.trim().length > 12) {
          mensaje += 'El Telefono no es valido, deben ser 9 numeros (Además del +56).<br>';
          entrar = true;
      }

    if (entrar) {
            $("#warnings").html(mensaje);
        } else {
            $("#warnings").html("Aceptado");
        }
  });
  function esMayuscula(letra) {
        return letra === letra.toUpperCase();
    }
})




