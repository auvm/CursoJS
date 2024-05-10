//shorthand properties and shorthand syntax

let nombre = "Uriel";

/*Ésta es la definición estándar de un objeto
  con propiedades y métodos
*/
let usuario0 = 
  {
    nombre: nombre,
    saludar: function(){console.log("saludos!");}
  };

console.log(usuario0.nombre);
usuario0.saludar();

nombre = "Ángel";
console.log("-----------------------------------")
/*La shorthand property, reduce la declaración del nombre
  de la propiedad, si la variable que se la va a asignar, 
  tiene el mismo nombre
*/
let usuario1 = 
{
    nombre, //property
    /*La reducción de la función, omite el nombre 
    function() y simplemente deja la función como tal
    */
    saludar(){console.log("Saludos otra vez!");}
}

console.log(usuario1.nombre);
usuario1.saludar();
