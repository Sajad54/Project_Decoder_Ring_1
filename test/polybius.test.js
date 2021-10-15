// Write your tests here!
const { expect }  = require("chai");
const { polybius }  = require("../src/polybius");

describe("polybius()", () => {
    it("it sdhoule encode properly",() => {
        const message = "sajad";
        const actual = polybius(message);
        expect(actual).to.equal("3411421141")
    });

    it("should decode correctly",() => {
        const message = "3411421141";
        const actual = polybius(message, false);
        expect(actual).to.equal("sa(i/j)ad");
    });

    it("should return false if number of characters are odd",() => {
        const message = "111";
        const actual = polybius(message,false);
        expect(actual).to.be.false;
    });

    it("should ignore any non-alpabectic characters",() => {
        const message = "Hello!!%";
        const actual = polybius(message);
        expect(actual).to.equal("3251131343");
    });
    
    it("should maintain any spaces",() => {
        const message = "hello guys";
        const actual = polybius(message);
        expect(actual).to.equal("3251131343 22544534");
    });
});