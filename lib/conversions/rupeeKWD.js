"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rupeeToKWD = rupeeToKWD;
exports.KWDToRupee = KWDToRupee;

var _constants = require("../constants");

function rupeeToKWD(value, KWDPerRupee) {
    return value * (KWDPerRupee || _constants.defaultConfig.KWDPerRupee);
}
function KWDToRupee(value, rupeePerKWD) {
    return value * (rupeePerKWD || _constants.defaultConfig.rupeePerKWD);
}
//# sourceMappingURL=rupeeKWD.js.map