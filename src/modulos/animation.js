import { createSubArray } from "./createElement";
import { coordenadas } from "./coordenadas";
import { container, time } from "../main";

const sideMargin = 15,
    bottomMargin = 10;

/*------------------------------------------------------------ */
/* ANIMACIÓN DE LA DIVISIÓN
/*------------------------------------------------------------ */
function animationSort(array = [], dir = "", moveAside = Number, time = 500) {
    console.log(time)
    return new Promise(resolve => {
        array.animate({
            transform: [
                `translate(${dir}${moveAside}px, ${-$(array).height() - (moveAside)}px)`,
                `translate(0px, 0px)`
            ]
        }, time)
        setTimeout(() => {
            resolve();
        }, time);
    })
}

/*------------------------------------------------------------ */
/* ANIMACIÓN DE LA UNIÓN
/*------------------------------------------------------------ */
const animationMerge = (item, target, time = 500) => {
    //Creando una copia de ítem y posicionandolo sobre él 
    let element = document.createElement("div");
    element.classList.add("array_container");
    element.innerHTML = `<div class="array_element">
                         <p>${item.childNodes[0].textContent}</p>
                         </div>`;
    container.appendChild(element);
    $(element).offset($(item).offset());
    $(item).css("opacity", "0");

    //animacion
    return new Promise(resolve => {
        $(element).find(".array_element").css("backgroundColor", "#2f5");
        element.animate({
            transform: [
                `translate(0px, 0px)`,
                `translate(
                    ${$(target).offset().left - $(item).offset().left}px,
                    ${$(target).offset().top - $(item).offset().top}px
                )`
            ]
        }, time)

        setTimeout(() => {
            $(target).html($(item).html())
            $(element).css("opacity", "0")
            $(target).css("backgroundColor", "#2f5");
            resolve();
        }, time);
    });
}

/* --------------------FUNCION MERGE------------------------- */
export async function merge(half1, half2, target) {
    //definiendo iteradores
    let i1 = 0, i2 = 0, i3 = 0;
    let value1 = 0, value2 = 0;

    while (i1 < half1.childNodes.length && i2 < half2.childNodes.length) {
        value1 = parseFloat(half1.childNodes[i1].textContent);
        value2 = parseFloat(half2.childNodes[i2].textContent);
        if (value1 < value2) {
            await animationMerge(half1.childNodes[i1++], target.childNodes[i3++], time);

        } else {
            await animationMerge(half2.childNodes[i2++], target.childNodes[i3++], time);
        }
    }
    while (i1 < half1.childNodes.length) {
        await animationMerge(half1.childNodes[i1++], target.childNodes[i3++], time);
    }
    while (i2 < half2.childNodes.length) {
        await animationMerge(half2.childNodes[i2++], target.childNodes[i3++], time);
    }
    return;
}
/* --------------------------FIN----------------------- */

/* ------------------------FUNCIÓN SORT---------------------------- */

export async function sort(arr) {

    if (arr.childNodes.length <= 1) return;

    /* Creando las mitades del array de entrada */
    let middle = Math.floor(arr.childNodes.length / 2);
    let half1 = createSubArray(arr.childNodes, 0, middle);
    let half2 = createSubArray(arr.childNodes, middle, arr.childNodes.length);

    /*Posicion x e y del array en entrada*/
    let posArr = coordenadas(arr);

    /* agregando y posicionando el elmeno half1 */
    mainAnimation.appendChild(half1);
    half1.style.left = `${posArr.x - sideMargin}px`;
    half1.style.top = `${posArr.y + $(arr).height() + bottomMargin}px`;
    /* Mandamos a llamar a la función para su animación */
    await animationSort(half1, "+", bottomMargin, time);

    /* agregando y posicionando el elmeno half2 */
    mainAnimation.appendChild(half2);
    let widthHalf1 = half1.getBoundingClientRect().width
    half2.style.left = `${posArr.x + widthHalf1 + sideMargin}px`;
    half2.style.top = `${$(half1).offset().top}px`;
    /* Mandamos a llamar a la función para su animación */
    await animationSort(half2, "-", bottomMargin, time); // Whit keyword await we wait a promise

    //Aplicando la recursividad
    await sort(half1);
    await sort(half2);
    console.log("Hola :)");
    //Llamando a la función para mezclar
    await merge(half1, half2, arr);
    
}
/* -------------------------------FIN------------------------------ */
