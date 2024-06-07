//el valor a exportar se debe asignar previamente
const CONSTANTE_POR_DEFECTO = 2024;

/**
 * si requieres hacer otros export con ifentificador,
 * se pueden hacer sin ningún problema.
*/

export function saluda(nombre){
    console.log("Saludos "+nombre+"!");
}

//esta es la instrucción para exportar un valor por defecto
export default CONSTANTE_POR_DEFECTO;