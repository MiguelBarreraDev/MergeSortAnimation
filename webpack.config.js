const path = require("path");
        
        module.exports = {
            entry: "./src/main.js", //Ruta del archivo de entrada, donde se importarán todos los demás archivos
            output: {
                filename: "bundle.js", //Nombre del archivo de salida, donde se va a contener todo el código del programa
                path: path.join(__dirname, "/") //Ruta o directorio donde se guardará el archivo bundle.js 
            },
            mode : "development"
        }