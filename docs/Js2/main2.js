//ejercicio 1
function saludar() {
    let nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ingresaste tu nombre :(',
            footer: 'Inténtalo de nuevo'
          });
    } else {
        Swal.fire({
            title: 'Hola ' + nombre,
            width: 600,
            padding: '3em',
            color: '#716add',
          })
    }
  }
  

  //Ejerecicio 2
  function edadDelUsuario() {
        let edad = Number(document.getElementById("edad"));
        edad >= 18 ? Swal.fire(
            '!Excelente!',
            'Ahora presiona CONTINUAR',
            'success'
          ) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los datos que ingresaste no son correctos!',
            footer: 'Inténtalo de nuevo'
          });
      }


  //Ejercicio 3
  function elDoble() {
    let numero = parseInt(document.getElementById("numero"));
    let resultado = numero * 2;
    Swal.fire(
        'El doble de' + numero , 'es' + resultado,
        'success'
      );
  }


  