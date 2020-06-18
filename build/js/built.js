/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/dialog.css":
/*!****************************!*\
  !*** ./src/css/dialog.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/dropdown.css":
/*!******************************!*\
  !*** ./src/css/dropdown.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/dropdownbox.css":
/*!*********************************!*\
  !*** ./src/css/dropdownbox.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/totel.css":
/*!***************************!*\
  !*** ./src/css/totel.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/_core-js@3.6.5@core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_totel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/totel.css */ "./src/css/totel.css");
/* harmony import */ var _css_totel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_totel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/_ol@6.3.1@ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/dialog.css */ "./src/css/dialog.css");
/* harmony import */ var _css_dialog_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ts_test_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/test.ts */ "./src/ts/test.ts");
/* harmony import */ var _ts_test_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ts_test_ts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ts_layout_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/layout.ts */ "./src/ts/layout.ts");
/* harmony import */ var _ts_layout_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ts_layout_ts__WEBPACK_IMPORTED_MODULE_5__);






var test1 = new _ts_test_ts__WEBPACK_IMPORTED_MODULE_4___default.a(); // eslint-disable-line no-unused-vars

var layout = new _ts_layout_ts__WEBPACK_IMPORTED_MODULE_5___default.a({
  target: 'layout',
  refMap: test1.map
}); // eslint-disable-line no-unused-vars

/***/ }),

/***/ "./src/ts sync recursive ^.*$":
/*!**************************!*\
  !*** ./src/ts sync ^.*$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./compass": "./src/ts/compass.ts",
	"./compass.ts": "./src/ts/compass.ts",
	"./control": "./src/ts/control.ts",
	"./control.ts": "./src/ts/control.ts",
	"./controlContainer": "./src/ts/controlContainer.ts",
	"./controlContainer.ts": "./src/ts/controlContainer.ts",
	"./dialog": "./src/ts/dialog.ts",
	"./dialog.ts": "./src/ts/dialog.ts",
	"./dropdown": "./src/ts/dropdown.ts",
	"./dropdown.ts": "./src/ts/dropdown.ts",
	"./dropdownbox": "./src/ts/dropdownbox.ts",
	"./dropdownbox.ts": "./src/ts/dropdownbox.ts",
	"./function": "./src/ts/function.ts",
	"./function.ts": "./src/ts/function.ts",
	"./http": "./src/ts/http.ts",
	"./http.ts": "./src/ts/http.ts",
	"./layout": "./src/ts/layout.ts",
	"./layout.ts": "./src/ts/layout.ts",
	"./scaleline": "./src/ts/scaleline.ts",
	"./scaleline.ts": "./src/ts/scaleline.ts",
	"./test": "./src/ts/test.ts",
	"./test.ts": "./src/ts/test.ts",
	"./text": "./src/ts/text.ts",
	"./text.ts": "./src/ts/text.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/ts sync recursive ^.*$";

/***/ }),

/***/ "./src/ts/compass.ts":
/*!***************************!*\
  !*** ./src/ts/compass.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = __webpack_require__(/*! ./control */ "./src/ts/control.ts");
var Compass = /** @class */ (function (_super) {
    __extends(Compass, _super);
    function Compass(options) {
        return _super.call(this, options) || this;
    }
    return Compass;
}(control_1.default));
exports.default = Compass;


/***/ }),

/***/ "./src/ts/control.ts":
/*!***************************!*\
  !*** ./src/ts/control.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Control = /** @class */ (function () {
    function Control(options) {
        this.dataUrl = options['dataUrl'] != null ? options['dataUrl'] : null;
        this.image = new Image();
        this.image.src = this.dataUrl;
    }
    Control.prototype.getImageElement = function () {
        return this.image;
    };
    Control.prototype.setImageElement = function (image) {
        this.image = image;
    };
    Control.prototype.getDataUrl = function () {
        return this.dataUrl;
    };
    Control.prototype.setDataUrl = function (dataUrl) {
        this.dataUrl = dataUrl;
        this.image.src = this.dataUrl;
    };
    return Control;
}());
exports.default = Control;


/***/ }),

/***/ "./src/ts/controlContainer.ts":
/*!************************************!*\
  !*** ./src/ts/controlContainer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ControlContainer = /** @class */ (function () {
    function ControlContainer(options) {
        if (options['target']) { }
    }
    return ControlContainer;
}());


/***/ }),

/***/ "./src/ts/dialog.ts":
/*!**************************!*\
  !*** ./src/ts/dialog.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../css/dialog.css */ "./src/css/dialog.css");
var events_1 = __webpack_require__(/*! events */ "./node_modules/_events@3.1.0@events/events.js");
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this.backgroundDiv = document.createElement('div');
        _this.backgroundDiv.classList.add('background_dialog');
        document.body.appendChild(_this.backgroundDiv);
        _this.backgroundDiv.innerHTML =
            "<div class=\"dialog\">\n      <header>\n          <div class='title'></div>\n          <div class=\"x\">X</div>\n      </header>\n      <div class='container'>\n      </div>\n      <footer>\n          <button class='primary'>\u786E\u8BA4</button>\n          <button class='default' style=\"margin-left: 10px;\">\u53D6\u6D88</button>\n      </footer>\n    </div>";
        _this.dialogDiv = _this.backgroundDiv.getElementsByClassName('dialog')[0];
        _this.containerDiv = _this.dialogDiv.getElementsByClassName('container')[0];
        _this.header = _this.dialogDiv.getElementsByTagName('header')[0];
        _this.closeButton = _this.header.getElementsByClassName('x')[0];
        _this.titleDiv = _this.header.getElementsByClassName('title')[0];
        _this.footer = _this.dialogDiv.getElementsByTagName('footer')[0];
        _this.ensureBtn = _this.footer.getElementsByClassName('default')[0];
        _this.cancelBtn = _this.footer.getElementsByClassName('primary')[0];
        _this.closeButton.onclick = function () {
            _this.emit('close');
        }; // 发送关闭事件
        _this.ensureBtn.onclick = function () {
            _this.emit('ensure');
        }; // 发送确认事件
        _this.cancelBtn.onclick = function () {
            _this.emit('cancel');
        }; // 发送取消事件
        return _this;
    }
    Dialog.prototype.setContent = function (content) {
        this.containerDiv.appendChild(content);
    };
    Dialog.prototype.setTitle = function (title) {
        this.titleDiv.innerHTML = title;
    };
    Dialog.showDialog = function (args) {
        var _this = this;
        if (this.staticDialog == null) {
            this.staticDialog = new Dialog();
        }
        if (args['target'] != null) {
            var target = args['target'];
            var content_1 = args['content'];
            var top_1 = target.offsetTop + target.offsetHeight / 2;
            var left = target.offsetLeft + target.offsetWidth / 2;
            this.staticDialog.dialogDiv.style.left = left + 'px';
            this.staticDialog.dialogDiv.style.top = top_1 + 'px';
            this.staticDialog.dialogDiv.style.transition = 'all 0s';
            setTimeout(function () {
                _this.staticDialog.setContent(content_1);
                _this.staticDialog.backgroundDiv.classList.add('show');
                _this.staticDialog.dialogDiv.classList.add('show');
                _this.staticDialog.dialogDiv.style.left = '50%';
                _this.staticDialog.dialogDiv.style.top = '50%';
                _this.staticDialog.dialogDiv.style.marginTop = (0 - _this.staticDialog.dialogDiv.clientHeight / 2) + 'px';
                _this.staticDialog.dialogDiv.style.transition = 'all 0.3s';
            }, 20);
        }
        return this.staticDialog;
    };
    Dialog.prototype.transfrom = function (element, top, left, time) {
        if (time === void 0) { time = 1000; }
        var toTop = element.offsetTop;
        var toLeft = element.offsetLeft;
        element.style.position = 'absolute';
        var xDeviation = toLeft - left;
        var yDeviation = toTop - top;
        var hDeviation = element.clientHeight;
        var wDeviation = element.clientWidth;
        var division = 20;
        var xIntervalDevia = xDeviation / (time / division);
        var yIntervalDevia = yDeviation / (time / division);
        var hIntervalDevia = hDeviation / (time / division);
        var wIntervalDevia = wDeviation / (time / division);
        var timer = 0;
        var interval = setInterval(function () {
            if (timer * division > time) {
                clearInterval(interval);
                return;
            }
            var nowtop = top + yIntervalDevia * timer;
            var nowleft = left + xIntervalDevia * timer;
            element.style.height = hIntervalDevia * timer + 'px';
            element.style.width = wIntervalDevia * timer + 'px';
            element.style.top = nowtop + 'px';
            element.style.left = nowleft + 'px';
            timer++;
        }, division);
    };
    return Dialog;
}(events_1.EventEmitter));
exports.default = Dialog;


/***/ }),

/***/ "./src/ts/dropdown.ts":
/*!****************************!*\
  !*** ./src/ts/dropdown.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../css/dropdown.css */ "./src/css/dropdown.css");
var events_1 = __webpack_require__(/*! events */ "./node_modules/_events@3.1.0@events/events.js");
var DropDown = /** @class */ (function (_super) {
    __extends(DropDown, _super);
    function DropDown(options) {
        var _this = _super.call(this) || this;
        _this.selectItem = 0;
        _this.selectValue = '';
        switch (typeof options['target']) {
            case 'object':
                _this.rootElement = options['target'];
                break;
            case 'string':
                _this.rootElement = document.getElementById(options['target']);
                break;
            default:
                break;
        }
        _this.rootElement.innerHTML = "<div class='dropdown'>" +
            "<button class='dropbtn'>下拉菜单</button>" +
            "<div class='dropdown-content'></div>" +
            '</div>';
        _this.dropdownElement = _this.rootElement.getElementsByClassName('dropdown')[0];
        _this.dropBtnElement = _this.dropdownElement.getElementsByClassName('dropbtn')[0];
        _this.dropdownContentElement = _this.dropdownElement.getElementsByClassName('dropdown-content')[0];
        _this.dropBtnElement.innerHTML = options['text'] != null ? options['text'] : '默认';
        if (options['nameLists'] != null) {
            var lists = options['nameLists'];
            _this.nameList = lists;
            var innerHTML = '';
            for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
                var value = lists_1[_i];
                innerHTML += '<a>' + value + '</a>';
            }
            _this.dropdownContentElement.innerHTML = innerHTML;
        }
        if (options['appendLists'] != null) {
            _this.appendList = options['appendLists'];
        }
        var alinks = _this.dropdownContentElement.getElementsByTagName('a');
        var _loop_1 = function (i) {
            alinks[i].onclick = function () {
                if (_this.selectItem !== i + 1) {
                    _this.selectValue = alinks[i].innerHTML;
                    for (var j = 0; j < alinks.length; j++) {
                        alinks[j].classList.remove('select');
                    }
                    alinks[i].classList.add('select');
                    _this.selectItem = i + 1;
                    _this.emit('selectChange', [_this.selectValue, _this.appendList != null ? _this.appendList[i] : null]);
                }
                else {
                    for (var j = 0; j < alinks.length; j++) {
                        alinks[j].classList.remove('select');
                    }
                    _this.selectValue = '';
                    _this.selectItem = 0;
                    _this.emit('selectChange', null);
                }
            };
        };
        for (var i = 0; i < alinks.length; i++) {
            _loop_1(i);
        }
        return _this;
    }
    return DropDown;
}(events_1.EventEmitter));
exports.default = DropDown;


/***/ }),

/***/ "./src/ts/dropdownbox.ts":
/*!*******************************!*\
  !*** ./src/ts/dropdownbox.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../css/dropdownbox.css */ "./src/css/dropdownbox.css");
var events_1 = __webpack_require__(/*! events */ "./node_modules/_events@3.1.0@events/events.js");
var DropDownBox = /** @class */ (function (_super) {
    __extends(DropDownBox, _super);
    function DropDownBox(options) {
        var _this = _super.call(this) || this;
        if (options['target'] != null) {
            _this.target = options['target'];
            _this.target.disabled = true;
            var parentElement = _this.target.parentElement;
            var containerDiv = document.createElement('div');
            containerDiv.setAttribute('style', _this.target.getAttribute('style'));
            _this.target.setAttribute('style', '');
            var containerDiv1 = document.createElement('div');
            var iconDiv = document.createElement('div');
            iconDiv.innerHTML = '^';
            containerDiv.appendChild(containerDiv1);
            containerDiv1.appendChild(_this.target);
            containerDiv1.appendChild(iconDiv);
            containerDiv.classList.add('dropdownbox_container');
            containerDiv1.classList.add('dropdownbox_container');
            containerDiv1.style.position = 'relative';
            _this.target.classList.add('dropdownbox_input');
            iconDiv.classList.add('dropdownbox_icon');
            parentElement.appendChild(containerDiv);
            var contentDiv_1 = document.createElement('div');
            contentDiv_1.classList.add('dropdownbox-content');
            var innerHTML = '';
            if (_this.target.getAttribute('type') === 'dropdown') {
                var list = JSON.parse(_this.target.getAttribute('list'));
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var value = list_1[_i];
                    innerHTML += "<a>" + value.toString() + "</a>";
                }
            }
            contentDiv_1.innerHTML = innerHTML;
            containerDiv1.appendChild(contentDiv_1);
            contentDiv_1.addEventListener('click', function (e) {
                var parentDiv = e.target.parentElement;
                var links = parentDiv.getElementsByTagName('a');
                for (var i = 0; i < links.length; i++) {
                    links[i].classList.remove('select');
                }
                e.target.classList.add('select');
                _this.emit('select:change');
                _this.target.value = e.target.innerHTML;
                contentDiv_1.style.transform = 'scaleY(0)';
            });
            containerDiv1.addEventListener('mouseover', function () {
                contentDiv_1.style.transform = 'scaleY(1)';
            });
            containerDiv1.addEventListener('mouseout', function () {
                contentDiv_1.style.transform = 'scaleY(0)';
            });
        }
        return _this;
    }
    return DropDownBox;
}(events_1.EventEmitter));
exports.default = DropDownBox;


/***/ }),

/***/ "./src/ts/function.ts":
/*!****************************!*\
  !*** ./src/ts/function.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.textBecomeImg = exports.canvasWrapText = void 0;
function canvasWrapText(options) {
    var settings = {
        canvas: document.createElement('canvas'),
        canvasWidth: 200,
        drawStartX: 10,
        drawStartY: 30,
        lineHeight: 30,
        font: "24px 'Microsoft Yahei'",
        text: '请修改掉默认的配置',
        drawWidth: 460,
        color: '#000000',
        backgroundColor: '#ffffff' // 背景颜色
    };
    // 将传入的配置覆盖掉默认配置
    if (!options && typeof options === 'object') {
        for (var i in options) {
            settings[i] = options[i];
        }
    }
    console.log(settings);
    // 获取2d的上线文开始设置相关属性
    var canvas = settings.canvas;
    canvas.width = settings.canvasWidth;
    var ctx = canvas.getContext('2d');
    // 绘制背景色
    ctx.fillStyle = settings.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 绘制文字
    ctx.font = settings.font;
    ctx.fillStyle = settings.color;
    var lineWidth = 0; // 当前行的绘制的宽度
    var lastTextIndex = 0; // 已经绘制上canvas最后的一个字符的下标
    // 由于改变canvas 的高度会导致绘制的纹理被清空，所以，不预先绘制，先放入到一个数组当中
    var arr = [];
    for (var i = 0; i < settings.text.length; i++) {
        // 获取当前的截取的字符串的宽度
        lineWidth = ctx.measureText(settings.text.substr(lastTextIndex, i - lastTextIndex)).width;
        if (lineWidth > settings.drawWidth) {
            // 判断最后一位是否是标点符号
            if (judgePunctuationMarks(settings.text[i - 1])) {
                arr.push(settings.text.substr(lastTextIndex, i - lastTextIndex));
                lastTextIndex = i;
            }
            else {
                arr.push(settings.text.substr(lastTextIndex, i - lastTextIndex - 1));
                lastTextIndex = i - 1;
            }
        }
        // 将最后多余的一部分添加到数组
        if (i === settings.text.length - 1) {
            arr.push(settings.text.substr(lastTextIndex, i - lastTextIndex + 1));
        }
    }
    // 根据arr的长度设置canvas的高度
    canvas.height = arr.length * settings.lineHeight + settings.drawStartY;
    ctx.font = settings.font;
    ctx.fillStyle = settings.color;
    for (var i = 0; i < arr.length; i++) {
        ctx.fillText(arr[i], settings.drawStartX, settings.drawStartY + i * settings.lineHeight);
    }
    // 判断是否是需要避开的标签符号
    function judgePunctuationMarks(value) {
        var arr = ['.', ',', ';', '?', '!', ':', '"', '，', '。', '？', '！', '；', '：', '、'];
        for (var i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    }
    return canvas.toDataURL();
}
exports.canvasWrapText = canvasWrapText;
function textBecomeImg(text, fontsize, fontcolor) {
    var canvas = document.createElement('canvas');
    // 小于32字加1  小于60字加2  小于80字加4    小于100字加6
    var buHeight = 0;
    if (fontsize <= 32) {
        buHeight = 1;
    }
    else if (fontsize > 32 && fontsize <= 60) {
        buHeight = 2;
    }
    else if (fontsize > 60 && fontsize <= 80) {
        buHeight = 4;
    }
    else if (fontsize > 80 && fontsize <= 100) {
        buHeight = 6;
    }
    else if (fontsize > 100) {
        buHeight = 10;
    }
    // 对于g j 等有时会有遮挡，这里增加一些高度
    canvas.height = fontsize + buHeight;
    var context = canvas.getContext('2d');
    // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = fontcolor;
    context.font = fontsize + 'px Arial';
    // top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
    context.textBaseline = 'middle';
    context.fillText(text, 0, fontsize / 2);
    // 如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
    // canvas.width = context.measureText(text).width;
    // 方案一：可以先复制内容  然后设置宽度 最后再黏贴
    // 方案二：创建新的canvas,把旧的canvas内容黏贴过去
    // 方案三： 上边设置完宽度后，再设置一遍文字
    // 方案一： 这个经过测试有问题，字体变大后，显示不全,原因是canvas默认的宽度不够，
    // 如果一开始就给canvas一个很大的宽度的话，这个是可以的。
    // var imgData = context.getImageData(0,0,canvas.width,canvas.height);  //这里先复制原来的canvas里的内容
    // canvas.width = context.measureText(text).width;  //然后设置宽和高
    // context.putImageData(imgData,0,0); //最后黏贴复制的内容
    // 方案三：改变大小后，重新设置一次文字
    canvas.width = context.measureText(text).width;
    context.fillStyle = fontcolor;
    context.font = fontsize + 'px Arial';
    context.textBaseline = 'middle';
    context.fillText(text, 0, fontsize / 2);
    var dataUrl = canvas.toDataURL('image/png'); // 注意这里背景透明的话，需要使用png
    return dataUrl;
}
exports.textBecomeImg = textBecomeImg;


/***/ }),

/***/ "./src/ts/http.ts":
/*!************************!*\
  !*** ./src/ts/http.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.getContent = function (url) {
        var p = new Promise(function (resolve, reject) {
            var conn = new XMLHttpRequest();
            conn.open('get', url, true);
            conn.onload = function () {
                if (this.status >= 200 && conn.status < 300) {
                    resolve(this.responseText);
                }
                else {
                    reject(this.responseText);
                }
            };
            conn.send();
        });
        return p;
    };
    return Http;
}());
exports.default = Http;


/***/ }),

/***/ "./src/ts/layout.ts":
/*!**************************!*\
  !*** ./src/ts/layout.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(/*! ol/Map */ "./node_modules/_ol@6.3.1@ol/Map.js");
var View_1 = __webpack_require__(/*! ol/View */ "./node_modules/_ol@6.3.1@ol/View.js");
var layer_1 = __webpack_require__(/*! ol/layer */ "./node_modules/_ol@6.3.1@ol/layer.js");
var source_1 = __webpack_require__(/*! ol/source */ "./node_modules/_ol@6.3.1@ol/source.js");
var dropdownbox_1 = __webpack_require__(/*! ./dropdownbox */ "./src/ts/dropdownbox.ts");
var Layout = /** @class */ (function () {
    function Layout(options) {
        var _this = this;
        this.layoutBorderWidth = 2;
        this.controlMap = {
            '指北针': ['Compass', './compass'],
            '比例尺': ['Scaleline', './scaleline'],
            '文字': ['TextCtl', './text']
        };
        if (options['target'] != null) {
            // 设置基本框架/div位置
            this.layoutFrameNode = document.getElementById(options['target']);
            this.layoutNode = document.createElement('div');
            this.controlSelectNode = document.createElement('input');
            this.controlSelectNode.setAttribute('type', 'dropdown');
            this.controlSelectNode.setAttribute('list', "[\"\u6307\u5317\u9488\",\"\u6BD4\u4F8B\u5C3A\",\"\u6587\u5B57\"]");
            this.controlContainerNode = document.createElement('div');
            this.layoutFrameNode.appendChild(this.layoutNode);
            this.layoutFrameNode.appendChild(this.controlSelectNode);
            this.layoutNode.appendChild(this.controlContainerNode);
            this.layoutNode.style.position = 'absolute';
            this.controlSelectNode.style.position = 'absolute';
            this.controlContainerNode.style.position = 'absolute';
            this.controlContainerNode.style.height = '100%';
            this.controlContainerNode.style.width = '100%';
            this.controlContainerNode.style.zIndex = '10';
            this.resize(this.layoutNode);
            window.addEventListener('resize', this.resize.bind(this, this.layoutNode));
            // 设置参考图层和控件容器
            this.map = new Map_1.default({
                layers: [
                    new layer_1.Tile({
                        source: new source_1.OSM()
                    })
                ],
                view: new View_1.default({
                    center: [0, 0],
                    zoom: 2
                })
            });
            this.map.setTarget(this.layoutNode);
            if (options['refMap'] != null) {
                this.refMap = options['refMap'];
                this.refMap.getTargetElement().addEventListener('mouseup', this.refMapChange.bind(this));
                this.refMap.getTargetElement().addEventListener('mousewheel', this.refMapChange.bind(this));
            }
            // (this.layoutNode.getElementsByClassName('ol-viewport')[0].
            //   getElementsByClassName('ol-overlaycontainer-stopevent')[0] as HTMLElement).style.display = 'none'
            this.dropdownbox = new dropdownbox_1.default({
                target: this.controlSelectNode
            });
            this.dropdownbox.on('select:change', function () {
                var value = _this.dropdownbox.target.value;
                value = '文字';
                console.log(value);
                console.log();
                // let controlname = this.controlMap[value][0]
                var importUrl = _this.controlMap[value][1];
                var myControl = __webpack_require__("./src/ts sync recursive ^.*$")("" + importUrl).default;
                var control;
                control = new myControl({ dataurl: '' });
                _this.currentControl = control;
            });
            // 设置需要插入的控件
            // this.dropdown = new DropDown({
            //   target: this.controlSelectNode,
            //   text: '插入控件',
            //   nameLists: ['指北针','比例尺','标题'],
            //   appendLists: [new Compass({ dataUrl: require(`../image/compass.svg`) }),
            //     new Scaleline({
            //       dataUrl: require(`../image/scaleline.svg`),
            //       map: this.map
            //     }),
            //     new Compass({})]
            // })
            // this.dropdown.on('selectChange',(args) => {
            //   if (args !== null) {
            //     this.currentControl = args[1]
            //   } else {
            //     this.currentControl = null
            //   }
            // })
            // 设置控件容器div
            this.controlContainerNode.addEventListener('click', function (e) {
                if (_this.currentControl != null) {
                    var image = _this.currentControl.getImageElement();
                    image.style.position = 'absolute';
                    image.style.top = e.offsetY + 'px';
                    image.style.left = e.offsetX + 'px';
                    _this.controlContainerNode.appendChild(image);
                }
            });
        }
    }
    Layout.prototype.refMapChange = function () {
        console.log('移动');
        this.map.getView().setCenter(this.refMap.getView().getCenter());
        this.map.getView().setZoom(this.refMap.getView().getZoom());
    };
    Layout.prototype.resize = function (node) {
        var value = this.calculateWidthAndHeight(this.layoutFrameNode.clientHeight, this.layoutFrameNode.clientWidth, this.layoutBorderWidth);
        node.style.width = value.width + 'px';
        node.style.height = value.height + 'px';
        node.style.marginTop = Math.floor((this.layoutFrameNode.clientHeight - value.height - this.layoutBorderWidth * 2) / 2) + 'px';
        node.style.marginLeft = Math.floor((this.layoutFrameNode.clientWidth - value.width - this.layoutBorderWidth * 2) / 2) + 'px';
        node.style.border = this.layoutBorderWidth + 'px solid red';
    };
    Layout.prototype.calculateWidthAndHeight = function (containerHeight, containerWidth, borderWidth, radio) {
        if (radio === void 0) { radio = 1.414286; }
        containerHeight -= Math.floor(containerHeight / 30) * 2 + borderWidth * 2;
        containerWidth -= Math.floor(containerWidth / 30) * 2 + borderWidth * 2;
        var height = 0;
        var width = 0;
        if (containerWidth / containerHeight > radio) {
            height = containerHeight;
            width = Math.floor(containerHeight * radio);
        }
        else {
            width = containerWidth;
            height = Math.floor(containerWidth / radio);
        }
        return { width: width, height: height };
    };
    return Layout;
}());
exports.default = Layout;


/***/ }),

/***/ "./src/ts/scaleline.ts":
/*!*****************************!*\
  !*** ./src/ts/scaleline.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = __webpack_require__(/*! ./control */ "./src/ts/control.ts");
var control_2 = __webpack_require__(/*! ol/control */ "./node_modules/_ol@6.3.1@ol/control.js");
var Scaleline = /** @class */ (function (_super) {
    __extends(Scaleline, _super);
    function Scaleline(options) {
        var _this = _super.call(this, options) || this;
        _this.map = options['map'];
        var myOlScaleLine = new control_2.ScaleLine({
            units: 'metric',
            bar: true,
            steps: 4,
            text: true,
            minWidth: 140
        });
        var embedElement = document.createElement('embed');
        embedElement.src = _this.getDataUrl();
        embedElement.type = 'image/svg+xml';
        document.body.appendChild(embedElement);
        var div = null;
        var imageurl = null;
        embedElement.onload = function () {
            embedElement.height = '40';
            var svgElement = embedElement.getSVGDocument().documentElement;
            div = document.createElement('div');
            div.appendChild(svgElement);
            var texts = svgElement.getElementsByTagName('text');
            _this.texts = texts;
            _this.barPercent = parseInt(_this.texts[_this.texts.length - 1].getAttribute('x'), 10) / 100.0;
            _this.fontPercent = ((100 - parseInt(_this.texts[0].getAttribute('y'), 10)) / 100.0);
            imageurl = 'data:image/svg+xml;utf8,' + div.innerHTML;
            _this.getImageElement().src = imageurl;
            _this.getImageElement().height = 40;
            console.log(imageurl);
            console.log(_this.barPercent);
        };
        console.log(myOlScaleLine.getProperties());
        _this.map.addControl(myOlScaleLine);
        console.log(_this.map);
        _this.map.getView().on('change:resolution', function () {
            var resolution = _this.map.getView().getResolution();
            console.log(resolution);
            var minwidth = 140;
            var testScales = [1, 2, 5];
            var scale = 0;
            while (scale === 0) {
                for (var i = 0; i < testScales.length; i++) {
                    if (testScales[i] / resolution > minwidth) {
                        scale = testScales[i];
                        break;
                    }
                    testScales[i] *= 10;
                }
            }
            console.log(scale);
            console.log(_this.barPercent);
            var width = Math.floor((scale / resolution) / _this.barPercent);
            embedElement.width = width.toString();
            var scaleNum = scale;
            var scaleUnits = 'm';
            if (scaleNum > 1000) {
                scaleNum /= 1000;
                scaleUnits = 'km';
            }
            while (true) {
                if (_this.texts != null) {
                    break;
                }
            }
            var innerTexts = _this.texts;
            console.log(innerTexts);
            innerTexts[0].innerHTML = '0';
            innerTexts[1].innerHTML = scaleNum / 2.0 + scaleUnits;
            innerTexts[2].innerHTML = scaleNum + scaleUnits;
            var fontSize = Math.floor(_this.fontPercent * embedElement.clientHeight);
            for (var i = 0; i < 3; i++) {
                innerTexts[i].setAttribute('y', '100%');
                innerTexts[i].setAttribute('style', 'font-size:' + fontSize + 'px;text-anchor: middle');
            }
            innerTexts[0].setAttribute('style', 'font-size:' + fontSize + 'px;text-anchor: start');
            innerTexts[2].setAttribute('x', '100%');
            innerTexts[2].setAttribute('style', 'font-size:' + fontSize + 'px;text-anchor: end');
            imageurl = 'data:image/svg+xml;utf8,' + div.innerHTML;
            _this.getImageElement().width = width;
            _this.getImageElement().src = imageurl;
        });
        return _this;
    }
    return Scaleline;
}(control_1.default));
exports.default = Scaleline;


/***/ }),

/***/ "./src/ts/test.ts":
/*!************************!*\
  !*** ./src/ts/test.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(/*! ol/Map */ "./node_modules/_ol@6.3.1@ol/Map.js");
var View_1 = __webpack_require__(/*! ol/View */ "./node_modules/_ol@6.3.1@ol/View.js");
var layer_1 = __webpack_require__(/*! ol/layer */ "./node_modules/_ol@6.3.1@ol/layer.js");
var source_1 = __webpack_require__(/*! ol/source */ "./node_modules/_ol@6.3.1@ol/source.js");
var Test1 = /** @class */ (function () {
    function Test1() {
        this.map = new Map_1.default({
            layers: [
                new layer_1.Tile({
                    source: new source_1.OSM()
                })
            ],
            target: 'map',
            view: new View_1.default({
                center: [0, 0],
                zoom: 2
            })
        });
    }
    return Test1;
}());
exports.default = Test1;


/***/ }),

/***/ "./src/ts/text.ts":
/*!************************!*\
  !*** ./src/ts/text.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = __webpack_require__(/*! ./control */ "./src/ts/control.ts");
var function_1 = __webpack_require__(/*! ./function */ "./src/ts/function.ts");
var TextCtl = /** @class */ (function (_super) {
    __extends(TextCtl, _super);
    function TextCtl(options) {
        var _this = _super.call(this, options) || this;
        _this.setDataUrl(function_1.textBecomeImg('hahhaaa', 32, '#000'));
        return _this;
    }
    return TextCtl;
}(control_1.default));
exports.default = TextCtl;


/***/ })

/******/ });
//# sourceMappingURL=built.js.map