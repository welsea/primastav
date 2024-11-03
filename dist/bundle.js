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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("function main() {\n    var table = document.getElementById(\"info\");\n    var runes = document.getElementById(\"runes\");\n    var timeoutID = setTimeout(function () {\n        showinfo();\n    }, 500);\n    function showinfo() {\n        var op = 1;\n        var intervalID = setInterval(function () {\n            if (op > 0.0) {\n                runes.style.opacity = op.toString();\n                op = Number((op - 0.1).toFixed(2));\n                console.log(op);\n            }\n            else {\n                clearInterval(intervalID);\n            }\n        }, 200);\n        var op2 = 0.0;\n        setTimeout(function () {\n            table.classList.remove(\"hide\");\n            table.style.opacity = \"0\";\n            var intervalID2 = setInterval(function () {\n                if (op2 <= 1.0) {\n                    table.style.opacity = op2.toString();\n                    op2 = op2 + 0.1;\n                }\n                else {\n                    clearInterval(intervalID2);\n                }\n            }, 200);\n        }, 1000);\n    }\n}\nmain();\n\n\n//# sourceURL=webpack://primstav/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;