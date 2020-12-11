'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setConfig = exports.getConfig = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var UnitsClosure = function UnitsClosure() {
    var config = _constants.defaultConfig;
    function getConfig() {
        return config;
    }
    function setConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        config = _extends({}, _constants.defaultConfig, config);
    }
    return { getConfig: getConfig, setConfig: setConfig };
};

var _UnitsClosure = UnitsClosure(),
    getConfig = _UnitsClosure.getConfig,
    setConfig = _UnitsClosure.setConfig;

exports.getConfig = getConfig;
exports.setConfig = setConfig;
//# sourceMappingURL=index.js.map