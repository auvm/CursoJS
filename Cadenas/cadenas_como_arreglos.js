/**
 * Ejemplo de cómo puedo usar métodos aprendidos de los arreglos
 * en las cadenas. Las cadenas son como arreglos, a diferencia de 
 * que solo pueden almacenar caracteres.
 * 
 * .split(" ")//para separar una cadena cada que se encuentre con el delimitador especificado
 * 
 * .join(" ")//para unir cadenas cada que se encuentre con el delimitador especificado
 * 
 */
//cadena de ejemplo
let cadena = "Estoy aprendiendo JavaScript en CódigoFacilito";


//creo una función para filtrar la cadena recibida
function filtroMarcas(str){
    //defino las marcas a filtrar
    let marcas = ["CódigoFacilito"];

    /**
     * Uso map para generar un arrreglo resultante de cada modificación
     * definida adentro, en este caso, retornando las palabras siempre
     * y cuando no contengan las marcas definidas, sino se reemplazan por
     * "XXXX".
     */
    //primero parte la cadena en partes
    let palabrasFiltradas = str.split(" ").map( //luego las mapea
        palabla => {
            //reemplazando las marcas por "XXXX" o sin reemplazar nada
            return marcas.includes(palabla) ? "XXXX" : palabla;
            //luego se retorna y se van añadiendo en la variable en forma de
            //elementos de arreglos
        }
    );

    //retorna el arreglo de palabras separadas
    return palabrasFiltradas;
}

//retorna el arreglo de palabras separadas
console.log(filtroMarcas(cadena));


//tambien las puedo unir ese arreglo de vuelta con .join
console.log(filtroMarcas(cadena).join(" "));