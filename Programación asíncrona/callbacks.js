let request = require('request');

request('https://www.google.com.mx', function(){
    console.log("terminó el elace.");
});

for(let i = 1; i < 11; i++){
    console.log(i+".- Coninua ejecutando...");
}

/*un callback es una función que se pasa como argumento
a un método asíncrono, para que se ejecute cuando éste método
haya terminado de ejecutarse...

Mientras tanto, las tareas en el código fuera de esa función, 
se siguen ejecutando.
*/