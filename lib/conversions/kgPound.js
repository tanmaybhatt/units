'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.poundToKg = poundToKg;
exports.kgToPound = kgToPound;

var _constants = require('../constants');

function poundToKg(value, kgPerPound) {
    return value * (kgPerPound || _constants.defaultConfig.kgPerPound);
}

function kgToPound(value, poundPerKg) {
    return value * (poundPerKg || _constants.defaultConfig.poundPerKg);
}
//# sourceMappingURL=kgPound.js.map