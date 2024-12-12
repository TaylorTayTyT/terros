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

/***/ "./src/public/dist/Pieces.js":
/*!***********************************!*\
  !*** ./src/public/dist/Pieces.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n\nclass Piece {\n  constructor(color, location) {\n    this._color = color; // Use a different name for the internal variable (e.g., _color)\n    this._location = location;\n  }\n  // Getter for color\n  get color() {\n    return this._color; // Return the internal variable\n  }\n  // Setter for color (optional)\n  set color(newColor) {\n    this._color = newColor;\n  }\n  get location() {\n    return this._location;\n  }\n  set location(location) {\n    this._location = location;\n  }\n}\nclass Pawn extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return col == curr_c && curr_c + this._color.valueOf() == col;\n  }\n}\n;\nclass King extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return Math.abs(row - curr_r) == 1 && col - curr_c == 0 || Math.abs(col - curr_c) == 1 && row - curr_r == 0;\n  }\n}\n;\nclass Rook extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return row == curr_r && col != curr_c || row != curr_r && col == curr_c;\n  }\n}\n;\nclass Bishop extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return Math.abs(curr_r - row) == Math.abs(curr_c - col);\n  }\n}\nclass Queen extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return Math.abs(curr_r - row) == Math.abs(curr_c - col) || row == curr_r && col != curr_c || row != curr_r && col == curr_c;\n  }\n}\nclass Knight extends Piece {\n  constructor(color, location) {\n    super(color, location);\n  }\n  get color() {\n    return this._color;\n  }\n  valid_move(desired_location) {\n    const [row, col] = desired_location;\n    const [curr_r, curr_c] = this._location;\n    return Math.abs(curr_r - row) == 2 && Math.abs(curr_c - col) == 1 || Math.abs(curr_r - row) == 1 && Math.abs(curr_c - col) == 2;\n  }\n}\nclass chessBoard {\n  constructor() {\n    this._board = Array.from({\n      length: 8\n    }, () => Array(8).fill(0));\n    //this._board = new Array(8).fill().map(() => new Array(8).fill(0));\n    for (let i = 0; i < this._board.length; i++) {\n      for (let j = 0; j < this._board.length; j++) {\n        if (i == 1) {\n          this._board[i][j] = new Pawn(1, [i, j]);\n        }\n        if (i == 6) {\n          this._board[i][j] = new Pawn(-1, [i, j]);\n        }\n      }\n    }\n  }\n  piece(i, j) {\n    return this._board[i][j];\n  }\n}\nfunction assign(tile, i, j) {\n  if (i == 1 || i == 6) {\n    tile.innerText = \"p\";\n    if (i == 1) {\n      tile.style.color = \"white\";\n    } else {\n      tile.style.color = \"black\";\n    }\n  }\n  ;\n  //setup kings\n  if (i == 0 && j == 3) {\n    tile.innerText = \"k\";\n    tile.style.color = \"white\";\n  }\n  ;\n  if (i == 7 && j == 4) {\n    tile.innerText = \"k\";\n    tile.style.color = \"black\";\n  }\n  //setup queens\n  if (i == 0 && j == 4) {\n    tile.innerText = \"q\";\n    tile.style.color = \"white\";\n  }\n  if (i == 7 && j == 3) {\n    tile.innerText = \"q\";\n    tile.style.color = \"black\";\n  }\n  //setup rooks\n  if (i == 0 && j == 0) {\n    tile.innerText = \"r\";\n    tile.style.color = \"white\";\n  }\n  if (i == 0 && j == 7) {\n    tile.innerText = \"r\";\n    tile.style.color = \"white\";\n  }\n  if (i == 7 && j == 0) {\n    tile.innerText = \"r\";\n    tile.style.color = \"black\";\n  }\n  if (i == 7 && j == 7) {\n    tile.innerText = \"r\";\n    tile.style.color = \"black\";\n  }\n  //setup knights\n  if (i == 0 && j == 1) {\n    tile.innerText = \"h\";\n    tile.style.color = \"white\";\n  }\n  if (i == 0 && j == 6) {\n    tile.innerText = \"h\";\n    tile.style.color = \"white\";\n  }\n  ;\n  if (i == 7 && j == 1) {\n    tile.innerText = \"h\";\n    tile.style.color = \"black\";\n  }\n  if (i == 7 && j == 6) {\n    tile.innerText = \"h\";\n    tile.style.color = \"black\";\n  }\n  //setup bishops\n  if (i == 0 && j == 2) {\n    tile.innerText = \"b\";\n    tile.style.color = \"white\";\n  }\n  if (i == 0 && j == 5) {\n    tile.innerText = \"b\";\n    tile.style.color = \"white\";\n  }\n  if (i == 7 && j == 2) {\n    tile.innerText = \"b\";\n    tile.style.color = \"black\";\n  }\n  if (i == 7 && j == 5) {\n    tile.innerText = \"b\";\n    tile.style.color = \"black\";\n  }\n}\nmodule.exports = {\n  Piece,\n  Pawn,\n  King,\n  Rook,\n  Bishop,\n  Queen,\n  Knight,\n  chessBoard,\n  assign\n};\n\n//# sourceURL=webpack://terros/./src/public/dist/Pieces.js?");

/***/ }),

/***/ "./src/public/dist/index.js":
/*!**********************************!*\
  !*** ./src/public/dist/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst ChessPiece = __webpack_require__(/*! ./Pieces */ \"./src/public/dist/Pieces.js\");\nlet dragOrigin = null;\nlet dragEnd = null;\nlet currElem = null;\ndocument.addEventListener(\"mousedown\", e => {\n  if (!(e && e.target && e.target.id)) return false;\n  const tile = document.getElementById(e.target.id);\n  console.log(tile);\n  if (tile) {\n    dragOrigin = tile;\n  }\n  console.log(dragOrigin);\n});\ndocument.addEventListener(\"dragend\", e => {\n  console.log(e);\n  if (!(e && e.target && e.target.id)) return false;\n  const tile = document.getElementById(e.target.id);\n  if (tile) {\n    dragEnd = currElem;\n  }\n  ;\n  console.log(dragOrigin, dragEnd);\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const chessboard = document.getElementById(\"chessBoard\");\n  if (!chessboard) return;\n  for (let i = 0; i < 8; i++) {\n    for (let j = 0; j < 8; j++) {\n      const tile = document.createElement(\"div\");\n      tile.draggable = true;\n      tile.addEventListener(\"mouseenter\", e => {\n        if (!(e && e.target && e.target.id)) return;\n        dragEnd = document.getElementById(e.target.id);\n        console.log(dragEnd);\n      });\n      tile.id = `(${i}, ${j})`;\n      tile.classList.add(\"tile\");\n      chessboard.appendChild(tile);\n      //set up pawns\n      ChessPiece.assign(tile, i, j);\n    }\n  }\n  ;\n  document.querySelectorAll(\".tile\").forEach(element => {\n    if (element.textContent) {\n      element.classList.add(\"piece\");\n    }\n  });\n});\n\n//# sourceURL=webpack://terros/./src/public/dist/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/dist/index.js");
/******/ 	
/******/ })()
;