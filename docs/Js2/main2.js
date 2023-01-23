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
  function ceroPositivoNegativo(){
    let numero7 = parseInt(document.getElementById("numero7").value);
    if (numero7 == 0) {
      Swal.fire(
        '' + numero7 , ' es cero',
        'success' 
      );
    } else if (numero7 < 0) {
      Swal.fire(
        '' + numero7 , ' es negativo ',
        'success' 
      );
    } else {
      Swal.fire(
        '' + numero7 , ' es positivo ',
        'success' 
      );
    }
  }

  //Ejercicio 11

  function ceroParImpar() {
    const numero8 = parseInt(document.getElementById("numero8").value);
    if (numero8 === 0) {
      Swal.fire(
        '' + numero8 , ' es cero ',
        'success' 
      );
    } else if (numero8 % 2 === 0) {
      Swal.fire(
        '' + numero8 , ' es par ',
        'success' 
      );
    } else {
      Swal.fire(
        '' + numero8 , ' es impar ',
        'success' 
      );
    }
  }

  //Ejercicio 12

  function esPrimo() {
    const numero9 = parseInt(document.getElementById("numero9").value);
    if (numero9 < 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar un numero mayor a 1'
      });
    }
    let contador = 0;
    for (let i = 1; i <= numero9; i++) {
      if (numero9 % i === 0) {
        contador++;
      }
    }
    if (contador === 2) {
      Swal.fire(
        '' + numero9 , ' es primo ',
        'success' 
      );
    } else {
      Swal.fire(
        '' + numero9 , ' no es primo ',
        'success' 
      );
    }
  }

  //Ejercicio 13
  function sumar(){
    let primerNumero = parseInt(document.getElementById("primer_numero").value);
    let segundoNumero = parseInt(document.getElementById("segundo_numero").value);
    let resultadoSuma = primerNumero + segundoNumero;
    Swal.fire(
      'El resultado de la suma es ' + resultadoSuma, '',
      'success' 
    );
  }

  //Ejercicio 14
  function restar(){
    let firstNumber = parseInt(document.getElementById("first_number").value);
    let secondNumber = parseInt(document.getElementById("second_number").value);
    let resultadoResta = firstNumber - secondNumber;
    Swal.fire(
      'El resultado de la resta es ' + resultadoResta, '',
      'success' 
    );
  }

   //Ejercicio 15
   function multiplica(){
    let multiplicando = parseInt(document.getElementById("multiplicando").value);
    let multiplicador = parseInt(document.getElementById("multiplicador").value);
    let multiplicacion = multiplicando * multiplicador;
    Swal.fire(
      'El resultado de la multiplicación es ' + multiplicacion, '',
      'success' 
    );
  }

  
   //Ejercicio 16
   function dividir(){
    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let divicion = dividendo / divisor;
    Swal.fire(
      'El resultado de la divición es ' + divicion, '',
      'success' 
    );
  }

  //Ejercicio 17
  function dividi2(){
    let dividendo2 = parseInt(document.getElementById("dividendo2").value);
    let divisor2 = parseInt(document.getElementById("divisor2").value);
    let divicion2 = dividendo2 % divisor2;
    Swal.fire(
      'El residuo de la divición es ' + divicion2, '',
      'success' 
    );
  }

  //Ejercicio 18
  function dividir3(){
    let dividendo3 = parseInt(document.getElementById("dividendo3").value);
    let divisor3 = parseInt(document.getElementById("divisor3").value);
    let divicion3 = dividendo3 % divisor3;

    if(divicion3 === 0) {
      Swal.fire(
        ' Si son divisibles entre sí ', '',
        'success' 
      );
    }else {
      Swal.fire({
        icon: 'error',
        title: 'No son divisibles entre sí',
      });
    }
  }