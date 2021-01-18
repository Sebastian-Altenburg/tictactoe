/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/gameLogic.js":
/*!******************************!*\
  !*** ./modules/gameLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// eslint-disable-next-line consistent-return
var gameLogic = function gameLogic(gameBoard, scoreX, scoreO) {
  var restartDiv = document.querySelector(".restartDiv");
  var restartButton = document.querySelector(".restartButton");

  if (gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X" || gameBoard[1][0] === "X" && gameBoard[1][1] === "X" && gameBoard[1][2] === "X" || gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X" || gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X" || gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] === "X" || gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X" || gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] === "X" || gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] === "X") {
    // eslint-disable-next-line no-param-reassign
    scoreX += 1;

    if (scoreX === 3) {
      restartDiv.classList.remove("hide");
      restartDiv.classList.add("showDiv");
      restartButton.innerHTML = "Player X Wins! <br> <span>Restart Game</span>";
    } else {
      return [scoreX, "X", false];
    }
  } else if (gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O" || gameBoard[1][0] === "O" && gameBoard[1][1] === "O" && gameBoard[1][2] === "O" || gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O" || gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O" || gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O" || gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O" || gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O" || gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O") {
    // eslint-disable-next-line no-param-reassign
    scoreO += 1;

    if (scoreO === 3) {
      // myCanvas.classList.add("hide");
      restartDiv.classList.remove("hide");
      restartDiv.classList.add("showDiv");
      restartButton.innerHTML = "Player O Wins! <br>  <span>Restart Game</span>";
    } else {
      return [scoreO, "O", false];
    }
  } // eslint-disable-next-line no-use-before-define
  else if (allMarkersSet(gameBoard)) {
      return ["", "", true];
    }
};

function allMarkersSet(gameBoard) {
  for (var i = 0; i < 3; i += 1) {
    for (var j = 0; j < 3; j += 1) {
      if (gameBoard[i][j] === "") {
        return false;
      }
    }
  }

  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLogic);

/***/ }),

/***/ "./modules/setupGrid.js":
/*!******************************!*\
  !*** ./modules/setupGrid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var setupGrid = function () {
  var myCanvas = document.querySelector("canvas");
  var ctx = myCanvas.getContext("2d");
  var width = myCanvas.width,
      height = myCanvas.height;

  for (var i = 0; i < 4; i += 1) {
    ctx.beginPath();

    if (i === 0) {
      ctx.moveTo(width / 3, 0);
      ctx.lineTo(width / 3, height);
    }

    if (i === 1) {
      ctx.moveTo(width * 2 / 3, 0);
      ctx.lineTo(width * 2 / 3, height);
    }

    if (i === 2) {
      ctx.moveTo(0, height / 3);
      ctx.lineTo(width, height / 3);
    }

    if (i === 3) {
      ctx.moveTo(0, height * 2 / 3);
      ctx.lineTo(width, height * 2 / 3);
    }

    ctx.lineWidth = 6;
    ctx.stroke();
  }

  var draw = function draw() {
    for (var _i = 0; _i < 4; _i += 1) {
      ctx.beginPath();

      if (_i === 0) {
        ctx.moveTo(width / 3, 0);
        ctx.lineTo(width / 3, height);
      }

      if (_i === 1) {
        ctx.moveTo(width * 2 / 3, 0);
        ctx.lineTo(width * 2 / 3, height);
      }

      if (_i === 2) {
        ctx.moveTo(0, height / 3);
        ctx.lineTo(width, height / 3);
      }

      if (_i === 3) {
        ctx.moveTo(0, height * 2 / 3);
        ctx.lineTo(width, height * 2 / 3);
      }

      ctx.lineWidth = 6;
      ctx.stroke();
    }
  };

  return {
    draw: draw
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupGrid);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_setupGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/setupGrid */ "./modules/setupGrid.js");
/* harmony import */ var _modules_gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/gameLogic */ "./modules/gameLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 /// all variables I used to put global are tugged into this "revealing module pattern"

var setup = function () {
  var _restartButton = document.querySelector(".restartButton");

  _restartButton.addEventListener("click", function () {
    window.location.reload();
  });

  var scoreX = document.querySelector(".scoreX");
  var scoreO = document.querySelector(".scoreO");
  var myCanvas = document.querySelector("canvas");
  var ctx = myCanvas.getContext("2d");
  ctx.font = "120px Arial";
  var gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
  return {
    ctx: ctx,
    myCanvas: myCanvas,
    gameBoard: gameBoard,
    scoreX: scoreX,
    scoreO: scoreO
  };
}(); /// //////// Players


var players = function players(score, turn) {
  var setMarker = function setMarker(marker) {
    var _setup$myCanvas = setup.myCanvas,
        width = _setup$myCanvas.width,
        height = _setup$myCanvas.height;

    for (var i = 0; i < 3; i += 1) {
      for (var j = 0; j < 3; j += 1) {
        if (setup.gameBoard[i][j] === marker) {
          var v = void 0;
          var w = void 0;
          if (i === 0) v = 1 / 6;else if (i === 1) v = 1 / 2;else if (i === 2) v = 5 / 6;
          if (j === 0) w = 1 / 6;else if (j === 1) w = 1 / 2;else if (j === 2) w = 5 / 6;
          setup.ctx.fillText(marker, width * w, height * v);
        }
      }
    }
  };

  return {
    turn: turn,
    score: score,
    setMarker: setMarker
  };
};

var playerX = players(0, true);
var playerO = players(0, false); /// /////////////////////

function swapTurns() {
  if (playerX.turn === true) {
    playerX.turn = false;
  } else if (playerX.turn === false) {
    playerX.turn = true;
  }
} /// ////////////////////


function clearBoard() {
  for (var i = 0; i < 3; i += 1) {
    for (var j = 0; j < 3; j += 1) {
      setup.gameBoard[j][i] = "";
    }
  }

  setup.ctx.clearRect(0, 0, 1000, 1000);
  _modules_setupGrid__WEBPACK_IMPORTED_MODULE_0__.default.draw();
} /// ///////////////////


var handleSequence = function handleSequence(letter) {
  if (letter === "X") {
    playerX.setMarker("X");
  } else if (letter === "O") {
    playerO.setMarker("O");
  }

  swapTurns();

  var _gameLogic = (0,_modules_gameLogic__WEBPACK_IMPORTED_MODULE_1__.default)(setup.gameBoard, playerX.score, playerO.score),
      _gameLogic2 = _slicedToArray(_gameLogic, 3),
      score = _gameLogic2[0],
      XorO = _gameLogic2[1],
      tied = _gameLogic2[2];

  if (XorO === "X") {
    clearBoard();
    playerX.score = score;
  } else if (XorO === "O") {
    clearBoard();
    playerO.score = score;
  } else if (tied === true) {
    alert("TIED");
    clearBoard();
  }
}; /// /////
/// ///////// Canvas clickEvent


setup.myCanvas.addEventListener("click", function (e) {
  var rect = setup.myCanvas.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var _setup$myCanvas2 = setup.myCanvas,
      width = _setup$myCanvas2.width,
      height = _setup$myCanvas2.height;

  if (playerX.turn === true) {
    /// First Row
    if (x < width / 3 && y < height / 3 && setup.gameBoard[0][0] === "") {
      setup.gameBoard[0][0] = "X";
      handleSequence("X");
    }

    if (x > width / 3 && x < width * 2 / 3 && y < height / 3 && setup.gameBoard[0][1] === "") {
      setup.gameBoard[0][1] = "X";
      handleSequence("X");
    }

    if (x > width * 2 / 3 && y < height / 3 && setup.gameBoard[0][2] === "") {
      setup.gameBoard[0][2] = "X";
      handleSequence("X");
    } /// Second Row


    if (x < width / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][0] === "") {
      setup.gameBoard[1][0] = "X";
      handleSequence("X");
    }

    if (x > width / 3 && x < width * 2 / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][1] === "") {
      setup.gameBoard[1][1] = "X";
      handleSequence("X");
    }

    if (x > width * 2 / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][2] === "") {
      setup.gameBoard[1][2] = "X";
      handleSequence("X");
    } /// Third Row


    if (x < width / 3 && y > height * 2 / 3 && setup.gameBoard[2][0] === "") {
      setup.gameBoard[2][0] = "X";
      handleSequence("X");
    }

    if (x > width * 1 / 3 && x < width * 2 / 3 && y > height * 2 / 3 && setup.gameBoard[2][1] === "") {
      setup.gameBoard[2][1] = "X";
      handleSequence("X");
    }

    if (x > width * 2 / 3 && y > height * 2 / 3 && setup.gameBoard[2][2] === "") {
      setup.gameBoard[2][2] = "X";
      handleSequence("X");
    }
  } else if (playerX.turn === false) {
    /// First Row
    if (x < width / 3 && y < height / 3 && setup.gameBoard[0][0] === "") {
      setup.gameBoard[0][0] = "O";
      handleSequence("O");
    }

    if (x > width / 3 && x < width * 2 / 3 && y < height / 3 && setup.gameBoard[0][1] === "") {
      setup.gameBoard[0][1] = "O";
      handleSequence("O");
    }

    if (x > width * 2 / 3 && y < height / 3 && setup.gameBoard[0][2] === "") {
      setup.gameBoard[0][2] = "O";
      handleSequence("O");
    } /// Second Row


    if (x < width / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][0] === "") {
      setup.gameBoard[1][0] = "O";
      handleSequence("O");
    }

    if (x > width / 3 && x < width * 2 / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][1] === "") {
      setup.gameBoard[1][1] = "O";
      handleSequence("O");
    }

    if (x > width * 2 / 3 && y > height / 3 && y < height * 2 / 3 && setup.gameBoard[1][2] === "") {
      setup.gameBoard[1][2] = "O";
      handleSequence("O");
    } /// Third Row


    if (x < width / 3 && y > height * 2 / 3 && setup.gameBoard[2][0] === "") {
      setup.gameBoard[2][0] = "O";
      handleSequence("O");
    }

    if (x > width * 1 / 3 && x < width * 2 / 3 && y > height * 2 / 3 && setup.gameBoard[2][1] === "") {
      setup.gameBoard[2][1] = "O";
      handleSequence("O");
    }

    if (x > width * 2 / 3 && y > height * 2 / 3 && setup.gameBoard[2][2] === "") {
      setup.gameBoard[2][2] = "O";
      handleSequence("O");
    }
  }
}, false);

function update() {
  setup.scoreX.innerHTML = playerX.score;
  setup.scoreO.innerHTML = playerO.score;
  window.requestAnimationFrame(update);
}

update();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n    height: 100%;\n    background: linear-gradient(180deg, #e6cfdd 50%, #fff);\n    margin: 0;\n}\ncanvas {\n    background-color: #aacc8f;\n    border: 1px solid rgb(53, 53, 53);\n    border-radius: 15px;\n    margin-bottom: 8px;\n}\n.container {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n\n    width: 600px;\n    height: 100vh;\n}\n.score-wrapper {\n    margin: 10px;\n}\n.score-wrapper h3 {\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-bottom: 5px;\n    font-size: 1.5em;\n}\n.div-x {\n    background-color: #5e877c;\n    text-align: center;\n    height: 70px;\n    border-radius: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(53, 53, 53);\n}\n.div-o {\n    background-color: #cca08f;\n    text-align: center;\n    height: 70px;\n    border-radius: 15px;\n    border: 1px solid rgb(53, 53, 53);\n}\n.scoreX,\n.scoreO {\n    font-size: 1.8em;\n    font-weight: 600;\n    margin: 0;\n}\n\n.restartDiv {\n    width: 100%;\n}\n.restartButton {\n    display: block;\n    height: 70px;\n    width: 100%;\n    margin: 0 auto;\n    font-size: 1.2em;\n    font-weight: 600;\n    background-color: #cfe6df;\n    box-shadow: 5px 5px 10px #888888;\n    border: 1px solid rgb(53, 53, 53);\n    border-radius: 15px;\n}\n\n.restartButton span {\n    font-size: 1.5em;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,sDAAsD;IACtD,SAAS;AACb;AACA;IACI,yBAAyB;IACzB,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,2BAA2B;;IAE3B,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,iCAAiC;AACrC;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,iCAAiC;AACrC;AACA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,WAAW;AACf;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,gCAAgC;IAChC,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["html,\nbody {\n    height: 100%;\n    background: linear-gradient(180deg, #e6cfdd 50%, #fff);\n    margin: 0;\n}\ncanvas {\n    background-color: #aacc8f;\n    border: 1px solid rgb(53, 53, 53);\n    border-radius: 15px;\n    margin-bottom: 8px;\n}\n.container {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n\n    width: 600px;\n    height: 100vh;\n}\n.score-wrapper {\n    margin: 10px;\n}\n.score-wrapper h3 {\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-bottom: 5px;\n    font-size: 1.5em;\n}\n.div-x {\n    background-color: #5e877c;\n    text-align: center;\n    height: 70px;\n    border-radius: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(53, 53, 53);\n}\n.div-o {\n    background-color: #cca08f;\n    text-align: center;\n    height: 70px;\n    border-radius: 15px;\n    border: 1px solid rgb(53, 53, 53);\n}\n.scoreX,\n.scoreO {\n    font-size: 1.8em;\n    font-weight: 600;\n    margin: 0;\n}\n\n.restartDiv {\n    width: 100%;\n}\n.restartButton {\n    display: block;\n    height: 70px;\n    width: 100%;\n    margin: 0 auto;\n    font-size: 1.2em;\n    font-weight: 600;\n    background-color: #cfe6df;\n    box-shadow: 5px 5px 10px #888888;\n    border: 1px solid rgb(53, 53, 53);\n    border-radius: 15px;\n}\n\n.restartButton span {\n    font-size: 1.5em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			id: moduleId,
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=script.bundle.js.map