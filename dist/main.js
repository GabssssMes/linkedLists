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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ \"./src/linkedList.js\");\n\n\nlet list = new _linkedList_js__WEBPACK_IMPORTED_MODULE_0__.linkedList();\nlet index = -1;\nlet find = \"mottale\";\nlist.prepend(\"jan\");\nlist.append(\"iv\");\nlist.prepend(\"mottale\");\nlist.append(\"gabs\");\nlist.printList();\nconsole.log(\"Listsize:\" + list.size());\nconsole.log(\"Head:\" + list.head());\nconsole.log(\"Tail:\" + list.tail());\nconsole.log(\"Index[\" + index + \"]:\" + list.at(index));\nconsole.log(\n  \"Find[\" +\n    find +\n    \"]:\" +\n    list.contains(find) +\n    \" at Position[\" +\n    list.find(find) +\n    \"]\"\n);\nconsole.log(list.toString());\n\n\n//# sourceURL=webpack://linked_lists/./src/index.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   linkedList: () => (/* binding */ linkedList)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n\n\nclass linkedList {\n  constructor() {\n    this.headNode = null;\n    this.length = 0;\n  }\n  printList() {\n    let item = this.headNode,\n      i = -1;\n    while (item != null) {\n      i++;\n      console.log(\n        \"Position:\" +\n          i +\n          \"; Value:\" +\n          item.value +\n          \"; nextNode:\" +\n          item.nextNode\n      );\n      item = item.nextNode;\n    }\n  }\n  append(value) {\n    if (this.headNode == null) this.headNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);\n    else {\n      let searchEnd = this.headNode;\n      while (searchEnd.nextNode != null) {\n        searchEnd = searchEnd.nextNode;\n      }\n      searchEnd.nextNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);\n    }\n  }\n  prepend(value) {\n    if (this.headNode == null) this.headNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);\n    else {\n      let oldFirstNode = this.headNode;\n      this.headNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value, oldFirstNode);\n    }\n  }\n  size() {\n    let item = this.headNode,\n      i = 0;\n    while (item != null) {\n      i++;\n      item = item.nextNode;\n    }\n    return i;\n  }\n  head() {\n    if (this.headNode != null) return this.headNode.value;\n    else return \"Empty List\";\n  }\n  tail() {\n    if (this.headNode == null) return \"Empty List\";\n    else {\n      let item = this.headNode;\n      while (item.nextNode != null) item = item.nextNode;\n      return item.value;\n    }\n  }\n  at(index) {\n    if (index < 0) return \"Index has to >0!\";\n    if (this.headNode == null) return \"Empty List\";\n    else {\n      let i = 0;\n      let item = this.headNode;\n      while (i < index) {\n        item = item.nextNode;\n        i++;\n        if (item == null) return \"No Item with Index [\" + index + \"]\";\n      }\n      return item.value;\n    }\n  }\n  pop() {\n    if (this.headNode == null) return;\n    else {\n      let lastItem = this.headNode;\n      let newLastItem;\n      if (lastItem.nextNode == null) {\n        this.headNode = null;\n        return;\n      }\n      while (lastItem.nextNode != null) {\n        newLastItem = lastItem;\n        lastItem = lastItem.nextNode;\n      }\n      newLastItem.nextNode = null;\n    }\n  }\n  contains(value) {\n    let item = this.headNode;\n    while (item != null) {\n      if (item.value == value) return true;\n      item = item.nextNode;\n    }\n    return false;\n  }\n  find(value) {\n    let item = this.headNode,\n      i = 0;\n    while (item != null) {\n      if (item.value == value) return i;\n      item = item.nextNode;\n      i++;\n    }\n    return null;\n  }\n  toString() {\n    let list = \"\";\n    let node = this.headNode;\n    while (node != null) {\n      list = list + node.value;\n      if (node.nextNode != null) {\n        list = list + \" -> \";\n        node = node.nextNode;\n      } else return list;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://linked_lists/./src/linkedList.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   node: () => (/* binding */ node)\n/* harmony export */ });\nclass node {\n  constructor(value = null, nextNode = null) {\n    this.value = value;\n    this.nextNode = nextNode;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://linked_lists/./src/node.js?");

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