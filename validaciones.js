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
  
  