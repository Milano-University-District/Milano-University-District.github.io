/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n__webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack://mud-landing/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("window.onload = () => {\n\n\tdocument.getElementById(\"pivot-link\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec1\").style.display = \"flex\";\n\t};\n\tdocument.getElementById(\"btn-sec1-open\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec1\").style.display = \"flex\";\n\t};\n\tdocument.getElementById(\"btn-sec1-close\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec1\").style.display = \"none\";\n\t};\n\n\tdocument.getElementById(\"btn-sec2-open\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec2\").style.display = \"flex\";\n\t};\n\tdocument.getElementById(\"btn-sec2-close\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec2\").style.display = \"none\";\n\t};\n\n\tdocument.getElementById(\"btn-sec3-open\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec3\").style.display = \"flex\";\n\t};\n\tdocument.getElementById(\"btn-sec3-close\").onclick = (_) => {\n\t\tdocument.getElementById(\"modal-sec3\").style.display = \"none\";\n\t};\n\n\n\twindow.onclick = (event) => {\n\t\tif (event.target.classList.contains(\"sponsor-modal-inner\")) {\n\t\t\tevent.target.parentElement.style.display = \"none\";\n\t\t}\n\t};\n\tfor (let i = 1; i <= 12; i++) {\n\t\tdocument.getElementById(\"sponsor-logo-\"+i).onclick = (_) => {\n\t\t\tdocument.getElementById(\"sponsor-\"+i).style.display = \"flex\";\n\t\t};\n\t\tdocument.getElementById(\"btn-sponsor-close-\"+i).onclick = (_) => {\n\t\t\tdocument.getElementById(\"sponsor-\"+i).style.display = \"none\";\n\t\t};\n\t}\n\n\n};\n\n\n//# sourceURL=webpack://mud-landing/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mud-landing/./src/scss/main.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;