import Temperature from '../../src/properties/Temperature';
describe("Temperature module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Temperature("value");
        expect(convertedValue).toBe('value');
    })
    it("should convert correctly without config, without options", ()=> {
        Temperature.bind(this,{});
        var options = {
            providedIn: "celcius",
            requiredIn: 'fahrenheit',
        }
        var convertedValue = Temperature(40,options);
        expect(convertedValue).toBe(104);
    });
    it("should convert correctly without config with options", ()=> {
        Temperature.bind(this,{});
        var options = {
            providedIn: "celcius",
            requiredIn: 'fahrenheit',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>"
        }
        var convertedValue = Temperature(41,options);
        expect(convertedValue).toBe("105.8 Fahrenheit");
    });
    it("should convert correctly without config with more options", ()=> {
        Temperature.bind(this,{});
        var options = {
            providedIn: {
                name: "celcius",
                symbol: "°C"
            },
            requiredIn: {
                name: "fahrenheit",
                symbol: "°F"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Temperature(41,options);
        expect(convertedValue).toBe("°F 105.8");
    });
    it("should convert correctly without config with more options ( F to C )", ()=> {
        Temperature.bind(this,{});
        var options = {
            requiredIn: {
                name: "celcius",
                symbol: "°C"
            },
            providedIn: {
                name: "fahrenheit",
                symbol: "°F"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Temperature(105.8,options);
        expect(convertedValue).toBe("°C 41");
    })
})