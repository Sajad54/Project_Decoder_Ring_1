// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  //helper function that changes the characters
	function mapCharacters(message, languageA, languageB) {
    return message.map((character) => {
      const index = languageA.indexOf(character);
      if (index === -1) return character;
      return languageB[index];
    });
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) return false;

    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const key = alphabet.toLowerCase().split("");
    const inputMessage = input.toLowerCase().split("");

    for (let i = 0; i < key.length; i++) {
      for (let j = i + 1; j < key.length; j++) {
        if (key[i] === key[j]) return false;
      }
    }

    if (encode){ 
      return mapCharacters(inputMessage, letters, key).join("");
    }
    return mapCharacters(inputMessage, key, letters).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
