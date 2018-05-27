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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _personClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personClass */ \"./src/personClass.js\");\n/* harmony import */ var _waterfall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterfall */ \"./src/waterfall.js\");\n\r\n\r\n//import canvasLightning from './lightning';\r\n\r\n(function load() {\r\n\t\r\n\tlet nameAdjectiveMonster = [\"Ужасный\", \"Злобный\", \"Сопливый\"];\r\n\tlet whichMonster = [\"Огр\", \"Гном\", \"Гоблин\"];\r\n\tlet nameMonster = [\"Том\", \"Макс\", \"Дима\"];\r\n\r\n\tlet player = new _personClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Крош\", String(drawLife(\"player\", 100)));\r\n\tlet monster = new _personClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"](String(nameAdjectiveMonster[getRandomArbitrary(0, 2)] + ' ' + whichMonster[getRandomArbitrary(0, 2)] + ' ' + nameMonster[getRandomArbitrary(0, 2)]), String(drawLife(\"monster\", 100)));\r\n\r\n\tlet playerField = document.querySelector('.aboutPlayer');\r\n\tlet monsterField = document.querySelector('.aboutMonster');\r\n\r\n\tplayerField.firstElementChild.appendChild(createNode('span', {}, player.name));\r\n\tmonsterField.firstElementChild.appendChild(createNode('span', {}, monster.name));\r\n\r\n\t/*playerField.lastElementChild.appendChild(createNode('span', {}, player.score));\r\n\tmonsterField.lastElementChild.appendChild(createNode('span', {}, monster.score));*/\r\n\t\r\n\tloadFight();\r\n\t\r\n\tfunction loadFight() {\r\n\r\n\t\tlet mainField = document.querySelector('.field');\r\n\t\tconsole.log(mainField);\r\n\t\t\r\n\t\tlet mainHero = document.createElement('div');\r\n\t\tmainHero.className = 'hero';\r\n\t\tbuildPerson(mainHero, 1, 1, 1);\r\n\r\n\t\tlet modalWindow = document.createElement('div');\r\n\t\tmodalWindow.style.alignSelf = 'end';\r\n\t\tmodalWindow.style.justifySelf = 'center';\r\n\t\t//modalWindow.className = 'modal-dialog';\r\n\t\tmodalWindow.innerHTML = '<div class=\"modal-dialog\"><p class=\\\"close\\\" onclick=\\\"closeScore()\\\">&#215;</p>\\\r\n\t\t\t\t\t<p>Выберите заклинание:</p>\\\r\n\t\t\t\t\t<div class=\\\"spell\\\">\\\r\n\t\t\t\t\t\t<img src=\\\"../Images/Atack.png\\\" alt=\\\"\\\" onclick=\\\"showTask()\\\">\\\r\n\t\t\t\t\t\t<p>Атаковать соперника</p>\\\r\n\t\t\t\t\t\t<img src=\\\"../Images/Health.png\\\" alt=\\\"\\\" onclick=\\\"showTask()\\\">\\\r\n\t\t\t\t\t\t<p>Лечить себя</p>\\\r\n\t\t\t\t\t</div>\\\r\n\t\t\t\t</div>\\\r\n\t\t\t\t<button class=\\\"buttonStart\\\" onclick=\\\"dialog()\\\">Выберите магию</button>';\r\n\t\tmainField.appendChild(modalWindow);\r\n\t\t\r\n\t\tlet mainMonster = document.createElement('div');\r\n\t\tmainMonster.className = 'monster';\r\n\t\tbuildPerson(mainMonster, getRandomArbitrary(2, 4), getRandomArbitrary(2, 4), getRandomArbitrary(2, 4));\r\n\r\n\t\tlet movement = document.querySelectorAll(\".head\");\r\n\t\tpersonMove(movement, 25);\r\n\t\tpersonMove(document.querySelectorAll(\".weapon\"), 75);\r\n\t\t\r\n\r\n\t\tfunction buildPerson(element, number1, number2, number3) {\r\n\t\t\tvar frag = '<div class=\"weapon\" id=\"\"><img src=\"../Images/' + number3 + '-weapon.png\" alt=\"\" /></div><div class=\"head\" id=\"\"><img src=\"../Images/' + number1 + '-head.png\" alt=\"\" /></div><div class=\"body\"><img src=\"../Images/' + number2 + '-foot.png\" alt=\"\" /></div>';\r\n\t\t\telement.innerHTML = frag;\r\n\t\t\treturn mainField.appendChild(element);\r\n\t\t}\r\n\r\n\t\tfunction personMove(array, y0) {\r\n\t\t\tvar pos = 5;\r\n\t\t\tvar id = setInterval(frame, 300);\r\n\r\n\t\t\tfunction frame() {\r\n\t\t\t\tpos *= -1;\r\n\t\t\t\tarray.forEach(elem => {\r\n\t\t\t\t\telem.style.bottom = y0 + pos + 'px';\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction createNode(tag, props, ...children) {\r\n\t\tconst element = document.createElement(tag);\r\n\r\n\t\tObject.keys(props).forEach(key => element[key] = props[key]);\r\n\r\n\t\tchildren.forEach(child => {\r\n\t\t\tif (typeof child === 'string') {\r\n\t\t\t\tchild = document.createTextNode(child);\r\n\t\t\t}\r\n\r\n\t\t\telement.appendChild(child);\r\n\t\t});\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tfunction getRandomArbitrary(min, max) {\r\n\t\treturn Math.round(Math.random() * (max - min) + min);\r\n\t}\r\n\r\n\tfunction drawLife(personId, n) {\r\n\t\tdocument.querySelector(`#${personId}`).style.width = `${n*3+'px'}`;\r\n\t\treturn n;\r\n\t}\r\n\t\r\n\r\n         \r\n\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/personClass.js":
/*!****************************!*\
  !*** ./src/personClass.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nclass Person {\r\n    constructor(name, score) {\r\n        this.name = name;\r\n        this.score = score;\r\n\t\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/personClass.js?");

/***/ }),

/***/ "./src/waterfall.js":
/*!**************************!*\
  !*** ./src/waterfall.js ***!
  \**************************/
/*! exports provided: waterfallCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"waterfallCanvas\", function() { return waterfallCanvas; });\nvar waterfallCanvas = function(c, cw, ch){\r\n            \r\n            var _this = this;\r\n            this.c = c;\r\n            this.ctx = c.getContext('2d');\r\n            this.cw = cw;\r\n            this.ch = ch;           \r\n            \r\n            this.particles = [];\r\n            this.particleRate = 6;\r\n            this.gravity = .15;\r\n                            \r\n\r\n            this.init = function(){             \r\n                this.loop();\r\n            };\r\n            \r\n            this.reset = function(){                \r\n                this.ctx.clearRect(0,0,this.cw,this.ch);\r\n                this.particles = [];\r\n            };\r\n                        \r\n            this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};\r\n            \r\n\r\n            this.Particle = function(){\r\n                var newWidth = _this.rand(1,20);\r\n                var newHeight = _this.rand(1, 45);\r\n                this.x = _this.rand(10+(newWidth/2), _this.cw-10-(newWidth/2));\r\n                this.y = -newHeight;\r\n                this.vx = 0;\r\n                this.vy = 0;\r\n                this.width = newWidth;\r\n                this.height = newHeight;\r\n                this.hue = _this.rand(200, 220);\r\n                this.saturation = _this.rand(30, 60);\r\n                this.lightness = _this.rand(30, 60);\r\n            };\r\n            \r\n            this.Particle.prototype.update = function(i){\r\n                this.vx += this.vx; \r\n                this.vy += _this.gravity;\r\n                this.x += this.vx;\r\n                this.y += this.vy;                          \r\n            };\r\n            \r\n            this.Particle.prototype.render = function(){            \r\n                _this.ctx.strokeStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .05)';\r\n                _this.ctx.beginPath();\r\n                _this.ctx.moveTo(this.x, this.y);\r\n                _this.ctx.lineTo(this.x, this.y + this.height);\r\n                _this.ctx.lineWidth = this.width/2;\r\n                _this.ctx.lineCap = 'round';\r\n                _this.ctx.stroke();\r\n            };\r\n            \r\n            this.Particle.prototype.renderBubble = function(){              \r\n                _this.ctx.fillStyle = 'hsla('+this.hue+', 40%, 40%, 1)';\r\n                _this.ctx.fillStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .3)';\r\n                _this.ctx.beginPath();\r\n                _this.ctx.arc(this.x+this.width/2, _this.ch-20-_this.rand(0,10), _this.rand(1,8), 0, Math.PI*2, false);\r\n                _this.ctx.fill();\r\n            };\r\n                        \r\n            this.createParticles = function(){\r\n                var i = this.particleRate;\r\n                while(i--){\r\n                    this.particles.push(new this.Particle());\r\n                }\r\n            };\r\n            \r\n            this.removeParticles = function(){\r\n                var i = this.particleRate;\r\n                while(i--){\r\n                    var p = this.particles[i];\r\n                    if(p.y > _this.ch-20-p.height){\r\n                        p.renderBubble();\r\n                        _this.particles.splice(i, 1);\r\n                    }   \r\n                }\r\n            };\r\n                            \r\n            this.updateParticles = function(){                  \r\n                var i = this.particles.length;                      \r\n                while(i--){\r\n                    var p = this.particles[i];\r\n                    p.update(i);                                            \r\n                };                      \r\n            };\r\n            \r\n            this.renderParticles = function(){\r\n                var i = this.particles.length;                      \r\n                while(i--){\r\n                    var p = this.particles[i];\r\n                    p.render();                                         \r\n                };                  \r\n            };\r\n            \r\n            this.clearCanvas = function(){              \r\n                this.ctx.globalCompositeOperation = 'destination-out';\r\n                this.ctx.fillStyle = 'rgba(255,255,255,.06)';\r\n                this.ctx.fillRect(0,0,this.cw,this.ch);\r\n                this.ctx.globalCompositeOperation = 'lighter';\r\n            };\r\n            \r\n            this.loop = function(){\r\n                var loopIt = function(){                    \r\n                    requestAnimationFrame(loopIt, _this.c);                 \r\n                        _this.clearCanvas();                    \r\n                        _this.createParticles();                    \r\n                        _this.updateParticles();                    \r\n                        _this.renderParticles();    \r\n                        _this.removeParticles();\r\n                };\r\n                loopIt();                   \r\n            };\r\n        \r\n        };\r\n        \r\n    var isCanvasSupported = function(){\r\n        var elem = document.createElement('canvas');\r\n        return !!(elem.getContext && elem.getContext('2d'));\r\n    };\r\n    \r\n    var setupRAF = function(){\r\n        var lastTime = 0;\r\n        var vendors = ['ms', 'moz', 'webkit', 'o'];\r\n        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){\r\n            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];\r\n            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];\r\n        };\r\n        \r\n        if(!window.requestAnimationFrame){\r\n            window.requestAnimationFrame = function(callback, element){\r\n                var currTime = new Date().getTime();\r\n                var timeToCall = Math.max(0, 16 - (currTime - lastTime));\r\n                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);\r\n                lastTime = currTime + timeToCall;\r\n                return id;\r\n            };\r\n        };\r\n        \r\n        if (!window.cancelAnimationFrame){\r\n            window.cancelAnimationFrame = function(id){\r\n                clearTimeout(id);\r\n            };\r\n        };\r\n    };          \r\n    \r\n    if(isCanvasSupported()){\r\n            var c = document.getElementById('magic');\r\n            var cw = c.width = 220;\r\n            var ch = c.height = 500;    \r\n            var waterfall = new waterfallCanvas(c, cw, ch);           \r\n            setupRAF();\r\n            waterfall.init();\r\n    }\n\n//# sourceURL=webpack:///./src/waterfall.js?");

/***/ })

/******/ });