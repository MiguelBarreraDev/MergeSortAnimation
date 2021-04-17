export  const verificarEntrada = async (text) => {
    //--------Interpretando la entrada-----------------------------
    let array = text.trim().replace(/\s+/g,"").replace(/[A-Z]/ig,"").replace(/,+/g,",").replace(/\b0+/g,"");
    array = array.concat("del").replace(/,del|del/, "");
    array = "del".concat(array).replace(/del,|del/, "");
    console.log(array)
    //-------------------------------------------------------------
    
    //-----Comprobando si son números legales--------------
    let matriz = array.split(",");
    console.log(matriz)
    let check = true;
    await matriz.forEach((element) => {
        if(isNaN(element)) check = false;
    })
    //-----------------------------------------------------
    if(check == true ) return array;
    else return "error";
}
//,2,3,3 02, 5 , , 5,