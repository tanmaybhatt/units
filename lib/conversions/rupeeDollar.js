"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rupeeToDollar = rupeeToDollar;
exports.dollarToRupee = dollarToRupee;

var _constants = require("../constants");

function rupeeToDollar(value, dollarPerRupee) {
    return value * (dollarPerRupee || _constants.defaultConfig.dollarPerRupee);
}
function dollarToRupee(value, rupeePerDollar) {
    return value * (rupeePerDollar || _constants.defaultConfig.rupeePerDollar);
}
//# sourceMappingURL=rupeeDollar.js.map