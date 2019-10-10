'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mileToKm = mileToKm;
exports.kmToMile = kmToMile;

var _constants = require('../constants');

function mileToKm(value, kmPerMile) {
    return value * (kmPerMile || _constants.defaultConfig.kmPerMile);
}

function kmToMile(value, milePerKm) {
    return value * (milePerKm || _constants.defaultConfig.milePerKm);
}
//# sourceMappingURL=kmMile.js.map