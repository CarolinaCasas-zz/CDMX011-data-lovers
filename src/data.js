const datitos = {
  infoFiltrada: function (dataImportada,searchUser){
    return  dataImportada.filter(poke => poke.name == searchUser);
  },
   
  mapeandoData: function(dataFiltrada){
    return dataFiltrada.map(pokenombre => pokenombre.name);
  },

  pokeError(pokeData, searchUser) {
    if (searchUser != pokeData || searchUser == "") {
      return false
    }
  },

  pokeFiltroNameNum: function (dataFiltrada) {
    let resultadoNomNum = "";
    
    dataFiltrada.forEach(item => {
      resultadoNomNum = "Nombre: " + item.name + " N°" + item.num;

    });
    return resultadoNomNum
  },

  pokeFiltroImg: function (dataFiltrada) {
    let resultadoImg = "";
    dataFiltrada.forEach(item => {
      resultadoImg = item.img;
    });
    return resultadoImg
  },

  pokeFiltroType: function (dataFiltrada) {
    let resultadoType = "";
    dataFiltrada.forEach(item => {
      resultadoType = item.type;
    });
    return resultadoType
  },

  pokeFiltroResist: function (dataFiltrada) {
    let resultadoResist = "";
    dataFiltrada.forEach(item => {
      resultadoResist = item.resistant;
    });
    return resultadoResist
  },

  
  pokeFiltroDebil: function (dataFiltrada) {
    let resultadoDebil = "";
    dataFiltrada.forEach(item => {
      resultadoDebil = item.weaknesses;
    });
    return resultadoDebil
  },
//MENU DESPLEGABLE
  recuperarSeleccionado: function(dataImportada, elementoSeleccionado) {
  
    return dataImportada.filter(poke => poke.type[0] == elementoSeleccionado||poke.type[1] == elementoSeleccionado);
    
    }
};
   


export default datitos