import firstCaseCap from '../../src/helpers/firstLetterCap';
describe("Capitalize first letter Module",()=>{
    it("should return first letter capital",()=>{
        var string = firstCaseCap("test");
        expect(string[0]).toBe('T');
        expect(string).toBe("Test");
    })
})