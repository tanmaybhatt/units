'use strict';

var _class, _temp, _initialiseProps;

var _Currency = require('./properties/Currency');

var _Currency2 = _interopRequireDefault(_Currency);

var _Temperature = require('./properties/Temperature');

var _Temperature2 = _interopRequireDefault(_Temperature);

var _Distance = require('./properties/Distance');

var _Distance2 = _interopRequireDefault(_Distance);

var _Volume = require('./properties/Volume');

var _Volume2 = _interopRequireDefault(_Volume);

var _Fuel = require('./properties/Fuel');

var _Fuel2 = _interopRequireDefault(_Fuel);

var _Mass = require('./properties/Mass');

var _Mass2 = _interopRequireDefault(_Mass);

var _constants = require('./constants');

var _Speed = require('./properties/Speed');

var _Speed2 = _interopRequireDefault(_Speed);

var _Pressure = require('./properties/Pressure');

var _Pressure2 = _interopRequireDefault(_Pressure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (_temp = _class = function Units(config) {
    _classCallCheck(this, Units);

    _initialiseProps.call(this);

    this.config = config || _constants.defaultConfig || {};
    this.bindThis();
}, _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.setConfig = function (config) {
        _this.config = config;
        _this.bindThis();
    };

    this.bindThis = function () {
        _this.Currency = _Currency2.default.bind(_this);
        _this.Currency.units = ["rupee", "dollar", "KWD"];
        _this.Temperature = _Temperature2.default.bind(_this);
        _this.Temperature.units = ["C", "F"];
        _this.Distance = _Distance2.default.bind(_this);
        _this.Distance.units = ["km", "mi"];
        _this.Volume = _Volume2.default.bind(_this);
        _this.Volume.units = ["l", "gal"];
        _this.Fuel = _Fuel2.default.bind(_this);
        _this.Fuel.units = ["l", "gal"];
        _this.Mass = _Mass2.default.bind(_this);
        _this.Mass.units = ["kg", "lb"];
        _this.Speed = _Speed2.default.bind(_this);
        _this.Speed.units = ["km/h", "m/h"];
        _this.Pressure = _Pressure2.default.bind(_this);
        _this.Pressure.units = ["kPa", "psi"];
    };
}, _temp);
//# sourceMappingURL=index.js.map