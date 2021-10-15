// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const split = input.toLowerCase().split("");

    const encoderArray = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    if (encode) {
      // encoding method for the input 
      const output = split.map((letter) => {
        const ascii = letter.charCodeAt(0);
        //for nonalphabetic or space character
        if ((ascii < 97 || ascii > 122) && ascii != 32){
          return;
        }
        for (let i = 0; i < encoderArray.length; i++) {
          for (let j = 0; j < encoderArray[i].length; j++) {
            if (encoderArray[i][j] === letter) return `${j + 1}${i + 1}`;
            if (letter === "i" || letter === "j") return "42";
            if (letter === " ") return " ";
          }
        }
      });
      return output.join("");
    }

    //decoding method for the input 
    let output = "";
    for (let i = 0; i < split.length; i += 2) {
      if (split[i] === " ") {
        output += " ";
        i--;
        continue;
      }
      if (!split[i + 1]){
        //for when there is an invalid number of characters 
        return false;
      }
      output += encoderArray[split[i + 1] - 1][split[i] - 1];
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
