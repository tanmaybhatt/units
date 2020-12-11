'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        providedIn = _ref.providedIn,
        requiredIn = _ref.requiredIn,
        decimalPlaces = _ref.decimalPlaces,
        stringFormat = _ref.stringFormat,
        configOverrides = _ref.configOverrides,
        from = _ref.from,
        to = _ref.to,
        toBest = _ref.toBest;

    var config = getConfig();
    if (configOverrides) config = configOverrides;else config = config ? config.currency || {} : {};

    var _requiredProvided = (0, _requiredProvided3.default)({
        from: from,
        to: to,
        providedIn: providedIn,
        requiredIn: requiredIn,
        config: config,
        defaultValue: {
            name: 'rupee',
            symbol: '₹'
        }
    }),
        providedIn = _requiredProvided.providedIn,
        requiredIn = _requiredProvided.requiredIn;

    var returnValue = (0, _converter2.default)({
        noThirdParty: true,
        value: value,
        providedIn: providedIn,
        requiredIn: requiredIn,
        decimalPlaces: decimalPlaces,
        stringFormat: stringFormat,
        config: config,
        toBest: toBest
    });
    return returnValue;
};

var _requiredProvided2 = require('../helpers/requiredProvided');

var _requiredProvided3 = _interopRequireDefault(_requiredProvided2);

var _converter = require('../helpers/converter');

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=Currency.js.map