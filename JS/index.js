console.log('Hola Mundo');

// TIPOS DATOS JS

//String: cadena de caracteres. 'a', 'hola', "chanchito feliz"

//Boolean: true/false

//Null: nulo. Variable vacía, pero si esta definida

//Number: 123456

//Undefined: no se encuentra definido

//Object: objeto, estructura que nos permiten agrupar todos los tipos de datos


// COMO DEFINIR VARIABLES?

//var (no la vamos a usar)
//let
//const

let miPrimeraVariable= 'Mi primera variable!'
console.log(miPrimeraVariable);

miPrimeraVariable="Esto ha cambiado"
console.log(miPrimeraVariable)

//boleanos
let miBoolean=true
let miBoolean2=false

//numeros
let miNumero=0
let miNumero2=12
let miNumero3=-258

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

let Undef
console.log(Undef)

let nulo=null
console.log(nulo)

//objeto
//es una agrupación de datos. Estos datos hacen sentido entre si

//objeto vacio
const miPrimerObjeto={}

//objeto
const miObjeto={
    unNumero:12,
    unString:'Esta cadena de carácteres',
    unaCondicion: true,
}
console.log(miObjeto);
console.log(miObjeto.unNumero);

//Arreglo


const arrVacio=[]
const arr=[1,2,'hola','mundo']

console.log(arrVacio)
console.log(arr)

arr.push(5)
console.log(arr)
