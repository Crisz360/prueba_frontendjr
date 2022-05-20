const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);

// muestra los nombres de los pokemones mediante un bucle forEach en consola
// request.onload = function (){
//     const data = JSON.parse(this.response);
//     data.results.forEach((pokemon) => {
//         console.log(pokemon.name);
        
//     });
// }

request.onload = function (){
    
    const data = JSON.parse(this.response);
  
    const contenedor = document.getElementById('contenedor');
    contenedor.setAttribute('class', 'card-columns'); 

 

        data.results.forEach((pokemon) => {

            // Creación de las tarjetas
            const tarpokemon = document.createElement('div');
            tarpokemon.setAttribute('class', 'card');
               
            // Creación de cabecera y el cuerpo de la tarjeta
            const headerpokemon = document.createElement('div');
            headerpokemon.setAttribute('class', 'card-header');
       
            const bodypokemon = document.createElement('div');
            bodypokemon.setAttribute('class', 'card-body');
       
            // Creación del nombre del pokemon y el encabezado
            const namepoke = document.createElement('h5');
            namepoke.setAttribute('class', 'card-title');
            namepoke.textContent = pokemon.name;
       
            // Creación donde obtenie la url de los detalles de los pokemones
            pokemon.url = pokemon.url.substring(0, 250);
       
            const url = document.createElement('p');
            url.setAttribute('class', 'card-text');
            url.textContent = `${ pokemon.url }...`;
       
           // Se agrega la tarjeta
            contenedor.appendChild(tarpokemon);
       
            // Se agrega el cuerpo de la tarjeta y la cabecera.
            tarpokemon.appendChild(headerpokemon);
            tarpokemon.appendChild(bodypokemon);
       
            // Se agrega el titulo de la cabecera
            headerpokemon.appendChild(namepoke);
            
            // Se agrega la url de los pokemones
            bodypokemon.appendChild(url);
       
            console.log(pokemon.name);
            console.log(pokemon.url);  
          });
   
   
 } 
 
  


request.send();

