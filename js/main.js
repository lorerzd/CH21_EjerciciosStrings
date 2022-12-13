//Ejercicios Strings

let nombre = "Abraham"
nombre = nombre.toUpperCase();
let letra ="";
let contFinal =0;

for (let index = 0; index< nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp=0;
    for (let cont = index+1; cont < nombre.length; cont++) {
        if (nombre.charAt(index) == nombre.charAt(cont)) 
        contTemp++
        
    }//for cont
    if (contTemp>contFinal) {
        contFinal=contTemp
        letra = nombre.charAt(index);
        
    }

} //for index

console.log(letra, contFinal);

//Entrada
"Laura Aline"
//Salida
"enilA aruaL"

function reves(str) {
    let tmpStr="";
    for (let indice = str.length-1; indice >=0; indice--) {
        tmpStr += str.charAt(indice);
        
    }
    return tmpStr;
}

//palindromo

function esPalindromo(str){
    str =str.toLowerCase();
    str = str.replaceAll(" ","");
    if (reves(str)==str)
    return true;

    return false;
}