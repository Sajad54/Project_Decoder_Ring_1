// Write your tests here!
const { expect }  = require("chai");
const { caesar }  = require("../src/caesar");
describe("caesar()", () => {
	it("should encode correctly", () => {
		const message = "abc";
		const shift = 3;
		const actual = caesar(message, shift);
		const expected = "def";
		expect(actual).to.equal(expected);
	});

	it("should return false if shift is 0", () => {
		const message = "abc";
		const shift = 0;
		const actual = caesar(message, shift);
		expect(actual).to.be.false;
	});
	
	it("should decod correctly", () => {
		const message = "vdmdg";
		const shift = 3;
		const actual = caesar(message,shift,false);
		const expected = "sajad";
		expect(actual).to.equal(expected);
	});

	it("should ignore cases", () => {
		const message = "SajAd";
		const shift = 3;
		const actual = caesar(message,shift);
		const expected = "vdmdg";
		expect(actual).to.equal(expected)
	});

	it("should wrap around the alphabet", () => {
		const message = "o";
		const shift = 13;
		const actual = caesar(message,shift);
		const expected = "b";
		expect(actual).to.equal(expected);
	});
	
	it("should ignore spaces and other kinds of symbols",() => {
		const message = "$ajad says hello";
		const shift = 3;
		const actual = caesar(message,shift);
		const expected = "$dmdg vdbv khoor";
		expect(actual).to.equal(expected);
	});

});