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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)\n/* harmony export */ });\nfunction aboutLoad(div) {\r\n\r\n    const headline = document.createElement('h1');\r\n    headline.innerText = \"About Us\"\r\n\r\n    const about = document.createElement('p');\r\n    about.innerText = \"Serving customers for 20 years, we produce constant high quality food. Want to try? Contact us now at 0152 334 5089\"\r\n\r\n    div.appendChild(headline);\r\n    div.appendChild(about);\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst home = document.querySelector('#Home');\r\nconst menu = document.querySelector('#Menu');\r\nconst about = document.querySelector('#About');\r\n\r\nfunction switchPage(targetPage) {\r\n    const div = document.querySelector('#content');\r\n    div.innerHTML = \"\";\r\n    targetPage(div);\r\n}\r\n\r\nswitchPage(_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad);\r\n\r\nhome.addEventListener('click', () => {\r\n    switchPage(_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad);\r\n})\r\n\r\nmenu.addEventListener('click', () => {\r\n    switchPage(_menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad);\r\n}) \r\n\r\nabout.addEventListener('click', () => {\r\n    switchPage(_about__WEBPACK_IMPORTED_MODULE_2__.aboutLoad);\r\n})\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad(div) {\r\n\r\n    const headline = document.createElement('h1');\r\n    headline.innerText = \"Le Restaurant D'Tailles\"\r\n\r\n    const comment = document.createElement('p');\r\n    comment.innerText = \"So good it's perfect!\"\r\n\r\n    div.appendChild(headline);\r\n    div.appendChild(comment);\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad(div) {\r\n\r\n    const headline = document.createElement('h1');\r\n    headline.innerText = \"Menu\"\r\n\r\n    const list = document.createElement('ul');\r\n\r\n    const first = document.createElement('li');\r\n    first.innerText = \"Cheeseburger\"\r\n    list.appendChild(first);\r\n\r\n    const second = document.createElement('li');\r\n    second.innerText = \"Pepporoni Pizza\"\r\n    list.appendChild(second);\r\n\r\n    const third = document.createElement('li');\r\n    third.innerText = \"Chinese Food\"\r\n    list.appendChild(third);\r\n\r\n    const fourth = document.createElement('li');\r\n    fourth.innerText = \"Spaghetti\"\r\n    list.appendChild(fourth);\r\n\r\n    div.appendChild(headline);\r\n    div.appendChild(list);\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;