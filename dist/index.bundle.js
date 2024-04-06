/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev_modules/@ocdla/foobar/foobar.js":
/*!*********************************************!*\
  !*** ./dev_modules/@ocdla/foobar/foobar.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decrementTimer: () => (/* binding */ decrementTimer),
/* harmony export */   incrementTimer: () => (/* binding */ incrementTimer)
/* harmony export */ });
function incrementTimer() {
  // Increment the elapsedTime
  console.log("here");
  /*
  this.elapsedTime++;
    // Calculate minutes, seconds, and milliseconds
  this.minutes = Math.floor(this.elapsedTime / 6000);
  this.seconds = Math.floor(this.elapsedTime / 100) % 60;
  this.milliseconds = this.elapsedTime % 100;
    return [this.minutes, this.seconds, this.milliseconds];*/
}
function decrementTimer() {
  // decrement the elapsedTime
  this.elapsedTime--;
  if (this.elapsedTime == 0) {
    this.stopTimer();
  }

  // Calculate minutes, seconds, and milliseconds
  this.minutes = Math.floor(this.elapsedTime / 6000);
  this.seconds = Math.floor(this.elapsedTime / 100) % 60;
  this.milliseconds = this.elapsedTime % 100;
  return [this.minutes, this.seconds, this.milliseconds];
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/js/indexStart.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dev_modules_ocdla_foobar_foobar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dev_modules/@ocdla/foobar/foobar */ "./dev_modules/@ocdla/foobar/foobar.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);
    this.isRunning = false;
    this.isIncementing = false;
    this.isDecrementing = false;
    this.timer = null;
    this.elapsedTime = 0;
    this.createTimer = this.createTimer.bind(this);
    //this.incrementTimer = this.incrementTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    //this.decrementTimer = this.decrementTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.pad = this.padTimer.bind(this);
    document.getElementById("addtimer").onclick = this.createTimer.bind(this);
    _dev_modules_ocdla_foobar_foobar__WEBPACK_IMPORTED_MODULE_0__.incrementTimer();
  }
  return _createClass(Timer, [{
    key: "createTimer",
    value: function createTimer() {
      document.getElementById("timer").innerHTML = this.generateHTML();
      this.addEventHandlers();
    }
  }, {
    key: "generateHTML",
    value: function generateHTML() {
      var HTML = this.generateHeader();
      for (var i = 0; i < 2; i++) {
        HTML += this.generateTimerBtn(Timer.methodsnames[i]);
      }
      HTML += this.generatemiddle();
      for (var _i = 2; _i < 4; _i++) {
        HTML += this.generateBtn(Timer.methodsnames[_i]);
      }
      HTML += this.generatefooter();
      return HTML;
    }
  }, {
    key: "generateHeader",
    value: function generateHeader() {
      return " <div class=\"h1 p-5 mt-4 text-center bg-light rounded\">\n        <span id=\"minutes\">00</span> : <span id=\"seconds\">00</span>: <span id=\"miliseconds\">00</span>\n      </div>\n      <div id=\"controls\">\n        <div class=\"container text-center\">";
    }
  }, {
    key: "generateTimerBtn",
    value: function generateTimerBtn(mthd) {
      return " \n        <button class=\"btn btn-lg btn-success\" data-action=\"".concat(mthd, "\" id=\"controls\">\n        ").concat(mthd, "\n        </button>");
    }
  }, {
    key: "generatemiddle",
    value: function generatemiddle() {
      return "\n        </div>\n        <div class=\"container text-center\">";
    }
  }, {
    key: "generateBtn",
    value: function generateBtn(mthd) {
      return "\n        <button class=\"btn btn-lg btn-danger\" data-action=\"".concat(mthd, "\" id=\"controls\">\n        ").concat(mthd, "\n        </button>");
    }
  }, {
    key: "generatefooter",
    value: function generatefooter() {
      return "\n            </div>\n        </div>";
    }
  }, {
    key: "addEventHandlers",
    value: function addEventHandlers() {
      // Put the element on the page with an id of start in a variable
      // Do the same for the stop button and the reset button

      var controls = document.getElementById("controls");
      controls.addEventListener("click", this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      //deturmine if what btn the user pressed
      var target = e.target;
      var action = target.dataset.action;
      var method = action + "Timer";
      this[method]();
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      if (this.isRunning == false) {
        this.isRunning = true;
        this.isIncementing = true;
        this.timer = setInterval(this.updateTimer, 10);
      }
    }
  }, {
    key: "decreaseTimer",
    value: function decreaseTimer() {
      if (this.isRunning == false && this.elapsedTime > 0) {
        this.isRunning = true;
        this.isDecrementing = true;
        this.timer = setInterval(this.updateTimer, 10);
      }
    }
  }, {
    key: "updateTimer",
    value: function updateTimer() {
      //ensure that the proper count is beeing taken into account
      if (this.isRunning && this.isIncementing) {
        var _this$incrementTimer = this.incrementTimer(),
          _this$incrementTimer2 = _slicedToArray(_this$incrementTimer, 3),
          minutes = _this$incrementTimer2[0],
          seconds = _this$incrementTimer2[1],
          milliseconds = _this$incrementTimer2[2];
        this.renderTimer(minutes, seconds, milliseconds);
      } else if (this.isRunning && this.isDecrementing) {
        var _this$decrementTimer = this.decrementTimer(),
          _this$decrementTimer2 = _slicedToArray(_this$decrementTimer, 3),
          _minutes = _this$decrementTimer2[0],
          _seconds = _this$decrementTimer2[1],
          _milliseconds = _this$decrementTimer2[2];
        this.renderTimer(_minutes, _seconds, _milliseconds);
      }
    }
    /*
    incrementTimer() {
        // Increment the elapsedTime
        this.elapsedTime++;
          // Calculate minutes, seconds, and milliseconds
        this.minutes = Math.floor(this.elapsedTime / 6000);
        this.seconds = Math.floor(this.elapsedTime / 100) % 60;
        this.milliseconds = this.elapsedTime % 100;
          return [this.minutes, this.seconds, this.milliseconds];
    }
    decrementTimer() {
        // decrement the elapsedTime
        this.elapsedTime--;
        if (this.elapsedTime == 0) {
            this.stopTimer()
        }
          // Calculate minutes, seconds, and milliseconds
        this.minutes = Math.floor(this.elapsedTime / 6000);
        this.seconds = Math.floor(this.elapsedTime / 100) % 60;
        this.milliseconds = this.elapsedTime % 100;
          return [this.minutes, this.seconds, this.milliseconds];
    }
      */
  }, {
    key: "renderTimer",
    value: function renderTimer(minutes, seconds, miliseconds) {
      //show the value of both on the webpage
      //this one being minutes
      document.getElementById("minutes").innerHTML = this.padTimer(minutes);
      //this one being seconds
      document.getElementById("seconds").innerHTML = this.padTimer(seconds);
      //this one for miliseconds
      document.getElementById("miliseconds").innerHTML = this.padTimer(miliseconds);
    }
  }, {
    key: "padTimer",
    value: function padTimer(number) {
      // add a leading 0 to number if the number is < 10
      if (number < 10) {
        number = "0" + number;
      }
      // return number
      return number;
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      // if the timer is running, stop it by
      // set isRunning to false
      // call the function clearInterval to stop the timer
      // end if
      if (this.isRunning) {
        // set isRunning to false
        this.isRunning = false;
        this.isIncementing = false;
        this.isDecrementing = false;
        clearInterval(this.timer);
      }
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      // stop the timer by calling stopTimer
      this.stopTimer();
      // set the timerTime back to 0
      this.elapsedTime = 0;
      // write 00 to the elements on the page for minutes and seconds
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      document.getElementById("miliseconds").innerHTML = "00";
    }
  }]);
}(); // When the page has finished loading, call the function init
_defineProperty(Timer, "methodsnames", ["start", "decrease", "reset", "stop"]);
window.onload = function () {
  new Timer();
};
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map