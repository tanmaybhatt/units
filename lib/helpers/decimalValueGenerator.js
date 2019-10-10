"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (convertedValue, decimalPlaces) {
    var factor = Math.pow(10, decimalPlaces);
    return Math.round(convertedValue * factor) / factor;
};
//# sourceMappingURL=decimalValueGenerator.js.map