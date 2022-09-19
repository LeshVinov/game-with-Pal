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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/background */ \"./src/modules/background.js\");\n/* harmony import */ var _modules_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/move */ \"./src/modules/move.js\");\n\r\n\r\n\r\n(0,_modules_background__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_move__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/index.js?");

/***/ }),

/***/ "./src/modules/background.js":
/*!***********************************!*\
  !*** ./src/modules/background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst background = () => {\r\n    const body = document.querySelector('body')\r\n    const gameSection = document.querySelector('.game')\r\n    const playerBlock = document.createElement('div')\r\n    playerBlock.classList.add('player-block')\r\n    console.log('1');\r\n\r\n\r\n    body.style.background = \"url(../dist/img/background.jpg) no-repeat center / cover\"\r\n    gameSection.style.position = \"relative\"\r\n    playerBlock.style.position = \"absolute\"\r\n    playerBlock.style.bottom = \"100px\"\r\n    playerBlock.style.left = \"50%\"\r\n    playerBlock.style.marginLeft = \"-75px\"\r\n    playerBlock.style.width = \"150px\"\r\n    playerBlock.style.height = \"450px\"\r\n    playerBlock.style.background = \"url(../dist/img/hero.png) no-repeat center / cover\"\r\n\r\n    gameSection.append(playerBlock)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (background);\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/modules/background.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({timing, draw, duration}) {\r\n\r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/move.js":
/*!*****************************!*\
  !*** ./src/modules/move.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst move = () => {\r\n    const playerBlock = document.querySelector('.player-block')\r\n    const escapeScreen = document.querySelector('.escape-screen')\r\n    let startBottom = 100\r\n    let startLeft = 50\r\n\r\n    console.dir(window);\r\n\r\n    const start = (e) => {\r\n        if (e.key === 'Escape') {\r\n            document.removeEventListener('keydown', start)\r\n            escapeScreen.style.display = \"none\"\r\n            document.addEventListener('keydown', movement)\r\n        }\r\n    }\r\n\r\n    const movement = (e) => {\r\n        if (e.key === \"ArrowUp\") {\r\n            if (startBottom < (window.innerHeight - 450)) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 100,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        playerBlock.style.bottom = startBottom + progress * 10 + 'px';\r\n                    }\r\n                });\r\n                startBottom = startBottom + 5\r\n            }\r\n\r\n            // playerBlock.style.bottom = `${startBottom}px`\r\n        } else if (e.key === \"ArrowDown\") {\r\n            if (startBottom) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 100,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        playerBlock.style.bottom = startBottom - progress * 10 + 'px';\r\n                    }\r\n                  });\r\n                startBottom = startBottom - 5\r\n            }\r\n            // playerBlock.style.bottom = `${startBottom}px`\r\n        } else if (e.key === \"ArrowLeft\") {\r\n            playerBlock.style.transform='scale(1,1)'\r\n            if (startLeft) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 100,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        playerBlock.style.left = startLeft - progress * 0.5 + '%';\r\n                    }\r\n                  });\r\n                startLeft = startLeft - 0.5\r\n            }\r\n            // playerBlock.style.left = `${startLeft}px`\r\n        } else if (e.key === \"ArrowRight\") {\r\n            playerBlock.style.transform='scale(-1,1)'\r\n            if (startLeft < 95.5) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 100,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        playerBlock.style.left = startLeft + progress * 0.5 + '%';\r\n                    }\r\n                  });\r\n                startLeft = startLeft + 0.5\r\n            }\r\n            // playerBlock.style.left = `${startLeft}px`\r\n        } if (e.key === \"Escape\") {\r\n            document.removeEventListener('keydown', movement)\r\n            escapeScreen.style.display = \"block\"\r\n            document.addEventListener('keydown', start)\r\n        } \r\n    }\r\n\r\n    document.addEventListener('keydown', movement)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/modules/move.js?");

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