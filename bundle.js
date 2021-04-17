/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"time\": () => (/* binding */ time)\n/* harmony export */ });\n/* harmony import */ var _modulos_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/animation */ \"./src/modulos/animation.js\");\n/* harmony import */ var _modulos_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/settings */ \"./src/modulos/settings.js\");\n\r\n\r\nlet container = document.querySelector(\".main\");\r\nlet time;\r\nlet startAnimation = false;\r\nlet endAnimation = false;\r\n\r\n\r\n/* ----------------------------------------------------- */\r\n/*  Animacion del menu\r\n/* ----------------------------------------------------- */\r\nconst btnMenu = document.getElementById(\"btn-menu\");\r\nconst contenidoMenu = document.getElementById(\"fondo-menu\");\r\nlet showMenu = false;\r\n\r\nbtnMenu.addEventListener(\"click\", () => {\r\n    if (showMenu == false) {\r\n        contenidoMenu.style.left = \"0px\"\r\n        showMenu = true;\r\n    } else {\r\n        contenidoMenu.style.left = \"-100%\";\r\n        showMenu = false;\r\n    }\r\n})\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n    if (e.keyCode === 27) {\r\n        if (showMenu == false) {\r\n            contenidoMenu.style.left = \"0px\"\r\n            showMenu = true;\r\n        } else {\r\n            contenidoMenu.style.left = \"-100%\";\r\n            showMenu = false;\r\n        }\r\n    }\r\n})\r\n\r\n/* -------------------------------------------------------------------- */\r\n/*  Detectando el array y tiempo que se ingreso por teclado\r\n/* --------------------------------------------------------------------- */\r\nconst insertArrayfirst = (array) => {\r\n    let container = document.querySelector(\".main\");\r\n    let element;\r\n    let fragment = document.createElement(\"div\");\r\n    fragment.classList.add(\"array_container\", \"array_first\")\r\n    for (element of array) {\r\n        fragment.innerHTML += `<div class=\"array_element\"><p>${element}</p></div>`\r\n    }\r\n    container.appendChild(fragment);\r\n    return fragment;\r\n} //funcion para insertar el primer array de numeros en la página\r\n\r\nconst btnGuardar = document.getElementById(\"guardar\");\r\nlet arrayDefault = \"3, 17, 12, 5, -1\";\r\nlet array = arrayDefault.split(\",\");\r\nlet guardarArray = array;\r\nlet fragment = insertArrayfirst(array); //Posicionando el array por default en la página\r\n\r\nlet errorMenu = document.getElementById(\"error-menu\");\r\n\r\nbtnGuardar.addEventListener(\"click\", async () => {\r\n    errorMenu.style.display = \"block\";\r\n    let arrayIngresado = document.getElementById(\"arr-ingresado\").value;\r\n    arrayIngresado = await (0,_modulos_settings__WEBPACK_IMPORTED_MODULE_1__.verificarEntrada)(arrayIngresado); //Interpretar y verificar si la entrada es correcta\r\n    \r\n    if (arrayIngresado === \"error\") {\r\n        errorMenu.style.color = \"#f00\";\r\n        errorMenu.innerHTML = `<i class=\"fas fa-exclamation\"></i>     \r\n                                Entrada incorrecta Puto`\r\n    } else {\r\n        if (endAnimation == true || (startAnimation == false && endAnimation == false)) {\r\n            if (arrayIngresado != \"\") {\r\n                container.innerHTML = \"\";\r\n                fragment.innerHTML = \"\"; //Limpiando el contenido principal\r\n\r\n                errorMenu.style.color = \"#2f5\";\r\n                errorMenu.innerHTML = \"Guardado\"; //mensaje de confirmación al ingresar el array\r\n\r\n                array = arrayIngresado.split(\",\");\r\n                guardarArray = array;\r\n                fragment = insertArrayfirst(array); //Posicionando el array ingresado por teclado en la página\r\n\r\n                startAnimation = false;\r\n                endAnimation = false;\r\n            } else {\r\n                errorMenu.style.color = \"#f00\";\r\n                errorMenu.innerHTML = `<i class=\"fas fa-exclamation\"></i>     \r\n                                Complete el campo puto`; //mensaje de error al ingresar el array\r\n            }\r\n        }\r\n        else {\r\n            errorMenu.style.color = \"#f00\";\r\n            errorMenu.innerHTML = `<i class=\"fas fa-exclamation\"></i>     \r\n                                En ejecución`\r\n        }\r\n    }\r\n\r\n    setTimeout(() => {\r\n        errorMenu.style.display = \"none\";\r\n    }, 1000)\r\n\r\n    //tiempo para animación ingresado por teclado\r\n    time = document.getElementById(\"time-ingresado\").value;\r\n    if (time == \"\") time = undefined;\r\n});\r\n\r\n/* ----------------------------------------------------- */\r\n/*  Controladores de la animación\r\n/* ----------------------------------------------------- */\r\nconst btnSort = document.getElementById(\"sort\");\r\nconst btnUnsort = document.getElementById(\"unsort\");\r\nconst errorMain = document.getElementById(\"error-main\");\r\n\r\n\r\nbtnSort.addEventListener(\"click\", async () => {\r\n    errorMain.style.display = \"none\";\r\n    errorMain.style.color = \"#0f0\";\r\n\r\n    if (startAnimation == false) {\r\n        startAnimation = true;\r\n        console.log(startAnimation);\r\n        await (0,_modulos_animation__WEBPACK_IMPORTED_MODULE_0__.sort)(fragment);\r\n        endAnimation = true;\r\n    }\r\n    else if (endAnimation == false) {\r\n        errorMain.style.display = \"block\";\r\n        errorMain.innerHTML = \"En ejecución :)\";\r\n    }\r\n    else {\r\n        errorMain.style.display = \"block\";\r\n        errorMain.innerHTML = \"El array está ordenado :)\";\r\n    }\r\n\r\n    setTimeout(() => {\r\n        errorMain.style.display = \"none\";\r\n    }, 1000);\r\n    /* ------------------------------------------------------------ */\r\n})\r\n\r\nbtnUnsort.addEventListener(\"click\", () => {\r\n    errorMain.style.display = \"none\";\r\n    errorMain.style.display = \"block\";\r\n    errorMain.style.color = \"#f00\";\r\n\r\n    if (endAnimation == true || (startAnimation == false && endAnimation == false)) {\r\n        container.innerHTML = \"\";\r\n        fragment = insertArrayfirst(guardarArray);\r\n        errorMain.innerHTML = \"Está desordenado ><\";\r\n        startAnimation = false;\r\n        endAnimation = false;\r\n    }\r\n    else if (startAnimation == true) {\r\n        errorMain.innerHTML = \"En ejecución :(\";\r\n    }\r\n\r\n    setTimeout(() => {\r\n        errorMain.style.display = \"none\";\r\n    }, 1000);\r\n}, false)\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/modulos/animation.js":
/*!**********************************!*\
  !*** ./src/modulos/animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"merge\": () => (/* binding */ merge),\n/* harmony export */   \"sort\": () => (/* binding */ sort)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/modulos/createElement.js\");\n/* harmony import */ var _coordenadas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordenadas */ \"./src/modulos/coordenadas.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n\r\n\r\n\r\n\r\nconst sideMargin = 15,\r\n    bottomMargin = 10;\r\n\r\n/*------------------------------------------------------------ */\r\n/* ANIMACIÓN DE LA DIVISIÓN\r\n/*------------------------------------------------------------ */\r\nfunction animationSort(array = [], dir = \"\", moveAside = Number, time = 500) {\r\n    console.log(time)\r\n    return new Promise(resolve => {\r\n        array.animate({\r\n            transform: [\r\n                `translate(${dir}${moveAside}px, ${-$(array).height() - (moveAside)}px)`,\r\n                `translate(0px, 0px)`\r\n            ]\r\n        }, time)\r\n        setTimeout(() => {\r\n            resolve();\r\n        }, time);\r\n    })\r\n}\r\n\r\n/*------------------------------------------------------------ */\r\n/* ANIMACIÓN DE LA UNIÓN\r\n/*------------------------------------------------------------ */\r\nconst animationMerge = (item, target, time = 500) => {\r\n    //Creando una copia de ítem y posicionandolo sobre él \r\n    let element = document.createElement(\"div\");\r\n    element.classList.add(\"array_container\");\r\n    element.innerHTML = `<div class=\"array_element\">\r\n                         <p>${item.childNodes[0].textContent}</p>\r\n                         </div>`;\r\n    _main__WEBPACK_IMPORTED_MODULE_2__.container.appendChild(element);\r\n    $(element).offset($(item).offset());\r\n    $(item).css(\"opacity\", \"0\");\r\n\r\n    //animacion\r\n    return new Promise(resolve => {\r\n        $(element).find(\".array_element\").css(\"backgroundColor\", \"#2f5\");\r\n        element.animate({\r\n            transform: [\r\n                `translate(0px, 0px)`,\r\n                `translate(\r\n                    ${$(target).offset().left - $(item).offset().left}px,\r\n                    ${$(target).offset().top - $(item).offset().top}px\r\n                )`\r\n            ]\r\n        }, time)\r\n\r\n        setTimeout(() => {\r\n            $(target).html($(item).html())\r\n            $(element).css(\"opacity\", \"0\")\r\n            $(target).css(\"backgroundColor\", \"#2f5\");\r\n            resolve();\r\n        }, time);\r\n    });\r\n}\r\n\r\n/* --------------------FUNCION MERGE------------------------- */\r\nasync function merge(half1, half2, target) {\r\n    //definiendo iteradores\r\n    let i1 = 0, i2 = 0, i3 = 0;\r\n    let value1 = 0, value2 = 0;\r\n\r\n    while (i1 < half1.childNodes.length && i2 < half2.childNodes.length) {\r\n        value1 = parseFloat(half1.childNodes[i1].textContent);\r\n        value2 = parseFloat(half2.childNodes[i2].textContent);\r\n        if (value1 < value2) {\r\n            await animationMerge(half1.childNodes[i1++], target.childNodes[i3++], _main__WEBPACK_IMPORTED_MODULE_2__.time);\r\n\r\n        } else {\r\n            await animationMerge(half2.childNodes[i2++], target.childNodes[i3++], _main__WEBPACK_IMPORTED_MODULE_2__.time);\r\n        }\r\n    }\r\n    while (i1 < half1.childNodes.length) {\r\n        await animationMerge(half1.childNodes[i1++], target.childNodes[i3++], _main__WEBPACK_IMPORTED_MODULE_2__.time);\r\n    }\r\n    while (i2 < half2.childNodes.length) {\r\n        await animationMerge(half2.childNodes[i2++], target.childNodes[i3++], _main__WEBPACK_IMPORTED_MODULE_2__.time);\r\n    }\r\n    return;\r\n}\r\n/* --------------------------FIN----------------------- */\r\n\r\n/* ------------------------FUNCIÓN SORT---------------------------- */\r\n\r\nasync function sort(arr) {\r\n\r\n    if (arr.childNodes.length <= 1) return;\r\n\r\n    /* Creando las mitades del array de entrada */\r\n    let middle = Math.floor(arr.childNodes.length / 2);\r\n    let half1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createSubArray)(arr.childNodes, 0, middle);\r\n    let half2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createSubArray)(arr.childNodes, middle, arr.childNodes.length);\r\n\r\n    /*Posicion x e y del array en entrada*/\r\n    let posArr = (0,_coordenadas__WEBPACK_IMPORTED_MODULE_1__.coordenadas)(arr);\r\n\r\n    /* agregando y posicionando el elmeno half1 */\r\n    mainAnimation.appendChild(half1);\r\n    half1.style.left = `${posArr.x - sideMargin}px`;\r\n    half1.style.top = `${posArr.y + $(arr).height() + bottomMargin}px`;\r\n    /* Mandamos a llamar a la función para su animación */\r\n    await animationSort(half1, \"+\", bottomMargin, _main__WEBPACK_IMPORTED_MODULE_2__.time);\r\n\r\n    /* agregando y posicionando el elmeno half2 */\r\n    mainAnimation.appendChild(half2);\r\n    let widthHalf1 = half1.getBoundingClientRect().width\r\n    half2.style.left = `${posArr.x + widthHalf1 + sideMargin}px`;\r\n    half2.style.top = `${$(half1).offset().top}px`;\r\n    /* Mandamos a llamar a la función para su animación */\r\n    await animationSort(half2, \"-\", bottomMargin, _main__WEBPACK_IMPORTED_MODULE_2__.time); // Whit keyword await we wait a promise\r\n\r\n    //Aplicando la recursividad\r\n    await sort(half1);\r\n    await sort(half2);\r\n    console.log(\"Hola :)\");\r\n    //Llamando a la función para mezclar\r\n    await merge(half1, half2, arr);\r\n    \r\n}\r\n/* -------------------------------FIN------------------------------ */\r\n\n\n//# sourceURL=webpack:///./src/modulos/animation.js?");

/***/ }),

/***/ "./src/modulos/coordenadas.js":
/*!************************************!*\
  !*** ./src/modulos/coordenadas.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"coordenadas\": () => (/* binding */ coordenadas)\n/* harmony export */ });\nconst coordenadas = (element) => {\r\n    let x = element.getBoundingClientRect().left;\r\n    let y = element.getBoundingClientRect().top;\r\n    return {x, y};\r\n}\n\n//# sourceURL=webpack:///./src/modulos/coordenadas.js?");

/***/ }),

/***/ "./src/modulos/createElement.js":
/*!**************************************!*\
  !*** ./src/modulos/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSubArray\": () => (/* binding */ createSubArray)\n/* harmony export */ });\nconst createSubArray = (arr, start, end) => {\r\n    let fragment = document.createElement(\"div\");\r\n    fragment.classList.add(\"array_container\")\r\n    for(let i = start; i < end; i++) {\r\n        fragment.innerHTML += `<div class=\"array_element\"><p>${arr[i].textContent}</p></div>`\r\n    }\r\n    return fragment;\r\n}\n\n//# sourceURL=webpack:///./src/modulos/createElement.js?");

/***/ }),

/***/ "./src/modulos/settings.js":
/*!*********************************!*\
  !*** ./src/modulos/settings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verificarEntrada\": () => (/* binding */ verificarEntrada)\n/* harmony export */ });\nconst verificarEntrada = async (text) => {\r\n    //--------Interpretando la entrada-----------------------------\r\n    let array = text.trim().replace(/\\s+/g,\"\").replace(/[A-Z]/ig,\"\").replace(/,+/g,\",\").replace(/\\b0+/g,\"\");\r\n    array = array.concat(\"del\").replace(/,del|del/, \"\");\r\n    array = \"del\".concat(array).replace(/del,|del/, \"\");\r\n    console.log(array)\r\n    //-------------------------------------------------------------\r\n    \r\n    //-----Comprobando si son números legales--------------\r\n    let matriz = array.split(\",\");\r\n    console.log(matriz)\r\n    let check = true;\r\n    await matriz.forEach((element) => {\r\n        if(isNaN(element)) check = false;\r\n    })\r\n    //-----------------------------------------------------\r\n    if(check == true ) return array;\r\n    else return \"error\";\r\n}\r\n//,2,3,3 02, 5 , , 5,\n\n//# sourceURL=webpack:///./src/modulos/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;