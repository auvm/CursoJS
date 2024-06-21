//identificador del simbolo = Symbol(Descripción del símbolo)
let simbolo = Symbol("mi_simbolo_de_prueba");

//un objeto genérico para el ejemplo
mi_objeto = {name: "Ángel"}

/**Esto es la definición del método único sobre
 * el objeto de ejemplo.
 */
mi_objeto[simbolo] = function(){
    console.log("Esto es la definición del método en particular.");
}
//así se ejecuta el método
mi_objeto[simbolo]();

/**
 * En general los símbolos sirven para tener métodos 
 * únicos que ni por una equivocación se podrían 
 * reemplazar por otra instrucción dentro de grandes
 * cantidades de código.
 * 
 * No obstante los casos de usos específicos de los símbolos
 * son muy particulares.
 */
