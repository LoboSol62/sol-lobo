//!Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let sumaTotal = 0; //acumulador (suma de los numeros ingresados)
let ingreso;  //guarda para analizar (cada numero)
do{
    ingreso= prompt("indique un numero"); 
    if (ingreso === null){
        break;
    } else if  (! isNaN(ingreso)){
    sumaTotal += parseInt(ingreso);

} else{
    alert("solo numeros, intenta de nuevo");
}
}
 while(true);
alert("la suma total de los numeros es:" + sumaTotal);
  

//!EJERCICIO1: Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// const texto = prompt ('introduce un texto');
// let resultado ="";
// for(let i=0; i < texto.length; i++){
//     resultado += texto.charAt(i);
//     if ( i !== texto.length -1){
//         resultado += "-";
//     }
// }
// console.log(resultado);

//!EJERCICIO2: Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”

// const texto= prompt('introduce su texto');
// const arraytexto= texto.split("");
// const resultado= arraytexto.reverse().join("");
// console.log(resultado);

