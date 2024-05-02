//Type coercion

/*Para comparar, el interprete convierte 
uno de los datos a un tipo de dato en común,
de modo que se pueda realizar*/
console.log("10" == 10);


//Se recomienda convertir explicitamente al dato deseado
console.log(Number("10") == 10);
//ó
console.log("10" == String(10).toString());
