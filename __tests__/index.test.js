import Units from '../src/index';
describe("Units Module",()=>{
    it("should be defined",()=>{
        expect(Units).toBeDefined();
        var units = new Units({config:{}});
        expect(units.Distance).toBeDefined();
        expect(typeof units.Distance).toBe('function');
        expect(units.Temperature).toBeDefined();
        expect(typeof units.Temperature).toBe('function');
        expect(units.Currency).toBeDefined();
        expect(typeof units.Currency).toBe('function');
        expect(units.Volume).toBeDefined();
        expect(typeof units.Volume).toBe('function');
        expect(units.Fuel).toBeDefined();
        expect(typeof units.Fuel).toBe('function');
        expect(units.Pressure).toBeDefined();
        expect(typeof units.Pressure).toBe('function');
        expect(units.Speed).toBeDefined();
        expect(typeof units.Speed).toBe('function');
        expect(units.Mass).toBeDefined();
        expect(typeof units.Mass).toBe('function');
    });
    it("should convert correctly if config provided explicitly", ()=> {
        var units = new Units({
            currency: {
                unit: {
                    name: 'dollar',
                    symbol: '$',
                }
            },
            fuel: {
                unit: {
                    name: 'gallon',
                    symbol: 'gal'
                }
            },
            volume: {
                unit: {
                    name: 'gallon',
                    symbol: 'gal'
                }
            },
            speed: {
                unit: {
                    name: 'mph',
                    symbol: 'mph'
                }
            },
            distance: {
                unit: {
                    name: 'mile',
                    symbol: 'm'
                }
            },
            temperature: {
                unit: {
                    name: 'fahrenheit',
                    symbol: '°F'
                }
            },
            pressure: {
                unit: {
                    name: 'psi',
                    symbol: 'psi'
                }
            },
            mass: {
                unit: {
                    name: 'pound',
                    symbol: 'lb'
                }
            },
            dollarPerRupee: 0.015,
            rupeePerDollar: 65,
            KWDPerRupee: 0.0046,
            rupeePerKWD: 217,
            milePerKm: 0.62,
            kmPerMile: 1.61,
            gallonPerLiter: 0.264,
            literPerGallon: 3.785,
            mphPerKmph: 0.621,
            kmphPerMph: 1.61,
            poundPerKg: 2.20,
            kgPerPound: 0.453,
            psiPerKpa: 0.145,
            kpaPerPsi: 6.89
        });
        expect(units.Distance(40)).toBe(24.8);
        expect(units.Distance(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("25.42 m");
        expect(units.Pressure(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("5.94 psi");
        expect(units.Temperature(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("105.8 °F");
        expect(units.Speed(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("25.42 mph");
        expect(units.Volume(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("10.82 gal");
        expect(units.Fuel(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("10.82 gal");
        expect(units.Mass(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("90.2 lb");
        expect(units.Currency(41,{
            decimalPlaces: 2,
            stringFormat: "<value> <unit>",
        })).toBe("0.62 $");
    });
})