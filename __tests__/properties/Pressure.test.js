import Pressure from '../../src/properties/Pressure';
describe("Pressure module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Pressure("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Pressure.bind(this,{});
        var convertedValue = Pressure(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Pressure.bind(this,{});
        var options = {
            providedIn: "kpa",
            requiredIn: 'psi',
        }
        var convertedValue = Pressure(40,options);
        expect(convertedValue).toBe(5.8);
    });
    it("should convert correctly without config with options", ()=> {
        Pressure.bind(this,{});
        var options = {
            providedIn: "kpa",
            requiredIn: 'psi',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Pressure(41,options);
        expect(convertedValue).toBe("5.94 Psis");
    });
    it("should convert correctly without config with more options", ()=> {
        Pressure.bind(this,{});
        var options = {
            providedIn: {
                name: "kpa",
                symbol: "kpa"
            },
            requiredIn: {
                name: "psi",
                symbol: "psi"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Pressure(41,options);
        expect(convertedValue).toBe("psi 5.94");
    });
    it("should convert correctly without config with more options ( psi to kpa )", ()=> {
        Pressure.bind(this,{});
        var options = {
            requiredIn: {
                name: "kpa",
                symbol: "kpa"
            },
            providedIn: {
                name: "psi",
                symbol: "psis"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Pressure(25.42,options);
        expect(convertedValue).toBe("kpa 175.14");
    })
})