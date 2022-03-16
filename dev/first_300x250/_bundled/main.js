(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

var w = size.w;
var h = size.h;

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
	TweenLite.set("#olg", { opacity: 1 });
	var tl = new TimelineMax();

	tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
	tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

	// tl.timeScale(2)

	return tl;
}

function chev() {
	var tl = new TimelineMax();

	tl.add("chev", "+=.1");
	tl.to(".zero", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_1", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_2", { duration: .3, opacity: 0 }, "-=.2");
	tl.from(".chev_3", { duration: .3, opacity: 0 }, "-=.2");
	return tl;
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	tl.set(".frame1", { opacity: 1 });

	return tl;
}

exports.size = size;
exports.init = init;
exports.olg = olg;
exports.chev = chev;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();

tl.from(".o", { duration: .3, scale: 1, ease: 'back.out', opacity: 0 }, "+=.2");
tl.add("proline", "+=.4");
tl.from(".o-shadow", { duration: .1, opacity: 0 }, "proline");
tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "proline");

tl.to(".proline", { duration: .2, opacity: 0 }, "+=1");

tl.add("t1-in");
tl.from(".t1a", { x: '-' + _commonJsCommonJs.size.w, duration: .2 }, "t1-in");
tl.from(".t1b", { x: _commonJsCommonJs.size.w, duration: .2 }, "t1-in");

tl.add("f1-out", "+=2.2");
tl.to(".t1a", { x: '-' + _commonJsCommonJs.size.w, duration: .3 }, "f1-out");
tl.to(".t1b", { x: _commonJsCommonJs.size.w, duration: .3 }, "f1-out");
tl.to([".o-shadow", ".proline", ".o"], { duration: .1, opacity: 0 }, "f1-out");

tl.from(".bring", { duration: .25, x: "-=100", opacity: 0 });
tl.add((0, _commonJsCommonJs.chev)());

tl.from(".t2", { duration: .3, opacity: 0 }, "+=.3");
tl.to(".t2", { duration: .3, opacity: 0 }, "+=2.7");

tl.add("cta", "+=.2");
tl.from(".end", { duration: .3, opacity: 0 }, "cta");
tl.from(".cta", { duration: .3, opacity: 0 }, "cta");

tl.add("end", "+=.3");
tl.add((0, _commonJsCommonJs.olg)(), "end");
tl.from(".footer", { duration: .5, opacity: 0 }, "end");

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map