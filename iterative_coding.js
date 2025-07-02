const word = 'computer'
const index = Math.floor(Math.random() * word.length)
const letter = 'b'

/**
 * Replaces a letter in a word
 * @param {string} string - Word being changed
 * @param {number} index - Index of letter to be replaced
 * @param {string} letter - letter to replace above letter with
 * @return {string} Word after letter has been replaced
 */
const replaceLetter = (string, index, letter) => {
  //just to make sure we're getting the values
  //console.log(`string: ${string}, index: ${index}, letter: ${letter}`)
  for (let i = 0; i <= index; i++) {
    //check that we can find the spot where letter needs to be replaced
    console.log(string.charAt(i))
  }
}

replaceLetter(word, index, letter)
