// Write your tests here!
const { expect }  = require("chai");
const { substitution }  = require("../src/substitution");

describe("substitution()", () => {
    it("encodes correctly", () => {
        const message = "hello";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(message,alphabet);
        expect(actual).to.equal("svool")
    });

    it("decodes correcty",() => {
        const message = "svool";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
                        
        const actual = substitution(message,alphabet);
        expect(actual).to.equal("hello")
    });

    it("returns false if the alphabet does not contain unique characters",() => {
        const message = "hello";
        const alphabet = "ababababababababababababab";
        const actual = substitution(message,alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if alphabet is not 26 characters long",() => {
        const message = "hello";
        const alphabet = "ababababa";
        const actual = substitution(message,alphabet);
        expect(actual).to.be.false;
    });

    it("should perserve spaces",() => {
        const message = "hello guys";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(message,alphabet);
        expect(actual).to.equal("svool tfbh");
    });
});
