const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  
  let copy = arr.slice();

  for (let i = 0; i < copy.length; i++) {
    let manageContent = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    
    if (copy[i] == manageContent[0] && copy[i + 1])
      copy.splice(i, 2);
    else if (copy[i] == manageContent[1] && copy[i - 1])
      copy.splice(i - 1, 2);
    else if (copy[i] == manageContent[2] && copy[i + 1])
      copy.splice(i, 1, copy[i + 1]);
    else if (copy[i] == manageContent[3] && copy[i - 1])
      copy.splice(i, 1, copy[i - 1]);
  }
  return copy.filter(item => !/discard|double/.test(item));
}
module.exports = {
  transform
};
