function allpokedex (pokemon){
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokemon, true);
    
    request.onload = function (){
        
    
        const data = JSON.parse(this.response);
            // alert(data.id);
           

        const contenedor = document.getElementById('contenedor');
        contenedor.setAttribute('class', 'card-columns'); 
    
        while(contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    
        if (pokemon != ''){

            document.getElementById("tnamepoke").textContent=data.name;
            document.getElementById("imgpokemon").src=data.sprites.front_default;
                // Creación de las tarjetas
                const tarpokemon = document.createElement('div');
                tarpokemon.setAttribute('class', 'card');
                tarpokemon.setAttribute('onclick', 'document.getElementById("btnabrir").click()');  
                // Creación de cabecera y el cuerpo de la tarjeta
                const headerpokemon = document.createElement('div');
                headerpokemon.setAttribute('class', 'card-header');
           
                const bodypokemon = document.createElement('div');
                bodypokemon.setAttribute('class', 'card-body');
           
                // Creación del nombre del pokemon y el encabezado
                const namepoke = document.createElement('h5');
                namepoke.setAttribute('class', 'card-title');
                namepoke.textContent = data.name;
           
                // Creación donde obtenie la url de los detalles de los pokemones
                data.location_area_encounters = data.location_area_encounters.substring(0, 250);
           
                const location_area_encounters = document.createElement('p');
                location_area_encounters.setAttribute('class', 'card-text');
                location_area_encounters.textContent = `${ data.location_area_encounters }...`;
           
                // Se agrega la tarjeta
                contenedor.appendChild(tarpokemon);
           
                // Se agrega el cuerpo de la tarjeta y la cabecera.
                tarpokemon.appendChild(headerpokemon);
                tarpokemon.appendChild(bodypokemon);
           
                // Se agrega el titulo de la cabecera 
                headerpokemon.appendChild(namepoke);
                
                // Se agrega la url de los pokemones
                bodypokemon.appendChild(location_area_encounters);
           
               
    
        }else{
    
            data.results.forEach((pokemon) => {
    
                // Creación de las tarjetas.
                const tarpokemon = document.createElement('div');
                tarpokemon.setAttribute('class', 'card');
                   
                 // Creación de cabecera y el cuerpo de la tarjeta.
                const headerpokemon = document.createElement('div');
                headerpokemon.setAttribute('class', 'card-header');
           
                const bodypokemon = document.createElement('div');
                bodypokemon.setAttribute('class', 'card-body');
           
                // Creación del nombre del pokemon y el encabezado.
                const namepoke = document.createElement('h5');
                namepoke.setAttribute('class', 'card-title');
                namepoke.textContent = pokemon.name;
           
                // Creación donde obtenie la url de los detalles de los pokemones.
                pokemon.url = pokemon.url.substring(0, 250);
           
                const url = document.createElement('p');
                url.setAttribute('class', 'card-text');
                url.textContent = `${ pokemon.url }...`;
           
                // Se agrega la tarjeta.
                contenedor.appendChild(tarpokemon);
           
                // Se agrega el cuerpo de la tarjeta y la cabecera.
                tarpokemon.appendChild(headerpokemon);
                tarpokemon.appendChild(bodypokemon);
           
                // Se agrega el titulo de la cabecera 
                headerpokemon.appendChild(namepoke);
                
                // Se agrega la url de los pokemones
                bodypokemon.appendChild(url);
            
              });
    
        }
        
       
     } 
    request.send();
    }  
    
    
    allpokedex('');  
    
    // funcion de buscador
    
    function search (){
        var pokemon = document.getElementById("mysearch").value;
        allpokedex(pokemon);
        
    }

    function limpiarbuscador(){
        document.getElementById("mysearch").value='';
        allpokedex('');
    }
    
    
    
    
    