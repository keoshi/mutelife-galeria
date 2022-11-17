/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n/**\n * Block: mutelife-galeria\n */\n\n//  Import CSS.\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaPlaceholder = _wp$editor.MediaPlaceholder,\n    MediaUpload = _wp$editor.MediaUpload;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    Toolbar = _wp$components.Toolbar;\n\n/**\n * Register the Gutenberg Block\n */\n\nregisterBlockType('mutelife/galeria', {\n\ttitle: __('mutelife: Galeria'),\n\ticon: 'format-gallery',\n\tcategory: 'layout',\n\tdescription: __('Automatically generate beautiful galleries.'),\n\tkeywords: [__('gallery'), __('layout'), __('image')],\n\n\tattributes: {\n\t\timages: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t},\n\n\tsupports: {\n\t\talign: [\"wide\", \"full\"],\n\t\tdefault: ''\n\t},\n\n\t/**\n  * Edit function\n  */\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    isSelected = _ref.isSelected;\n\t\tvar images = attributes.images;\n\n\n\t\tvar imageClassNames = ['mutelife-image', 'mutelife-image', 'mutelife-image', 'mutelife-image'];\n\n\t\tvar renderBlockControls = function renderBlockControls() {\n\t\t\treturn wp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\t!!images.length && wp.element.createElement(\n\t\t\t\t\tToolbar,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\tonSelect: onSelectImages,\n\t\t\t\t\t\tallowedTypes: ['image'],\n\t\t\t\t\t\tmultiple: true,\n\t\t\t\t\t\tgallery: true,\n\t\t\t\t\t\tvalue: images.map(function (img) {\n\t\t\t\t\t\t\treturn img.id;\n\t\t\t\t\t\t}),\n\t\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\t\treturn wp.element.createElement(IconButton, {\n\t\t\t\t\t\t\t\tclassName: 'components-toolbar__control',\n\t\t\t\t\t\t\t\tlabel: __('Edit Gallery'),\n\t\t\t\t\t\t\t\ticon: 'edit',\n\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\n\t\tvar emptyGallery = function emptyGallery(object) {\n\t\t\tfor (var key in object) {\n\t\t\t\tif (object.hasOwnProperty(key)) return false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t};\n\n\t\tvar renderGallery = function renderGallery() {\n\t\t\tif (emptyGallery(images)) {\n\t\t\t\treturn wp.element.createElement(MediaPlaceholder, {\n\t\t\t\t\tallowedTypes: ['image'],\n\t\t\t\t\tmultiple: true,\n\t\t\t\t\tlabels: { title: 'mutelife Galeria' },\n\t\t\t\t\tonSelect: onSelectImages\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tswitch (images.length) {\n\t\t\t\tcase 2:\n\t\t\t\t\tif (images[0].ratio > images[1].ratio) {\n\t\t\t\t\t\timageClassNames = ['mutelife-image tercos', 'mutelife-image terco'];\n\t\t\t\t\t}\n\t\t\t\t\tif (images[0].ratio < images[1].ratio) {\n\t\t\t\t\t\timageClassNames = ['mutelife-image terco', 'mutelife-image tercos'];\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 3:\n\t\t\t\t\timageClassNames = ['mutelife-image', 'mutelife-image middle', 'mutelife-image'];\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 4:\n\t\t\t\t\timageClassNames = ['mutelife-image fortico-vertical', 'mutelife-image fortico-horizontal', 'mutelife-image fortico-horizontal', 'mutelife-image fortico-horizontal'];\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\t4 === images.length ? getFortico() : getRegular()\n\t\t\t);\n\t\t};\n\n\t\tvar getRegular = function getRegular() {\n\t\t\tvar imagesFinal = [];\n\n\t\t\tObject.values(images).map(function (image, i) {\n\n\t\t\t\timagesFinal.push(wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t})\n\t\t\t\t));\n\t\t\t});\n\n\t\t\treturn imagesFinal;\n\t\t};\n\n\t\tvar getFortico = function getFortico() {\n\t\t\tvar forticoVertical = [];\n\t\t\tvar forticoHorizontais = [];\n\t\t\tvar forticoHorizontal = [];\n\n\t\t\tObject.values(images).map(function (image, i) {\n\n\t\t\t\tif (0 === i) {\n\t\t\t\t\tforticoVertical.push(wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t\t})\n\t\t\t\t\t));\n\t\t\t\t} else {\n\t\t\t\t\tforticoHorizontais.push(wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t\t})\n\t\t\t\t\t));\n\t\t\t\t}\n\n\t\t\t\tforticoHorizontal = wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'fortico-horizontais' },\n\t\t\t\t\tforticoHorizontais\n\t\t\t\t);\n\t\t\t});\n\n\t\t\treturn [forticoVertical, forticoHorizontal];\n\t\t};\n\n\t\tvar onSelectImages = function onSelectImages(selectedImages) {\n\t\t\tvar newImages = [];\n\n\t\t\tvar _iteratorNormalCompletion = true;\n\t\t\tvar _didIteratorError = false;\n\t\t\tvar _iteratorError = undefined;\n\n\t\t\ttry {\n\t\t\t\tfor (var _iterator = selectedImages.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n\t\t\t\t\tvar _ref3 = _step.value;\n\n\t\t\t\t\tvar _ref4 = _slicedToArray(_ref3, 2);\n\n\t\t\t\t\tvar index = _ref4[0];\n\t\t\t\t\tvar image = _ref4[1];\n\n\t\t\t\t\tvar newImageRatio = image.sizes.full.width / image.sizes.full.height;\n\n\t\t\t\t\tvar newImageProps = {\n\t\t\t\t\t\tid: image.id,\n\t\t\t\t\t\turl: image.url,\n\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\tcaption: image.caption,\n\t\t\t\t\t\tratio: newImageRatio.toFixed(2)\n\t\t\t\t\t};\n\n\t\t\t\t\tnewImages.push(newImageProps);\n\t\t\t\t}\n\t\t\t} catch (err) {\n\t\t\t\t_didIteratorError = true;\n\t\t\t\t_iteratorError = err;\n\t\t\t} finally {\n\t\t\t\ttry {\n\t\t\t\t\tif (!_iteratorNormalCompletion && _iterator.return) {\n\t\t\t\t\t\t_iterator.return();\n\t\t\t\t\t}\n\t\t\t\t} finally {\n\t\t\t\t\tif (_didIteratorError) {\n\t\t\t\t\t\tthrow _iteratorError;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tsetAttributes({\n\t\t\t\timages: newImages\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'wp-block-mutelife-galeria' },\n\t\t\trenderBlockControls(),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'mutelife-galeria photos' },\n\t\t\t\trenderGallery()\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * Save function\n  */\n\tsave: function save(_ref5) {\n\t\tvar className = _ref5.className,\n\t\t    attributes = _ref5.attributes;\n\t\tvar images = attributes.images;\n\n\n\t\tvar imageClassNames = ['mutelife-image', 'mutelife-image', 'mutelife-image', 'mutelife-image'];\n\n\t\tvar renderGallery = function renderGallery() {\n\t\t\tswitch (images.length) {\n\t\t\t\tcase 2:\n\t\t\t\t\tif (images[0].ratio > images[1].ratio) {\n\t\t\t\t\t\timageClassNames = ['mutelife-image tercos', 'mutelife-image terco'];\n\t\t\t\t\t}\n\t\t\t\t\tif (images[0].ratio < images[1].ratio) {\n\t\t\t\t\t\timageClassNames = ['mutelife-image terco', 'mutelife-image tercos'];\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 3:\n\t\t\t\t\timageClassNames = ['mutelife-image', 'mutelife-image middle', 'mutelife-image'];\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 4:\n\t\t\t\t\timageClassNames = ['mutelife-image fortico-vertical', 'mutelife-image fortico-horizontal', 'mutelife-image fortico-horizontal', 'mutelife-image fortico-horizontal'];\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\t4 === images.length ? getFortico() : getRegular()\n\t\t\t);\n\t\t};\n\n\t\tvar getRegular = function getRegular() {\n\t\t\tvar imagesFinal = [];\n\n\t\t\tObject.values(images).map(function (image, i) {\n\n\t\t\t\timagesFinal.push(wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t})\n\t\t\t\t));\n\t\t\t});\n\n\t\t\treturn imagesFinal;\n\t\t};\n\n\t\tvar getFortico = function getFortico() {\n\t\t\tvar forticoVertical = [];\n\t\t\tvar forticoHorizontais = [];\n\t\t\tvar forticoHorizontal = [];\n\n\t\t\tObject.values(images).map(function (image, i) {\n\n\t\t\t\tif (0 === i) {\n\t\t\t\t\tforticoVertical.push(wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t\t})\n\t\t\t\t\t));\n\t\t\t\t} else {\n\t\t\t\t\tforticoHorizontais.push(wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: imageClassNames[i], key: i },\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tsrc: image.url,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\tclassName: 'unveil'\n\t\t\t\t\t\t})\n\t\t\t\t\t));\n\t\t\t\t}\n\n\t\t\t\tforticoHorizontal = wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'fortico-horizontais' },\n\t\t\t\t\tforticoHorizontais\n\t\t\t\t);\n\t\t\t});\n\n\t\t\treturn [forticoVertical, forticoHorizontal];\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'wp-block-mutelife-galeria' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'mutelife-galeria photos' },\n\t\t\t\trenderGallery()\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuLyoqXG4gKiBCbG9jazogbXV0ZWxpZmUtZ2FsZXJpYVxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgTWVkaWFQbGFjZWhvbGRlciA9IF93cCRlZGl0b3IuTWVkaWFQbGFjZWhvbGRlcixcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQ7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBJY29uQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuSWNvbkJ1dHRvbixcbiAgICBUb29sYmFyID0gX3dwJGNvbXBvbmVudHMuVG9vbGJhcjtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgR3V0ZW5iZXJnIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ211dGVsaWZlL2dhbGVyaWEnLCB7XG5cdHRpdGxlOiBfXygnbXV0ZWxpZmU6IEdhbGVyaWEnKSxcblx0aWNvbjogJ2Zvcm1hdC1nYWxsZXJ5Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRkZXNjcmlwdGlvbjogX18oJ0F1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYmVhdXRpZnVsIGdhbGxlcmllcy4nKSxcblx0a2V5d29yZHM6IFtfXygnZ2FsbGVyeScpLCBfXygnbGF5b3V0JyksIF9fKCdpbWFnZScpXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VzOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogW11cblx0XHR9XG5cdH0sXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogW1wid2lkZVwiLCBcImZ1bGxcIl0sXG5cdFx0ZGVmYXVsdDogJydcblx0fSxcblxuXHQvKipcbiAgKiBFZGl0IGZ1bmN0aW9uXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZDtcblx0XHR2YXIgaW1hZ2VzID0gYXR0cmlidXRlcy5pbWFnZXM7XG5cblxuXHRcdHZhciBpbWFnZUNsYXNzTmFtZXMgPSBbJ211dGVsaWZlLWltYWdlJywgJ211dGVsaWZlLWltYWdlJywgJ211dGVsaWZlLWltYWdlJywgJ211dGVsaWZlLWltYWdlJ107XG5cblx0XHR2YXIgcmVuZGVyQmxvY2tDb250cm9scyA9IGZ1bmN0aW9uIHJlbmRlckJsb2NrQ29udHJvbHMoKSB7XG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQhIWltYWdlcy5sZW5ndGggJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFRvb2xiYXIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlcyxcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlczogWydpbWFnZSddLFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IHRydWUsXG5cdFx0XHRcdFx0XHRnYWxsZXJ5OiB0cnVlLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGltYWdlcy5tYXAoZnVuY3Rpb24gKGltZykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW1nLmlkO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbCcsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdFZGl0IEdhbGxlcnknKSxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljazogb3BlblxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHR2YXIgZW1wdHlHYWxsZXJ5ID0gZnVuY3Rpb24gZW1wdHlHYWxsZXJ5KG9iamVjdCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblxuXHRcdHZhciByZW5kZXJHYWxsZXJ5ID0gZnVuY3Rpb24gcmVuZGVyR2FsbGVyeSgpIHtcblx0XHRcdGlmIChlbXB0eUdhbGxlcnkoaW1hZ2VzKSkge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhUGxhY2Vob2xkZXIsIHtcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM6IFsnaW1hZ2UnXSxcblx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRcdFx0XHRsYWJlbHM6IHsgdGl0bGU6ICdtdXRlbGlmZSBHYWxlcmlhJyB9LFxuXHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoIChpbWFnZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRpZiAoaW1hZ2VzWzBdLnJhdGlvID4gaW1hZ2VzWzFdLnJhdGlvKSB7XG5cdFx0XHRcdFx0XHRpbWFnZUNsYXNzTmFtZXMgPSBbJ211dGVsaWZlLWltYWdlIHRlcmNvcycsICdtdXRlbGlmZS1pbWFnZSB0ZXJjbyddO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaW1hZ2VzWzBdLnJhdGlvIDwgaW1hZ2VzWzFdLnJhdGlvKSB7XG5cdFx0XHRcdFx0XHRpbWFnZUNsYXNzTmFtZXMgPSBbJ211dGVsaWZlLWltYWdlIHRlcmNvJywgJ211dGVsaWZlLWltYWdlIHRlcmNvcyddO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0aW1hZ2VDbGFzc05hbWVzID0gWydtdXRlbGlmZS1pbWFnZScsICdtdXRlbGlmZS1pbWFnZSBtaWRkbGUnLCAnbXV0ZWxpZmUtaW1hZ2UnXTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0aW1hZ2VDbGFzc05hbWVzID0gWydtdXRlbGlmZS1pbWFnZSBmb3J0aWNvLXZlcnRpY2FsJywgJ211dGVsaWZlLWltYWdlIGZvcnRpY28taG9yaXpvbnRhbCcsICdtdXRlbGlmZS1pbWFnZSBmb3J0aWNvLWhvcml6b250YWwnLCAnbXV0ZWxpZmUtaW1hZ2UgZm9ydGljby1ob3Jpem9udGFsJ107XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdDQgPT09IGltYWdlcy5sZW5ndGggPyBnZXRGb3J0aWNvKCkgOiBnZXRSZWd1bGFyKClcblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdHZhciBnZXRSZWd1bGFyID0gZnVuY3Rpb24gZ2V0UmVndWxhcigpIHtcblx0XHRcdHZhciBpbWFnZXNGaW5hbCA9IFtdO1xuXG5cdFx0XHRPYmplY3QudmFsdWVzKGltYWdlcykubWFwKGZ1bmN0aW9uIChpbWFnZSwgaSkge1xuXG5cdFx0XHRcdGltYWdlc0ZpbmFsLnB1c2god3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBpbWFnZUNsYXNzTmFtZXNbaV0sIGtleTogaSB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0c3JjOiBpbWFnZS51cmwsXG5cdFx0XHRcdFx0XHRhbHQ6IGltYWdlLmFsdCxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ3VudmVpbCdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gaW1hZ2VzRmluYWw7XG5cdFx0fTtcblxuXHRcdHZhciBnZXRGb3J0aWNvID0gZnVuY3Rpb24gZ2V0Rm9ydGljbygpIHtcblx0XHRcdHZhciBmb3J0aWNvVmVydGljYWwgPSBbXTtcblx0XHRcdHZhciBmb3J0aWNvSG9yaXpvbnRhaXMgPSBbXTtcblx0XHRcdHZhciBmb3J0aWNvSG9yaXpvbnRhbCA9IFtdO1xuXG5cdFx0XHRPYmplY3QudmFsdWVzKGltYWdlcykubWFwKGZ1bmN0aW9uIChpbWFnZSwgaSkge1xuXG5cdFx0XHRcdGlmICgwID09PSBpKSB7XG5cdFx0XHRcdFx0Zm9ydGljb1ZlcnRpY2FsLnB1c2god3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogaW1hZ2VDbGFzc05hbWVzW2ldLCBrZXk6IGkgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0XHRzcmM6IGltYWdlLnVybCxcblx0XHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ3VudmVpbCdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9ydGljb0hvcml6b250YWlzLnB1c2god3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogaW1hZ2VDbGFzc05hbWVzW2ldLCBrZXk6IGkgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0XHRzcmM6IGltYWdlLnVybCxcblx0XHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ3VudmVpbCdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3J0aWNvSG9yaXpvbnRhbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2ZvcnRpY28taG9yaXpvbnRhaXMnIH0sXG5cdFx0XHRcdFx0Zm9ydGljb0hvcml6b250YWlzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIFtmb3J0aWNvVmVydGljYWwsIGZvcnRpY29Ib3Jpem9udGFsXTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uU2VsZWN0SW1hZ2VzID0gZnVuY3Rpb24gb25TZWxlY3RJbWFnZXMoc2VsZWN0ZWRJbWFnZXMpIHtcblx0XHRcdHZhciBuZXdJbWFnZXMgPSBbXTtcblxuXHRcdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHRcdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvciA9IHNlbGVjdGVkSW1hZ2VzLmVudHJpZXMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0XHRcdFx0XHR2YXIgX3JlZjMgPSBfc3RlcC52YWx1ZTtcblxuXHRcdFx0XHRcdHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKTtcblxuXHRcdFx0XHRcdHZhciBpbmRleCA9IF9yZWY0WzBdO1xuXHRcdFx0XHRcdHZhciBpbWFnZSA9IF9yZWY0WzFdO1xuXG5cdFx0XHRcdFx0dmFyIG5ld0ltYWdlUmF0aW8gPSBpbWFnZS5zaXplcy5mdWxsLndpZHRoIC8gaW1hZ2Uuc2l6ZXMuZnVsbC5oZWlnaHQ7XG5cblx0XHRcdFx0XHR2YXIgbmV3SW1hZ2VQcm9wcyA9IHtcblx0XHRcdFx0XHRcdGlkOiBpbWFnZS5pZCxcblx0XHRcdFx0XHRcdHVybDogaW1hZ2UudXJsLFxuXHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHRjYXB0aW9uOiBpbWFnZS5jYXB0aW9uLFxuXHRcdFx0XHRcdFx0cmF0aW86IG5ld0ltYWdlUmF0aW8udG9GaXhlZCgyKVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRuZXdJbWFnZXMucHVzaChuZXdJbWFnZVByb3BzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRfaXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWFnZXM6IG5ld0ltYWdlc1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnd3AtYmxvY2stbXV0ZWxpZmUtZ2FsZXJpYScgfSxcblx0XHRcdHJlbmRlckJsb2NrQ29udHJvbHMoKSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbXV0ZWxpZmUtZ2FsZXJpYSBwaG90b3MnIH0sXG5cdFx0XHRcdHJlbmRlckdhbGxlcnkoKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogU2F2ZSBmdW5jdGlvblxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWY1KSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWY1LmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWY1LmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGltYWdlcyA9IGF0dHJpYnV0ZXMuaW1hZ2VzO1xuXG5cblx0XHR2YXIgaW1hZ2VDbGFzc05hbWVzID0gWydtdXRlbGlmZS1pbWFnZScsICdtdXRlbGlmZS1pbWFnZScsICdtdXRlbGlmZS1pbWFnZScsICdtdXRlbGlmZS1pbWFnZSddO1xuXG5cdFx0dmFyIHJlbmRlckdhbGxlcnkgPSBmdW5jdGlvbiByZW5kZXJHYWxsZXJ5KCkge1xuXHRcdFx0c3dpdGNoIChpbWFnZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRpZiAoaW1hZ2VzWzBdLnJhdGlvID4gaW1hZ2VzWzFdLnJhdGlvKSB7XG5cdFx0XHRcdFx0XHRpbWFnZUNsYXNzTmFtZXMgPSBbJ211dGVsaWZlLWltYWdlIHRlcmNvcycsICdtdXRlbGlmZS1pbWFnZSB0ZXJjbyddO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaW1hZ2VzWzBdLnJhdGlvIDwgaW1hZ2VzWzFdLnJhdGlvKSB7XG5cdFx0XHRcdFx0XHRpbWFnZUNsYXNzTmFtZXMgPSBbJ211dGVsaWZlLWltYWdlIHRlcmNvJywgJ211dGVsaWZlLWltYWdlIHRlcmNvcyddO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0aW1hZ2VDbGFzc05hbWVzID0gWydtdXRlbGlmZS1pbWFnZScsICdtdXRlbGlmZS1pbWFnZSBtaWRkbGUnLCAnbXV0ZWxpZmUtaW1hZ2UnXTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0aW1hZ2VDbGFzc05hbWVzID0gWydtdXRlbGlmZS1pbWFnZSBmb3J0aWNvLXZlcnRpY2FsJywgJ211dGVsaWZlLWltYWdlIGZvcnRpY28taG9yaXpvbnRhbCcsICdtdXRlbGlmZS1pbWFnZSBmb3J0aWNvLWhvcml6b250YWwnLCAnbXV0ZWxpZmUtaW1hZ2UgZm9ydGljby1ob3Jpem9udGFsJ107XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQ0ID09PSBpbWFnZXMubGVuZ3RoID8gZ2V0Rm9ydGljbygpIDogZ2V0UmVndWxhcigpXG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHR2YXIgZ2V0UmVndWxhciA9IGZ1bmN0aW9uIGdldFJlZ3VsYXIoKSB7XG5cdFx0XHR2YXIgaW1hZ2VzRmluYWwgPSBbXTtcblxuXHRcdFx0T2JqZWN0LnZhbHVlcyhpbWFnZXMpLm1hcChmdW5jdGlvbiAoaW1hZ2UsIGkpIHtcblxuXHRcdFx0XHRpbWFnZXNGaW5hbC5wdXNoKHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogaW1hZ2VDbGFzc05hbWVzW2ldLCBrZXk6IGkgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcblx0XHRcdFx0XHRcdHNyYzogaW1hZ2UudXJsLFxuXHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd1bnZlaWwnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGltYWdlc0ZpbmFsO1xuXHRcdH07XG5cblx0XHR2YXIgZ2V0Rm9ydGljbyA9IGZ1bmN0aW9uIGdldEZvcnRpY28oKSB7XG5cdFx0XHR2YXIgZm9ydGljb1ZlcnRpY2FsID0gW107XG5cdFx0XHR2YXIgZm9ydGljb0hvcml6b250YWlzID0gW107XG5cdFx0XHR2YXIgZm9ydGljb0hvcml6b250YWwgPSBbXTtcblxuXHRcdFx0T2JqZWN0LnZhbHVlcyhpbWFnZXMpLm1hcChmdW5jdGlvbiAoaW1hZ2UsIGkpIHtcblxuXHRcdFx0XHRpZiAoMCA9PT0gaSkge1xuXHRcdFx0XHRcdGZvcnRpY29WZXJ0aWNhbC5wdXNoKHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IGltYWdlQ2xhc3NOYW1lc1tpXSwga2V5OiBpIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcblx0XHRcdFx0XHRcdFx0c3JjOiBpbWFnZS51cmwsXG5cdFx0XHRcdFx0XHRcdGFsdDogaW1hZ2UuYWx0LFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd1bnZlaWwnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcnRpY29Ib3Jpem9udGFpcy5wdXNoKHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IGltYWdlQ2xhc3NOYW1lc1tpXSwga2V5OiBpIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcblx0XHRcdFx0XHRcdFx0c3JjOiBpbWFnZS51cmwsXG5cdFx0XHRcdFx0XHRcdGFsdDogaW1hZ2UuYWx0LFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd1bnZlaWwnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9ydGljb0hvcml6b250YWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdmb3J0aWNvLWhvcml6b250YWlzJyB9LFxuXHRcdFx0XHRcdGZvcnRpY29Ib3Jpem9udGFpc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBbZm9ydGljb1ZlcnRpY2FsLCBmb3J0aWNvSG9yaXpvbnRhbF07XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnd3AtYmxvY2stbXV0ZWxpZmUtZ2FsZXJpYScgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbXV0ZWxpZmUtZ2FsZXJpYSBwaG90b3MnIH0sXG5cdFx0XHRcdHJlbmRlckdhbGxlcnkoKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);