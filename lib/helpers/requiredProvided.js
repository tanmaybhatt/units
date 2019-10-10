'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
    var providedIn = _ref.providedIn,
        requiredIn = _ref.requiredIn,
        config = _ref.config,
        defaultValue = _ref.defaultValue,
        from = _ref.from,
        to = _ref.to;

    if (!providedIn && from) providedIn = from;
    if (!requiredIn && to) requiredIn = to;
    if (!providedIn) providedIn = _extends({}, defaultValue);else if (typeof providedIn == 'string') {
        providedIn = {
            name: providedIn,
            symbol: (0, _firstLetterCap2.default)(providedIn)
        };
    }
    if (!requiredIn) {
        if (config && config.unit) {
            requiredIn = {
                name: config.unit.name || config.unit,
                symbol: config.unit.symbol || (0, _firstLetterCap2.default)(config.unit.name) || (0, _firstLetterCap2.default)(config.unit)
            };
        } else {
            requiredIn = _extends({}, defaultValue);
        }
    } else if (typeof requiredIn == 'string') {
        requiredIn = {
            name: requiredIn,
            symbol: (0, _firstLetterCap2.default)(requiredIn)
        };
    }
    return {
        providedIn: providedIn,
        requiredIn: requiredIn
    };
};

var _firstLetterCap = require('./firstLetterCap');

var _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=requiredProvided.js.map