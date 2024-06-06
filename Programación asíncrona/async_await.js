/**
 * En el ejemplo, se retorna una promesa en la función timerDelay en un tiempo
 * random con el modificador await, para que cuando se termine de ejecutar el
 * contador, se asigne a result y se use posteriormente dentro de la función...
 */
async function timerDelay(){
    let result = await new Promise((resolve)=>setTimeout(resolve, 2852, "----- Ya terminé de ejecutar -----"));
    console.log(result);
}

/**
 * Para demostrar que se sigue ejecutando el programa principal, 
 * se hace un ciclo con instrucciones que tardan 1 segundo por
 * iteración del for, en lo que se está ejecutando, la promesa
 * ya debió terminar, por lo que se muestra aún y cuando
 * no ha terminado el ciclo.
 */
timerDelay();
for (let x = 1; x <= 10; x++) {
    setTimeout(() => {
        console.log(x+".- Procesando en paralelo...");
    }, 1000 * x); // Espera 1 segundo por cada iteración
}
