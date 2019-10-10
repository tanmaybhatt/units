'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.psiToKpa = psiToKpa;
exports.kpaToPsi = kpaToPsi;

var _constants = require('../constants');

function psiToKpa(value, kpaPerPsi) {
    return value * (kpaPerPsi || _constants.defaultConfig.kpaPerPsi);
}

function kpaToPsi(value, psiPerKpa) {
    return value * (psiPerKpa || _constants.defaultConfig.psiPerKpa);
}
//# sourceMappingURL=kpaPsi.js.map