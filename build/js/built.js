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
/* harmony import */ var _ts_layout_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/layout.ts */ "./src/ts/layout.ts");






var test1 = new _ts_test_ts__WEBPACK_IMPORTED_MODULE_4__["default"](); // eslint-disable-line no-unused-vars

var layout = new _ts_layout_ts__WEBPACK_IMPORTED_MODULE_5__["default"]({
  target: 'layout',
  refMap: test1.map
}); // eslint-disable-line no-unused-vars

/***/ }),

/***/ "./src/ts lazy recursive":
/*!**************************************!*\
  !*** ./src/ts lazy namespace object ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/ts lazy recursive";

/***/ }),

/***/ "./src/ts/dropdownbox.ts":
/*!*******************************!*\
  !*** ./src/ts/dropdownbox.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_dropdownbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dropdownbox.css */ "./src/css/dropdownbox.css");
/* harmony import */ var _css_dropdownbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_dropdownbox_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/_events@3.1.0@events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
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
}(events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]));
/* harmony default export */ __webpack_exports__["default"] = (DropDownBox);


/***/ }),

/***/ "./src/ts/layout.ts":
/*!**************************!*\
  !*** ./src/ts/layout.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Map */ "./node_modules/_ol@6.3.1@ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View */ "./node_modules/_ol@6.3.1@ol/View.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer */ "./node_modules/_ol@6.3.1@ol/layer.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ "./node_modules/_ol@6.3.1@ol/source.js");
/* harmony import */ var _dropdownbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdownbox */ "./src/ts/dropdownbox.ts");





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
            this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_0__["default"]({
                layers: [
                    new ol_layer__WEBPACK_IMPORTED_MODULE_2__["Tile"]({
                        source: new ol_source__WEBPACK_IMPORTED_MODULE_3__["OSM"]()
                    })
                ],
                view: new ol_View__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
            this.dropdownbox = new _dropdownbox__WEBPACK_IMPORTED_MODULE_4__["default"]({
                target: this.controlSelectNode
            });
            this.dropdownbox.on('select:change', function () {
                var value = _this.dropdownbox.target.value;
                value = '文字';
                console.log(value);
                console.log();
                // let controlname = this.controlMap[value][0]
                var importUrl = _this.controlMap[value][1];
                var control;
                __webpack_require__("./src/ts lazy recursive")(importUrl).then(function (myControl) {
                    // control = eval(controlname)
                    control = new myControl();
                    console.log(control);
                }).catch();
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
/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./src/ts/test.ts":
/*!************************!*\
  !*** ./src/ts/test.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Map */ "./node_modules/_ol@6.3.1@ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View */ "./node_modules/_ol@6.3.1@ol/View.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer */ "./node_modules/_ol@6.3.1@ol/layer.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ "./node_modules/_ol@6.3.1@ol/source.js");




var Test1 = /** @class */ (function () {
    function Test1() {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_0__["default"]({
            layers: [
                new ol_layer__WEBPACK_IMPORTED_MODULE_2__["Tile"]({
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_3__["OSM"]()
                })
            ],
            target: 'map',
            view: new ol_View__WEBPACK_IMPORTED_MODULE_1__["default"]({
                center: [0, 0],
                zoom: 2
            })
        });
    }
    return Test1;
}());
/* harmony default export */ __webpack_exports__["default"] = (Test1);


/***/ })

/******/ });
//# sourceMappingURL=built.js.map