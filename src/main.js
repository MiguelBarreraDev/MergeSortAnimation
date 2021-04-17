import { sort } from "./modulos/animation";
import { verificarEntrada } from "./modulos/settings";
export let container = document.querySelector(".main");
let time;
let startAnimation = false;
let endAnimation = false;


/* ----------------------------------------------------- */
/*  Animacion del menu
/* ----------------------------------------------------- */
const btnMenu = document.getElementById("btn-menu");
const contenidoMenu = document.getElementById("fondo-menu");
let showMenu = false;

btnMenu.addEventListener("click", () => {
    if (showMenu == false) {
        contenidoMenu.style.left = "0px"
        showMenu = true;
    } else {
        contenidoMenu.style.left = "-100%";
        showMenu = false;
    }
})
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        if (showMenu == false) {
            contenidoMenu.style.left = "0px"
            showMenu = true;
        } else {
            contenidoMenu.style.left = "-100%";
            showMenu = false;
        }
    }
})

/* -------------------------------------------------------------------- */
/*  Detectando el array y tiempo que se ingreso por teclado
/* --------------------------------------------------------------------- */
const insertArrayfirst = (array) => {
    let container = document.querySelector(".main");
    let element;
    let fragment = document.createElement("div");
    fragment.classList.add("array_container", "array_first")
    for (element of array) {
        fragment.innerHTML += `<div class="array_element"><p>${element}</p></div>`
    }
    container.appendChild(fragment);
    return fragment;
} //funcion para insertar el primer array de numeros en la página

const btnGuardar = document.getElementById("guardar");
let arrayDefault = "3, 17, 12, 5, -1";
let array = arrayDefault.split(",");
let guardarArray = array;
let fragment = insertArrayfirst(array); //Posicionando el array por default en la página

let errorMenu = document.getElementById("error-menu");

btnGuardar.addEventListener("click", async () => {
    errorMenu.style.display = "block";
    let arrayIngresado = document.getElementById("arr-ingresado").value;
    arrayIngresado = await verificarEntrada(arrayIngresado); //Interpretar y verificar si la entrada es correcta
    
    if (arrayIngresado === "error") {
        errorMenu.style.color = "#f00";
        errorMenu.innerHTML = `<i class="fas fa-exclamation"></i>     
                                Entrada incorrecta Puto`
    } else {
        if (endAnimation == true || (startAnimation == false && endAnimation == false)) {
            if (arrayIngresado != "") {
                container.innerHTML = "";
                fragment.innerHTML = ""; //Limpiando el contenido principal

                errorMenu.style.color = "#2f5";
                errorMenu.innerHTML = "Guardado"; //mensaje de confirmación al ingresar el array

                array = arrayIngresado.split(",");
                guardarArray = array;
                fragment = insertArrayfirst(array); //Posicionando el array ingresado por teclado en la página

                startAnimation = false;
                endAnimation = false;
            } else {
                errorMenu.style.color = "#f00";
                errorMenu.innerHTML = `<i class="fas fa-exclamation"></i>     
                                Complete el campo puto`; //mensaje de error al ingresar el array
            }
        }
        else {
            errorMenu.style.color = "#f00";
            errorMenu.innerHTML = `<i class="fas fa-exclamation"></i>     
                                En ejecución`
        }
    }

    setTimeout(() => {
        errorMenu.style.display = "none";
    }, 1000)

    //tiempo para animación ingresado por teclado
    time = document.getElementById("time-ingresado").value;
    if (time == "") time = undefined;
});

/* ----------------------------------------------------- */
/*  Controladores de la animación
/* ----------------------------------------------------- */
const btnSort = document.getElementById("sort");
const btnUnsort = document.getElementById("unsort");
const errorMain = document.getElementById("error-main");


btnSort.addEventListener("click", async () => {
    errorMain.style.display = "none";
    errorMain.style.color = "#0f0";

    if (startAnimation == false) {
        startAnimation = true;
        console.log(startAnimation);
        await sort(fragment);
        endAnimation = true;
    }
    else if (endAnimation == false) {
        errorMain.style.display = "block";
        errorMain.innerHTML = "En ejecución :)";
    }
    else {
        errorMain.style.display = "block";
        errorMain.innerHTML = "El array está ordenado :)";
    }

    setTimeout(() => {
        errorMain.style.display = "none";
    }, 1000);
    /* ------------------------------------------------------------ */
})

btnUnsort.addEventListener("click", () => {
    errorMain.style.display = "none";
    errorMain.style.display = "block";
    errorMain.style.color = "#f00";

    if (endAnimation == true || (startAnimation == false && endAnimation == false)) {
        container.innerHTML = "";
        fragment = insertArrayfirst(guardarArray);
        errorMain.innerHTML = "Está desordenado ><";
        startAnimation = false;
        endAnimation = false;
    }
    else if (startAnimation == true) {
        errorMain.innerHTML = "En ejecución :(";
    }

    setTimeout(() => {
        errorMain.style.display = "none";
    }, 1000);
}, false)

export { time };