"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var countdown = 10;
var interval$ = rxjs_1.interval(1000).pipe(operators_1.mapTo(-1));
interval$.subscribe(function (val) { return console.log(val); });
