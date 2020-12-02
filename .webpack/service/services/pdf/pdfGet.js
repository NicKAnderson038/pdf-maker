/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./services/pdf/pdfGet.js":
/*!********************************!*\
  !*** ./services/pdf/pdfGet.js ***!
  \********************************/
/*! namespace exports */
/*! export generate [provided] [maybe used in services/pdf/pdfGet (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in services/pdf/pdfGet (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => /* binding */ generate\n/* harmony export */ });\n/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfkit */ \"pdfkit\");\n/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middy/do-not-wait-for-empty-event-loop */ \"@middy/do-not-wait-for-empty-event-loop\");\n/* harmony import */ var _middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst generatePdf = async () => {\n\treturn new Promise((resolve, reject) => {\n\t\tconst doc = new (pdfkit__WEBPACK_IMPORTED_MODULE_0___default())()\n\t\tdoc.text(\"Test Data\")\n\t\tdoc.end()\n\t\tconst buffers = []\n\t\tdoc.on('data', buffers.push.bind(buffers))\n\t\tdoc.on('end', () => {\n\t\t\tconst pdfData = Buffer.concat(buffers)\n\t\t\tresolve(pdfData)\n\t\t})\n\t})\n}\nconst handler = async (context, event) => {\n\tconst stream = await generatePdf()\n\treturn {\n\t\tstatusCode: 200,\n\t\tisBase64Encoded: true,\n\t\theaders: {\n\t\t\t'Content-type': 'application/pdf',\n\t\t},\n\t\tbody: stream.toString('base64'),\n\t}\n}\n\nconst generate = _middy_core__WEBPACK_IMPORTED_MODULE_1___default()(handler).use(_middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_2___default()())\n\n\n//# sourceURL=webpack://pdf-maker/./services/pdf/pdfGet.js?");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@middy/core\");;\n\n//# sourceURL=webpack://pdf-maker/external_%22@middy/core%22?");

/***/ }),

/***/ "@middy/do-not-wait-for-empty-event-loop":
/*!**********************************************************!*\
  !*** external "@middy/do-not-wait-for-empty-event-loop" ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@middy/do-not-wait-for-empty-event-loop\");;\n\n//# sourceURL=webpack://pdf-maker/external_%22@middy/do-not-wait-for-empty-event-loop%22?");

/***/ }),

/***/ "pdfkit":
/*!*************************!*\
  !*** external "pdfkit" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"pdfkit\");;\n\n//# sourceURL=webpack://pdf-maker/external_%22pdfkit%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./services/pdf/pdfGet.js");
/******/ })()
;