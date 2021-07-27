import manipulacionData from './data.js';
// import data from './data/lol/lol.js';
import info from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


document.getElementById("tiposPokemon").addEventListener("change",function(){
  recuperarSeleccionado();  
   });
   
   function recuperarSeleccionado(){
    const elementoSeleccionado= document.getElementById("tiposPokemon").value;
    const infoPokemon= info.pokemon;
  
    const pokeTipoSeleccionado = infoPokemon.filter(poke =>elementoSeleccionado==poke.type);
  
    const imgTipoSelect = pokeTipoSeleccionado.map(imagenes => imagenes.img);

    imgTipoSelect.forEach(imgSelect=> {
      const contenedorImg = document.getElementById("imagenes");
      const elementoImg= document.createElement("img"); 
      elementoImg.src=imgSelect;

      contenedorImg.appendChild(elementoImg);
    })
    
  
  
}
    
    
    /*var linew= document.createElement("img");    
        var contenido = document.attr("src", dataImg );
        sugerenciasImg.appendChild(linew);
        linew.appendChild(contenido);
            
        });
  
        const sugerenciasImg =document.getElementById("sugerencias");
        
        console.log(imgSelect*/  
  
  