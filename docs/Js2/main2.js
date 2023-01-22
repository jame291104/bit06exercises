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
        let edad = Number(document.getElementById("edad").value);
        edad >= 18 ? Swal.fire(
            '!Excelente!',
            'Eres mayor de edad, puedes pasar a la fiesta',
            'success'
          ) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo siento, eres menor de edad, no puedes pasar a la fiesta',
            footer: 'Espera a cumplir 18 años :)'
          });
      }


  //Ejercicio 3
  function elDoble() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = numero * 2;
    Swal.fire(
        'El doble de ' + numero , 'es ' + resultado,
        'success' 
      );
  } 

  //Ejercicio 4

 function elTriple() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let resultado1 = numero1 * 3;
  Swal.fire(
    'El triple de ' + numero1 , 'es ' + resultado1,
    'success' 
  );
 }

 //Ejercicio 5
 
 function laMitad(){
  let numero2 = parseInt(document.getElementById("numero2").value);
  let resultado2 = numero2 / 2;
  Swal.fire(
    'La mitad de ' + numero2 , 'es ' + resultado2,
    'success' 
  );
 }

 //Ejercicio 6

 function theThirdPart(){
  let numero3 = parseInt(document.getElementById("numero3").value);
  let resultado3 = numero3 / 3;
  Swal.fire(
    'La tercera parte ' + numero3 , 'es ' + resultado3,
    'success' 
  );
 }

 //Ejercicio 7

 function elevated(){
  let numero4 = parseInt(document.getElementById("numero4").value);
  let resultado4 = numero4 * numero4;
  Swal.fire(
    'El cuadrado de ' + numero4 , 'es ' + resultado4,
    'success' 
  );
 }
 //Ejercicio 8

 function subtract(){
  let numero5 = parseInt(document.getElementById("numero5").value);
  let resultado5 = numero5 - 5;
  Swal.fire(
    '' + numero5 , 'menos 5 es ' + resultado5,
    'success' 
  );
 }

  //Ejercicio 9
  function elDobleMas4() {
    let numero6 = parseInt(document.getElementById("numero6").value);
    let resultado6 = numero6 * 2 + 4;
    Swal.fire(
        'El doble de ' + numero6 , ' mas 4 es ' + resultado6,
        'success' 
      );
  } 

  //Ejercicio 10 
 // function ceroPositivoNegativo(){
   // let numero7 =
 // }
