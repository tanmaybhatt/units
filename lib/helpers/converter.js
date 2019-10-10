'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var value = _ref.value,
        providedIn = _ref.providedIn,
        requiredIn = _ref.requiredIn,
        decimalPlaces = _ref.decimalPlaces,
        stringFormat = _ref.stringFormat,
        _ref$config = _ref.config,
        config = _ref$config === undefined ? {} : _ref$config,
        noThirdParty = _ref.noThirdParty,
        toBest = _ref.toBest;

    var convertedValue;
    if (providedIn.name == requiredIn.name) convertedValue = value;else {
        var functionName = providedIn.name + 'To' + (0, _firstLetterCap2.default)(requiredIn.name);
        var converter = _Conversions2.default[functionName];
        var factorName = providedIn.name + 'Per' + (0, _firstLetterCap2.default)(requiredIn.name);
        if (noThirdParty) convertedValue = converter(value, config[factorName]);else if (toBest) {
            convertedValue = convert(value).from(providedIn.name).toBest();
            requiredIn.symbol = convertedValue.unit;
            convertedValue = convertedValue.val;
        } else convertedValue = convert(value).from(providedIn.name).to(requiredIn.name);
    }
    var returnValue = convertedValue;
    if (typeof decimalPlaces !== 'undefined' && decimalPlaces !== null) {
        returnValue = (0, _decimalValueGenerator2.default)(returnValue, decimalPlaces);
    }
    if (stringFormat) {
        returnValue = (0, _stringGenerator2.default)(returnValue, requiredIn.symbol, stringFormat);
    }
    return returnValue;
};

var _Conversions = require('../Conversions');

var _Conversions2 = _interopRequireDefault(_Conversions);

var _firstLetterCap = require('./firstLetterCap');

var _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);

var _decimalValueGenerator = require('./decimalValueGenerator');

var _decimalValueGenerator2 = _interopRequireDefault(_decimalValueGenerator);

var _stringGenerator = require('./stringGenerator');

var _stringGenerator2 = _interopRequireDefault(_stringGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert = require('convert-units');
//# sourceMappingURL=converter.js.map