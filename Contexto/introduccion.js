/* El valor del contexto es el objeto que manda a ejecutar 
   this en la función
*/

//console.log(this);//window es el contexto


let objeto01 = {
  fun : function(){
    console.log(this);
  }
};

objeto01.fun();//aquí el contexto ahora es el "objeto01" 

//el contexto se asigna en la ejecución
let segundoObjeto = {
  function: null, 
  ejecutor: function(f){
    this.fun = f;
    this.fun();
  }
}

segundoObjeto.ejecutor(objeto01.fun);

/*No podemos estar seguros de que this hace referencia
  al objeto donde estamos asignando, ya que todo depende
  de quién manda a llamar a la función
*/
