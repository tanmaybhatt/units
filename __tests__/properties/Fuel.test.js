import Fuel from '../../src/properties/Fuel';
describe("Fuel module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Fuel("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Fuel.bind(this,{});
        var convertedValue = Fuel(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Fuel.bind(this,{});
        var options = {
            providedIn: "liter",
            requiredIn: 'gallon',
        }
        var convertedValue = Fuel(40,options);
        expect(convertedValue).toBe(10.56);
    });
    it("should convert correctly without config with options", ()=> {
        Fuel.bind(this,{});
        var options = {
            providedIn: "liter",
            requiredIn: 'gallon',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Fuel(41,options);
        expect(convertedValue).toBe("10.82 Gallons");
    });
    it("should convert correctly without config with more options", ()=> {
        Fuel.bind(this,{});
        var options = {
            providedIn: {
                name: "liter",
                symbol: "liter"
            },
            requiredIn: {
                name: "gallon",
                symbol: "gallons"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Fuel(41,options);
        expect(convertedValue).toBe("gallons 10.82");
    });
    it("should convert correctly without config with more options ( gallon to liter )", ()=> {
        Fuel.bind(this,{});
        var options = {
            requiredIn: {
                name: "liter",
                symbol: "liter"
            },
            providedIn: {
                name: "gallon",
                symbol: "gallons"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Fuel(10.82,options);
        expect(convertedValue).toBe("liter 40.95");
    })
})