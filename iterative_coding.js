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
  //create array of strings as individual letters
  let splitString = string.split('')

  //replace character at index with letter
  splitString[index] = letter

  //return string with replaced letter
  return splitString.join('')
}

replaceLetter(word, index, letter)
