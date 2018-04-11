import Distance from '../../src/properties/Distance';
describe("Distance module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Distance("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Distance.bind(this,{});
        var convertedValue = Distance(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Distance.bind(this,{});
        var options = {
            providedIn: "km",
            requiredIn: 'mile',
        }
        var convertedValue = Distance(40,options);
        expect(convertedValue).toBe(24.8);
    });
    it("should convert correctly without config with options", ()=> {
        Distance.bind(this,{});
        var options = {
            providedIn: "km",
            requiredIn: 'mile',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Distance(41,options);
        expect(convertedValue).toBe("25.42 Miles");
    });
    it("should convert correctly without config with more options", ()=> {
        Distance.bind(this,{});
        var options = {
            providedIn: {
                name: "km",
                symbol: "km"
            },
            requiredIn: {
                name: "mile",
                symbol: "miles"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Distance(41,options);
        expect(convertedValue).toBe("miles 25.42");
    });
    it("should convert correctly without config with more options ( mile to km )", ()=> {
        Distance.bind(this,{});
        var options = {
            requiredIn: {
                name: "km",
                symbol: "km"
            },
            providedIn: {
                name: "mile",
                symbol: "miles"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Distance(25.42,options);
        expect(convertedValue).toBe("km 40.93");
    })
})