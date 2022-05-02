const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let codedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char == str[i + 1]) 
      count++;
    else {
      codedStr += count + str[i];
      count = 1;
    }
  }
  return codedStr.replace(/1(?!\d)/g, '');
}

module.exports = {
  encodeLine
};
