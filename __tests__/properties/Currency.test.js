import Currency from '../../src/properties/Currency';
describe("Currency module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Currency("value");
        expect(convertedValue).toBe('value');
    })
    it("should convert correctly without config, without options", ()=> {
        Currency.bind(this,{});
        var options = {
            providedIn: "rupee",
            requiredIn: 'dollar',
        }
        var convertedValue = Currency(40,options);
        expect(convertedValue).toBe(0.6);
    });
    it("should convert correctly without config with options", ()=> {
        Currency.bind(this,{});
        var options = {
            providedIn: "rupee",
            requiredIn: 'dollar',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Currency(41,options);
        expect(convertedValue).toBe("0.62 Dollars");
    });
    it("should convert correctly without config with more options", ()=> {
        Currency.bind(this,{});
        var options = {
            providedIn: {
                name: "rupee",
                symbol: "Rs."
            },
            requiredIn: {
                name: "dollar",
                symbol: "$"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Currency(41,options);
        expect(convertedValue).toBe("$ 0.62");
    })
})