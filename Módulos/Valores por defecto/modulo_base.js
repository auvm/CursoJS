/**
 * Si solo estas importando un valor por defecto,
 * se puede hacer así, pero...
 */
//import CONSTANTE from "./modulo_dos.js";

/**
 * Si requieres hacer más imports del mismo
 * módulo, se puede separando por comas
 * el conjunto en llaves {} y el valor por 
 * defecto
 */
import CONSTANTE, {saluda} from "./modulo_dos.js";

console.log("Default: "+CONSTANTE);
saluda("Ángel");