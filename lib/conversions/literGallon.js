'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gallonToLiter = gallonToLiter;
exports.literToGallon = literToGallon;

var _constants = require('../constants');

function gallonToLiter(value, literPerGallon) {
    return value * (literPerGallon || _constants.defaultConfig.literPerGallon);
}

function literToGallon(value, gallonPerLiter) {
    return value * (gallonPerLiter || _constants.defaultConfig.gallonPerLiter);
}
//# sourceMappingURL=literGallon.js.map