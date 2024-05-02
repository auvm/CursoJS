/*
string
number
boolean
undefined
symbol
null
*/

let name = "Hola";

/*las variables son inmutables, cuando reasignamos
un valor, el interprete apunta a otro dato, pero 
el original sigue existiendo*/
name = 21;

/*Existen los datos tipo objeto:
String()
Number()
Boolean()
Symbol()

BigInt()
*/
//convierte al número 200 a objeto para acceder a su método toString()
console.log(Number(200).toString());
