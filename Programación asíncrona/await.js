/**
 * Gracias a que await espera a que la promesa
 * sea cumplida, los objetos a los que se asignan
 * pueden ser utilizados dentro de la función
 * como objetos normales, sin importar que aún no estén
 * disponibles, pues serán usados hasta que lo estén.
 */

async function showGithubInfo(){
    let response = await fetch('http://api.github.users/auvm/repos');
    let repos = await response.json();
    console.log(repos);
}


showGithubInfo();
