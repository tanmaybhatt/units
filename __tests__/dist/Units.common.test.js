import Units from '../../dist/Units.common';
describe("Units module",()=>{
    it("should be defined and create new object correctly",()=>{
        var units = new Units;
        expect(units).toBeDefined();
    })
})