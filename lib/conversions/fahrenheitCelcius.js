'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fahrenheitToCelcius = fahrenheitToCelcius;
exports.celciusToFahrenheit = celciusToFahrenheit;

var _constants = require('constants');

function fahrenheitToCelcius(value) {
    return (value - 32) * 5 / 9;
}

function celciusToFahrenheit(value) {
    return value * 9 / 5 + 32;
}
//# sourceMappingURL=fahrenheitCelcius.js.map