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

/***/ "./services/pdfmake/pdfmake.js":
/*!*************************************!*\
  !*** ./services/pdfmake/pdfmake.js ***!
  \*************************************/
/*! namespace exports */
/*! export generate [provided] [maybe used in services/pdfmake/pdfmake (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in services/pdfmake/pdfmake (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => /* binding */ generate\n/* harmony export */ });\n/* harmony import */ var pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake */ \"pdfmake\");\n/* harmony import */ var pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ \"pdfmake/build/vfs_fonts\");\n/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @middy/do-not-wait-for-empty-event-loop */ \"@middy/do-not-wait-for-empty-event-loop\");\n/* harmony import */ var _middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import fontkit from 'fontkit'\n\nconst pdfTemplate = __webpack_require__(/*! ./template.json */ \"./services/pdfmake/template.json\")\nconsole.log(Object.keys((pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default().pdfMake.vfs)))\n\nconst generatePDF = async docDefinition => {\n\tconst fontDescriptors = {\n\t\tRoboto: {\n\t\t\tnormal: (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default().pdfMake.vfs[\"Roboto-Regular.ttf\"]),\n\t\t\tbold: (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default().pdfMake.vfs[\"Roboto-Medium.ttf\"]),\n\t\t\titalics: (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default().pdfMake.vfs[\"Roboto-Italic.ttf\"]),\n\t\t\tbolditalics: (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default().pdfMake.vfs[\"Roboto-MediumItalic.ttf\"]),\n\t\t},\n\t}\n\t// const printer = new pdfMakePrinter(fontDescriptors)\n\t// const doc = printer.createPdfKitDocument(docDefinition)\n\n\treturn new Promise(resolve => {\n\t\tconst printer = new (pdfmake__WEBPACK_IMPORTED_MODULE_0___default())(fontDescriptors)\n\t\tconst doc = printer.createPdfKitDocument(docDefinition)\n\t\tconst chunks = []\n\t\tdoc.end()\n\t\tdoc.on('data', chunks.push.bind(chunks))\n\t\tdoc.on('end', () => {\n\t\t\tconst pdfData = Buffer.concat(chunks)\n\t\t\tresolve(pdfData)\n\t\t})\n\t\t// doc.on('data', chunk => {\n\t\t// \tchunks.push(chunk)\n\t\t// })\n\t\t// doc.on('end', () => {\n\t\t// \tresolve(Buffer.concat(chunks))\n\t\t// })\n\t})\n}\n\nconst handler = async (context, req) => {\n\tconst voucher = JSON.parse(context.body)\n\t// const voucher = { \"vendorName\": \"Free Voucher\", \"vendorStreet\": \"123 South Street\", \"vendorZipCity\": \"19103\" }\n\tlet templateStr = JSON.stringify(pdfTemplate)\n\n\ttemplateStr = templateStr.replace('{vendor_name}', voucher.vendorName)\n\ttemplateStr = templateStr.replace('{vendor_street}', voucher.vendorStreet)\n\ttemplateStr = templateStr.replace('{vendor_zip_city}', voucher.vendorZipCity)\n\n\tconst stream = await generatePDF(JSON.parse(templateStr))\n\n\t// context.res = {\n\t// \tbody: stream,\n\t// }\n\treturn {\n\t\tstatusCode: 200,\n\t\tisBase64Encoded: true,\n\t\theaders: {\n\t\t\t'Content-type': 'application/pdf',\n\t\t},\n\t\tbody: stream.toString('base64'),\n\t}\n}\n\nconst generate = _middy_core__WEBPACK_IMPORTED_MODULE_2___default()(handler).use(_middy_do_not_wait_for_empty_event_loop__WEBPACK_IMPORTED_MODULE_3___default()())\n\n\n//# sourceURL=webpack://pdf-maker/./services/pdfmake/pdfmake.js?");

/***/ }),

/***/ "./services/pdfmake/template.json":
/*!****************************************!*\
  !*** ./services/pdfmake/template.json ***!
  \****************************************/
/*! default exports */
/*! export content [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export fontSize [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export fontSize [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export bold [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export fontSize [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export fontSize [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export fontSize [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! export pageOrientation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pageSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = JSON.parse(\"{\\\"pageSize\\\":\\\"A4\\\",\\\"pageOrientation\\\":\\\"portrait\\\",\\\"content\\\":[{\\\"text\\\":\\\"Gutschein\\\",\\\"fontSize\\\":27,\\\"color\\\":\\\"#707070\\\",\\\"margin\\\":[0,16],\\\"style\\\":\\\"page\\\"},{\\\"text\\\":\\\"einlösbar bei\\\",\\\"fontSize\\\":15,\\\"color\\\":\\\"#707070\\\",\\\"margin\\\":[0,32,0,4],\\\"style\\\":\\\"page\\\"},{\\\"text\\\":\\\"{vendor_name}\\\",\\\"fontSize\\\":15,\\\"bold\\\":true,\\\"style\\\":\\\"page\\\"},{\\\"text\\\":\\\"{vendor_street}\\\",\\\"fontSize\\\":15,\\\"style\\\":\\\"page\\\"},{\\\"text\\\":\\\"{vendor_zip_city}\\\",\\\"fontSize\\\":15,\\\"style\\\":\\\"page\\\"}]}\");\n\n//# sourceURL=webpack://pdf-maker/./services/pdfmake/template.json?");

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

/***/ "pdfmake":
/*!**************************!*\
  !*** external "pdfmake" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"pdfmake\");;\n\n//# sourceURL=webpack://pdf-maker/external_%22pdfmake%22?");

/***/ }),

/***/ "pdfmake/build/vfs_fonts":
/*!******************************************!*\
  !*** external "pdfmake/build/vfs_fonts" ***!
  \******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"pdfmake/build/vfs_fonts\");;\n\n//# sourceURL=webpack://pdf-maker/external_%22pdfmake/build/vfs_fonts%22?");

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
/******/ 	return __webpack_require__("./services/pdfmake/pdfmake.js");
/******/ })()
;