import Volume from '../../src/properties/Volume';
describe("Volume module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Volume("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Volume.bind(this,{});
        var convertedValue = Volume(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Volume.bind(this,{});
        var options = {
            providedIn: "liter",
            requiredIn: 'gallon',
        }
        var convertedValue = Volume(40,options);
        expect(convertedValue).toBe(10.56);
    });
    it("should convert correctly without config with options", ()=> {
        Volume.bind(this,{});
        var options = {
            providedIn: "liter",
            requiredIn: 'gallon',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Volume(41,options);
        expect(convertedValue).toBe("10.82 Gallons");
    });
    it("should convert correctly without config with more options", ()=> {
        Volume.bind(this,{});
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
        var convertedValue = Volume(41,options);
        expect(convertedValue).toBe("gallons 10.82");
    });
    it("should convert correctly without config with more options ( gallon to liter )", ()=> {
        Volume.bind(this,{});
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
        var convertedValue = Volume(10.82,options);
        expect(convertedValue).toBe("liter 40.95");
    })
})