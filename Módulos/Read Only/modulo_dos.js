//aquí se exporta
let CONSTANTE_POR_DEFECTO = 2024;

/*pero en realidad se lleva el dato más reciente
 *ó con la última actualización/modificación
 */
CONSTANTE_POR_DEFECTO = 1984;


//esta es la instrucción para exportar un valor por defecto
export default CONSTANTE_POR_DEFECTO;


/**
 * Cómo todo lo importardo es Read Only, no es común exportar 
 * una variable (creada y asignada con let), pero funciona
 * y produce el efecto mostrado en el ejemplo.
 *  */