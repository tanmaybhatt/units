import Mass from '../../src/properties/Mass';
describe("Mass module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Mass("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Mass.bind(this,{});
        var convertedValue = Mass(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Mass.bind(this,{});
        var options = {
            providedIn: "kg",
            requiredIn: 'pound',
        }
        var convertedValue = Mass(40,options);
        expect(convertedValue).toBe(88);
    });
    it("should convert correctly without config with options", ()=> {
        Mass.bind(this,{});
        var options = {
            providedIn: "kg",
            requiredIn: 'pound',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Mass(41,options);
        expect(convertedValue).toBe("90.2 Pounds");
    });
    it("should convert correctly without config with more options", ()=> {
        Mass.bind(this,{});
        var options = {
            providedIn: {
                name: "kg",
                symbol: "kg"
            },
            requiredIn: {
                name: "pound",
                symbol: "pounds"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Mass(41,options);
        expect(convertedValue).toBe("pounds 90.2");
    });
    it("should convert correctly without config with more options ( pound to kg )", ()=> {
        Mass.bind(this,{});
        var options = {
            requiredIn: {
                name: "kg",
                symbol: "kg"
            },
            providedIn: {
                name: "pound",
                symbol: "pounds"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Mass(25.42,options);
        expect(convertedValue).toBe("kg 11.52");
    })
})