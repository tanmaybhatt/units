'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mphToKmph = mphToKmph;
exports.kmphToMph = kmphToMph;

var _constants = require('../constants');

function mphToKmph(value, kmphPerMph) {
    return value * (kmphPerMph || _constants.defaultConfig.kmphPerMph);
}

function kmphToMph(value, mphPerKmph) {
    return value * (mphPerKmph || _constants.defaultConfig.mphPerKmph);
}
//# sourceMappingURL=kmphMph.js.map