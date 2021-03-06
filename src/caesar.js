// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

	function caesar(input, shift, encode = true) {
      // When shift is an invalid amount it returns false 
    if(!shift || shift === 0 || shift < -25 || shift > 25){ 
      return false;
    }
    const chars = input.toLowerCase().split("");

    if(!encode){ 
      // decodes the message by going backwards
      shift = 0 - shift; 
    }
    const message = chars.map((letter) => {
      let ascii = letter.charCodeAt(0) - 97; 
      if (ascii < 0 || ascii > 26) {
        // returns any nonalphabetic symbols
        return letter; 
}
      ascii = ascii + shift;
      if (ascii < 0) ascii += 26; 
      ascii = ascii % 26;

      ascii += 97;
      return String.fromCharCode(ascii);
    });

    return message.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };



