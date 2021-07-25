import manipulacionData from './data.js';
// import data from './data/lol/lol.js';
import info from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*document.getElementById("tiposPokemon").addEventListener("change", function () {
  const elementoSeleccionado = document.getElementById("tiposPokemon").value;
  let listaPokeTipo = info.pokemon.filter(poke =>elementoSeleccionado===poke.type);
  
  
    console.log(listaPokeTipo);
}*/

document.getElementById("tiposPokemon").addEventListener("change",function(){
  recuperarSeleccionado();  
   });
   
 function recuperarSeleccionado(){
  const elementoSeleccionado= document.getElementById("tiposPokemon").value;
  const infoPokemon= info.pokemon;

  const listaPokeTipo = infoPokemon.filter(poke =>elementoSeleccionado==poke.type);


  console.log(listaPokeTipo);
}

