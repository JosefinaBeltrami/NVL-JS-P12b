
function parimpar()
{
  let pares = [];
	let impares = [];
	let random =[];
  
  for (let i =0 ; i < 50; i++) 
    {
      let numero = Math.floor((Math.random() * 100) + 1);
           	
      if (numero %2 == 0) 
        {
        // valor par
          pares.push(numero);
          
         }
        else
        {
          // valor impar
          impares.push(numero);
          
         }
  	}
    
var resultado = [pares, impares];
return resultado

}

console.log(parimpar());
