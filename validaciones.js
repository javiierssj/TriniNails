jQuery.validator.addMethod("nacimiento", function(value, element) {
    var fechaNacimiento = new Date(value);
    var fechaActual = new Date();
    return fechaNacimiento < fechaActual;
}, "La fecha de nacimiento debe ser menor que la fecha actual");

$("#frmRegistro").validate({
    debug: true,
    errorClass: "errorMessage",
    rules:{
        nombre:{
            required: true,
            minlength: 10
        },
        telefono: {
            required: true,
            minlength: 12
        },
        correo: {
            required: true,
            email: true
        },
        fechaNacimiento: {
            required: true,
            date: true,
            nacimiento: true
        },
        contrasena: {
            required: true
        },
        recontrasena: {
            equalTo: "#contrasena"
        }

    },
    messages: {
        nombre: {
            required: "El campo nombre no puede estar vacio.",
            minlength: jQuery.validator.format("El campo nombre debe tener como minimo {0} caracteres.")
        },
        telefono: {
            required: "El campo teléfono no puede estar vacio.",
            minlength: jQuery.validator.format("El campo teléfono debe tener un minimo de {0} caracteres."),
        }
    }
});

$(document).ready(function() {
    // Accede al formulario de inicio de sesión por su ID
    var loginForm = $('#login-form');
  
    // Accede al elemento del mensaje por su ID
    var messageDiv = $('#message');
  
    // Agrega la regla de validación personalizada para comprobar la longitud mínima
    $.validator.addMethod('minLength', function(value, element, minLength) {
      return value.length >= minLength;
    }, 'Please enter at least {0} characters.');
  
    // Agrega las reglas de validación para el formulario de inicio de sesión
    $("#frmLogin").validate({
      debug: true,
      errorClass: 'errorMessage',
      rules: {
        username: {
          required: true,
          minLength: 3
        },
        password: {
          required: true,
          minLength: 3
        }
      },
      messages: {
        username: {
          required: 'Por favor ingresa tu nombre de usuario.',
          minLength: jQuery.validator.format('El nombre de usuario debe tener al menos {0} caracteres.')
        },
        password: {
          required: 'Por favor ingrese su contraseña.',
          minLength: jQuery.validator.format('La contraseña debe tener al menos {0} caracteres.')
        }
      },
      // Maneja el evento submit del formulario
      submitHandler: function(form) {
        // Si la validación pasa, redirige al usuario a "index.html"
        window.location.replace("index.html");
      }
    });
  });
  
      $(document).ready(function() {
      $('#register-form').validate({
        rules: {
          username: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 8
          },
          confirm_password: {
            required: true,
            equalTo: '#password'
          }
        },
        messages: {
          username: {
            required: 'Por favor ingrese un nombre de usuario.',
            minlength: 'El nombre de usuario debe tener al menos 3 caracteres.'
          },
          email: {
            required: 'Por favor ingrese una dirección de correo electrónico válida.',
            email: 'Por favor ingrese una dirección de correo electrónico válida.'
          },
          password: {
            required: 'Por favor ingrese una contraseña.',
            minlength: 'La contraseña debe tener al menos 8 caracteres.'
          },
          confirm_password: {
            required: 'Por favor confirme su contraseña.',
            equalTo: 'Las contraseñas no coinciden.'
          }
        },
      });
    });
$(document).ready(function () {
      $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#nombre").val();/**/ 
        var correo = $("#correo").val();
        var mensaje = "";
    
        let entrar = false;
    
        if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
                /alert('El correo electrónico introducido no es correcto.');/
                mensaje += 'El correo no es valido. <br>';
                entrar=true;
            }
    
        /Validacion numeros /
            var corte1 = $("#clave").val();
            var contar_numeros = corte1.replace(/[^0-9]/g, "").length;
    
            if (contar_numeros == 0) {
                mensaje += 'Falta al menos un numero en la contraseña.<br>';
                entrar = true;
            }
            if (contar_numeros == clave.trim().length) {
                mensaje += 'La contraseña no debe ser solo numeros.<br>'
                entrar = true;
            }
            /Validacion mayuscula/
            var letraValidar = clave.charAt(0);
            if (!esMayuscula(letraValidar)) {
                mensaje += 'La primera letra de la clave debe ser mayuscula. <br>';
                entrar = true;
            }
            /Validacion espacios/
            var espacios = false;
            var cont = 0;
    
            while (!espacios && (cont < clave.length)) {
                if (clave.charAt(cont) == " ")
                    espacios = true;
                cont++;
            }
            if (espacios) {
                mensaje += 'La contraseña no debe contener espacios. <br>' ;
                
                espacios=false;
                entrar=true;
            }
        /Validacion Mayusculas/
    
            var letraValidar = nombre.charAt(0);
            if (!esMayuscula(letraValidar)) {
                mensaje += 'La primera letra de la nombre debe ser mayuscula. <br>';
                entrar = true;
            }

        /Validacion longitud/
    
        if (nombre.trim().length < 4 || nombre.trim().length > 12) {
                mensaje += 'El nombre no es valido, debe ser entre 4 y 12 caracteres.<br>';
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
    
    
    naci.max = new Date('2004-12-01').toISOString().split("T")[0];
  