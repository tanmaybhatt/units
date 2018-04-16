import Currency from './properties/Currency';
import Temperature from './properties/Temperature';
import Distance from './properties/Distance';
import Volume from './properties/Volume';
import Fuel from './properties/Fuel';
import Mass from './properties/Mass';
import { defaultConfig } from './constants';
import Speed from './properties/Speed';
import Pressure from './properties/Pressure';
module.exports = class Units {
    constructor(config) {
        this.config = config || defaultConfig || {};
        this.bindThis();
    }
    setConfig = (config) => {
        this.config = config;
        this.bindThis();
    }
    bindThis = () => {
        this.Currency = Currency.bind(this);
        this.Currency.units = ["rupee", "dollar", "KWD"];
        this.Temperature = Temperature.bind(this);
        this.Temperature.units = ["celcius", "fahrenheit"]
        this.Distance = Distance.bind(this);
        this.Distance.units = ["km","mile"];
        this.Volume = Volume.bind(this);
        this.Volume.units = ["liter","gallon"];
        this.Fuel = Fuel.bind(this);
        this.Fuel.units = ["liter","gallon"];
        this.Mass = Mass.bind(this);
        this.Mass.units = ["kg","pound"];
        this.Speed = Speed.bind(this);
        this.Speed.units = ["kmph","mph"]
        this.Pressure = Pressure.bind(this);
        this.Pressure.units = ["kpa","psi"];
    }
}