import Speed from '../../src/properties/Speed';
describe("Speed module", ()=>{
    it("should initialize correctly",()=>{
        var convertedValue = Speed("value");
        expect(convertedValue).toBe('value');
    });
    it("should not convert without config, without options", ()=> {
        Speed.bind(this,{});
        var convertedValue = Speed(40);
        expect(convertedValue).toBe(40);
    });
    it("should convert correctly without config, without options", ()=> {
        Speed.bind(this,{});
        var options = {
            providedIn: "kmph",
            requiredIn: 'mph',
        }
        var convertedValue = Speed(40,options);
        expect(convertedValue).toBe(24.8);
    });
    it("should convert correctly without config with options", ()=> {
        Speed.bind(this,{});
        var options = {
            providedIn: "kmph",
            requiredIn: 'mph',
            decimalPlaces: 2,
            stringFormat: "<value> <unit>s"
        }
        var convertedValue = Speed(41,options);
        expect(convertedValue).toBe("25.42 Mphs");
    });
    it("should convert correctly without config with more options", ()=> {
        Speed.bind(this,{});
        var options = {
            providedIn: {
                name: "kmph",
                symbol: "kmph"
            },
            requiredIn: {
                name: "mph",
                symbol: "mph"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Speed(41,options);
        expect(convertedValue).toBe("mph 25.42");
    });
    it("should convert correctly without config with more options ( mph to kmph )", ()=> {
        Speed.bind(this,{});
        var options = {
            requiredIn: {
                name: "kmph",
                symbol: "kmph"
            },
            providedIn: {
                name: "mph",
                symbol: "mphs"
            },
            decimalPlaces: 2,
            stringFormat: "<unit> <value>"
        }
        var convertedValue = Speed(25.42,options);
        expect(convertedValue).toBe("kmph 40.93");
    })
})