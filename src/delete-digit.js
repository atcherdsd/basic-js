const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxNum = +n.toString().slice(1);
  
  for (let i = 0; i < n.toString().length; i++) {
    
    let num = +n.toString().replace(`${n.toString()[i]}`, '');
    maxNum = num > maxNum ? num : maxNum;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
