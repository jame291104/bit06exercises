'use strict';

// Programa que retorne el área de un cuadrado.

function calcularElAreaDelCuadrado(ladoDelCuadrado){ 
    let areaDelCuadrado = ladoDelCuadrado * ladoDelCuadrado;
    return(
        console.log(`El area de tu cuadrado es ${areaDelCuadrado}`)
    );
}
//calcularElAreaDelCuadrado(2);

// Programa que retorne el área de un triángulo equilatero.

function calcularElAreaDelTriangulo(baseDelTriangulo, alturaDelTriangulo){ 
    let areaDelTriangulo = (baseDelTriangulo * alturaDelTriangulo) /2;
    return areaDelTriangulo;
}
//console.log(calcularElAreaDelTriangulo(3,12));

// Programa que retorne el resultado de convertir grados Fahrenheit a Celsius.

function farToCel (fahrenheitGrade){
    let celcious = (fahrenheitGrade - 32) * (5/9);
    return celcious;
}
//console.log(farToCel(10))

//Programa que retorne el número de vocales que se encuentren en un string.

function vocalCount (wordFrase){
    const vocals = "aáeéiíoóuú";
    let longVocals = 0;
    
    for (const letter of wordFrase) {
        if (wordFrase.includes(vocals.toLowerCase())) {
            longVocals++;
        }
      }
    }

    //console.log(vocalCount("Hola a todos"));

    //Programa que retorne TRUE o FALSE si un string dado es palindromo.

    const palindromo = (word) => {
        const replaceWord = word.replaceAll(' ', '');
        let wordSepare = replaceWord.split("");
        let wordReverse = wordSepare.reverse();
        let wordUnify = wordReverse.join();

        return wordUnify === replaceWord;

    }
    //console.log(palindromo("reconocer"));

    //BMI (Indice de masa corporal)

    const calcBmi = (height, width) => {
        let bmi = width / (height*height);
        return bmi.toFixed(2);
    }

//console.log(calcBmi(1.72,64));
//console.log(calcBmi(1.70,72));

const wordComparission = (word) => {
    const wordMinNoSpace = word.toLowerCase().trim();


    if (wordMinNoSpace === "s" || wordMinNoSpace === "si") {
        return true
    } else if (wordMinNoSpace === "n" || wordMinNoSpace === "no") {
        return false
    } else {
        return null
    }
}

/*console.log(wordComparission("s"));
console.log(wordComparission("si"));
console.log(wordComparission("n"));
console.log(wordComparission("no"));
console.log(wordComparission("hola"));
console.log(wordComparission("Tengo Hambre"));
console.log(wordComparission("SI"));
console.log(wordComparission("S"));
console.log(wordComparission("NO"));
console.log(wordComparission("N"));
console.log(wordComparission("QUIERO DORMIR :)"));*/

//// Programa que retorne un string dado con la primer letra en mayúscula.

const wordUpperCamelCase = (word) => {
    let capitalLetterNoSpace = word.trim().toLowerCase();
    
    return capitalLetterNoSpace[0].toUpperCase() + capitalLetterNoSpace.slice(1);
}

//console.log(wordUpperCamelCase("hola"));
//console.log(wordUpperCamelCase("hola a todos"));
//console.log(wordUpperCamelCase("    hola a todos   "));
//console.log(wordUpperCamelCase("HOLA A TODOS"));

/* Programa que imprima los números de 1 a 100, si el número es multiplo de 3 en
lugar del número imprimir Fizz, si es multiplo de 5 en lugar del número imprimir
Buzz, si es multiplo de 3 y de 5 imprimir FizzBuzz en lugar del número. */

 const rangoDeNumeros = () => {
    for (let i = 1; i <= 100; i++) {
        

        if (i % 3 === 0 ) {
            console.log("Fizz");
            
        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);
        }
    }
 }
//console.log(rangoDeNumeros());

const numbersRange = () => {
    const newArray = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
            newArray.push("Fizz Buzz");
            
        } else if (i % 3 === 0 ) {
            newArray.push("Fizz");
            
        } else if (i % 5 === 0) {
            newArray.push("Buzz");

        } else {
            newArray.push(i);
        }
    } 

    return newArray.join(", ").concat(".");
 }
//console.log(numbersRange());

// Programa que retorne en un solo arreglo los elementos de 2 arreglos dados.

const unirArreglo = (arreglo1, arreglo2) => {
    let arregloUnido = arreglo1.concat(arreglo2);

    return arregloUnido;
}

//console.log(unirArreglo(["Buenos dias", 8, 6, 7],["A todas las personas", 1, 2, 3, 4]));

// Programa que retorne un arreglo de números desde 1 hasta un número dado.

const intervaloDeNumeros = (endNumber) =>{
    const arr = [];

    for (let i = 1; i <= endNumber; i++) {
       arr.push(i)
    } 

    return arr;
 }

//console.log(intervaloDeNumeros(5));
//console.log(intervaloDeNumeros(10));
//console.log(intervaloDeNumeros(200));

/* Programa que retorne el indice de un elemento dado en un arreglo dado, de
otra forma retorna FALSE. */

const arrayIncludes = (array, element) => {
       if ( array.includes(element)) return array.indexOf(element)
       else return false
       
}

//console.log(arrayIncludes([1,2,3,4,5,6,7,8],2));
//console.log(arrayIncludes([1,2,3,4,5,6,7,8],9));
//console.log(arrayIncludes([1,2,3,4,5,6,7,8,"Hola","Mundo"],"Mundo"));

/* Programa que dado un indice y un arreglo, retorne el elemento del arreglo
según el indice, de otra forma retornar FALSE. */

const arrayIncludesElement = (array2, indice) => {
    if ( array2.includes(indice)) return array2[indice]
    else return false
    
}

//console.log(arrayIncludesElement([1, 2, 3, 4, 5, 6], 1));
//console.log(arrayIncludesElement([1, 2, 3, 4, 5, 6], 5));
//console.log(arrayIncludesElement([1, 2, 3, 4, 5, 6], 0));
//console.log(arrayIncludesElement([1, 2, 3, 4, 5, 6], 20));
//console.log(arrayIncludesElement([1, 2, 3, 4, 5, 6], -1));

/* Programa que retorne TRUE si dos objetos dados tienen las mismas propiedades
y los mismos valores, de otra forma retornar FALSE. */

const arrayComparrission = (object1, object2) => {
       for (const p in object1) {
        if (object1[p] === object2[p]) continue;
        else return false;
        }
        return true;
       };
console.log(arrayComparrission({nombre: "Jesus", apellido: "Moran"}, {nombre: "Jesus", apellido: "Moran"}))
console.log(arrayComparrission({apellido: "Moran", nombre: "Jesus",}, {nombre: "Jesus", apellido: "Moran"}))