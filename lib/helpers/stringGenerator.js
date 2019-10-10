"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value, unit, stringFormat) {
    var returnString = (0, _replaceAll2.default)(stringFormat, "<value>", value);
    returnString = (0, _replaceAll2.default)(returnString, "<unit>", unit);
    return returnString;
};

var _replaceAll = require("./replaceAll");

var _replaceAll2 = _interopRequireDefault(_replaceAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=stringGenerator.js.map